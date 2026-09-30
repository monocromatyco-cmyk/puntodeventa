const crypto = require('node:crypto');
const { neon } = require('@neondatabase/serverless');
const { MAX_STATE_BYTES, createEmptyState, normalizeSettings, isValidState } = require('../domain.js');

const COOKIE_NAME = 'mono_cromat_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const ATTEMPT_WINDOW_MS = 15 * 60_000;

// Dependencies are injectable so the full persistence protocol can be tested
// without connecting tests or Preview deployments to a production database.
function createHandler({ env = process.env, sqlFactory = neon, now = Date.now, logger = console } = {}) {
  let schemaReady;
  let schemaUrl;
  const loginAttempts = new Map();
  const production = () => env.NODE_ENV === 'production' || Boolean(env.VERCEL);

  function send(res, status, payload, headers = {}) {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, private');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    for (const [name, value] of Object.entries(headers)) res.setHeader(name, value);
    res.end(status === 204 ? undefined : JSON.stringify(payload));
  }

  function secureConfig() {
    const length = (env.APP_PASSWORD || '').length;
    return length >= 12 && length <= 256 && Buffer.byteLength(env.SESSION_SECRET || '') >= 32 && Boolean(env.DATABASE_URL);
  }
  function signature(value) {
    return crypto.createHmac('sha256', env.SESSION_SECRET).update(value).digest('base64url');
  }
  function safeEqual(left, right) {
    return crypto.timingSafeEqual(crypto.createHash('sha256').update(left).digest(), crypto.createHash('sha256').update(right).digest());
  }
  function cookies(req) {
    const parsed = {};
    for (const part of (req.headers.cookie || '').split(';')) {
      const index = part.indexOf('=');
      if (index < 0) continue;
      const key = part.slice(0, index).trim();
      if (!key) continue;
      try { parsed[key] = decodeURIComponent(part.slice(index + 1).trim()); } catch { parsed[key] = ''; }
    }
    return parsed;
  }
  function authenticated(req) {
    if (!secureConfig()) return false;
    const parts = (cookies(req)[COOKIE_NAME] || '').split('.');
    if (parts.length !== 2) return false;
    const [issuedAt, providedSignature] = parts;
    if (!/^\d{10,13}$/.test(issuedAt) || !providedSignature) return false;
    const timestamp = Number(issuedAt) * (issuedAt.length <= 10 ? 1000 : 1);
    if (!Number.isFinite(timestamp) || timestamp > now() + 60_000 || now() - timestamp > SESSION_TTL_SECONDS * 1000) return false;
    return safeEqual(providedSignature, signature(issuedAt));
  }
  function cookieHeader(value, maxAge) {
    return `${COOKIE_NAME}=${encodeURIComponent(value)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${production() ? '; Secure' : ''}`;
  }
  function sameOrigin(req) {
    if (!req.headers.origin) return true;
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').split(',')[0].trim();
    try { return new URL(req.headers.origin).host === host; } catch { return false; }
  }
  async function getSql() {
    if (!env.DATABASE_URL) throw new Error('Database is not configured');
    const sql = sqlFactory(env.DATABASE_URL);
    if (!schemaReady || schemaUrl !== env.DATABASE_URL) {
      schemaUrl = env.DATABASE_URL;
      schemaReady = sql`
        CREATE TABLE IF NOT EXISTS mono_cromat_state (
          singleton boolean PRIMARY KEY DEFAULT true CHECK (singleton),
          payload jsonb NOT NULL,
          revision integer NOT NULL DEFAULT 0,
          updated_at timestamptz NOT NULL DEFAULT now()
        )
      `.catch(error => { schemaReady = null; throw error; });
    }
    await schemaReady;
    return sql;
  }
  function requestBody(req) {
    try {
      if (typeof req.body === 'string') {
        return Buffer.byteLength(req.body) <= MAX_STATE_BYTES ? JSON.parse(req.body) : null;
      }
      if (!req.body || typeof req.body !== 'object' || Buffer.byteLength(JSON.stringify(req.body)) > MAX_STATE_BYTES) return null;
      return req.body;
    } catch { return null; }
  }

  return async function handler(req, res) {
    const path = new URL(req.url, `https://${req.headers.host || 'localhost'}`).pathname.replace(/\/$/, '');
    if (!sameOrigin(req)) return send(res, 403, { error: 'Origen no permitido.' });
    if (req.method === 'OPTIONS') return send(res, 204, {}, { Allow: 'GET, POST, PUT, OPTIONS' });

    if (path === '/api/auth/session' && req.method === 'GET') {
      if (!secureConfig() && production()) return send(res, 503, { configured: false, error: 'Configura DATABASE_URL, APP_PASSWORD y SESSION_SECRET en Vercel para habilitar la aplicación.' });
      return send(res, 200, { configured: secureConfig(), authenticated: authenticated(req), localMode: !secureConfig() });
    }
    if (path === '/api/auth/login' && req.method === 'POST') {
      if (!secureConfig()) return send(res, 503, { error: 'Configura DATABASE_URL, APP_PASSWORD y SESSION_SECRET en el servidor.' });
      const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
      const timestamp = now();
      for (const [key, attempt] of loginAttempts) if (timestamp - attempt.since > ATTEMPT_WINDOW_MS) loginAttempts.delete(key);
      const attempt = loginAttempts.get(ip) || { count: 0, since: timestamp };
      if (attempt.count >= 8) return send(res, 429, { error: 'Demasiados intentos. Espera 15 minutos antes de volver a probar.' });
      const body = requestBody(req);
      if (!body || typeof body.password !== 'string' || body.password.length > 256 || !safeEqual(body.password, env.APP_PASSWORD)) {
        attempt.count += 1;
        // Best-effort per-instance throttle. Bound its memory usage; traffic
        // protection in Vercel is still required for a shared-password app.
        if (!loginAttempts.has(ip) && loginAttempts.size >= 2048) loginAttempts.delete(loginAttempts.keys().next().value);
        loginAttempts.set(ip, attempt);
        return send(res, 401, { error: 'La contraseña no es correcta.' });
      }
      loginAttempts.delete(ip);
      const issuedAt = String(timestamp);
      return send(res, 200, { authenticated: true }, { 'Set-Cookie': cookieHeader(`${issuedAt}.${signature(issuedAt)}`, SESSION_TTL_SECONDS) });
    }
    if (path === '/api/auth/logout' && req.method === 'POST') {
      return send(res, 200, { authenticated: false }, { 'Set-Cookie': cookieHeader('', 0) });
    }
    if (path !== '/api/state') return send(res, 404, { error: 'Ruta no encontrada.' });
    if (!authenticated(req)) return send(res, 401, { error: 'Inicia sesión para acceder a los datos.' });
    if (!['GET', 'PUT'].includes(req.method)) return send(res, 405, { error: 'Método no permitido.' }, { Allow: 'GET, PUT' });

    const body = req.method === 'PUT' ? requestBody(req) : null;
    if (req.method === 'PUT' && (!body || !isValidState(body.state) || !Number.isSafeInteger(body.revision) || body.revision < 0)) {
      return send(res, 400, { error: 'Los datos recibidos no tienen un formato válido o exceden el límite de 1 MB.' });
    }
    try {
      const sql = await getSql();
      if (req.method === 'GET') {
        const rows = await sql`SELECT payload, revision FROM mono_cromat_state WHERE singleton = true`;
        // A read must not create a row. Migration remains retryable until the
        // first successful write, including databases initialized by PR2 at r0.
        if (!rows.length) return send(res, 200, { state: createEmptyState(), revision: 0, isNew: true });
        const row = rows[0];
        const state = { ...row.payload, settings: normalizeSettings(row.payload.settings) };
        if (!isValidState(state)) throw new Error('Stored workspace failed validation');
        const isNew = row.revision === 0 && ['clients', 'products', 'sales', 'payments'].every(key => state.data[key].length === 0);
        return send(res, 200, { state, revision: row.revision, isNew });
      }
      // One atomic statement handles first creation and revision-checked updates.
      // Two clients starting at revision zero cannot overwrite one another.
      const result = body.revision === 0 ? await sql`
        INSERT INTO mono_cromat_state (singleton, payload, revision)
        VALUES (true, ${JSON.stringify(body.state)}::jsonb, 1)
        ON CONFLICT (singleton) DO UPDATE
        SET payload = EXCLUDED.payload,
            revision = mono_cromat_state.revision + 1,
            updated_at = now()
        WHERE mono_cromat_state.revision = ${body.revision}
        RETURNING revision, updated_at
      ` : await sql`
        UPDATE mono_cromat_state
        SET payload = ${JSON.stringify(body.state)}::jsonb,
            revision = revision + 1,
            updated_at = now()
        WHERE singleton = true AND revision = ${body.revision}
        RETURNING revision, updated_at
      `;
      if (!result.length) return send(res, 409, { error: 'Los datos cambiaron en otra sesión. Descarga un respaldo antes de recargar.' });
      return send(res, 200, { revision: result[0].revision, updatedAt: result[0].updated_at });
    } catch (error) {
      // Never log database URLs, credentials or customer payloads.
      logger.error('POS API persistence request failed:', error?.name || 'Error');
      return send(res, 503, { error: 'No se pudo guardar o cargar la base de datos. Conserva tus datos y vuelve a intentar.' });
    }
  };
}

module.exports = createHandler();
module.exports.createHandler = createHandler;
