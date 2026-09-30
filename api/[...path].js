const crypto = require('node:crypto');
const { neon } = require('@neondatabase/serverless');
const { isValidState } = require('../domain.js');

const COOKIE_NAME = 'mono_cromat_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
const MAX_BODY_BYTES = 1_000_000;
const EMPTY_STATE = {
  data: { clients: [], products: [], sales: [], payments: [] },
  settings: {
    businessName: 'Mono Cromat & Co.',
    rfc: '',
    phone: '',
    currency: 'MXN — Peso mexicano',
    address: '',
    preferences: { inventoryAlerts: true, collectionReminders: true, compactTables: false }
  }
};
let schemaReady;
const loginAttempts = new Map();

function send(res, status, payload, headers = {}) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, private');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  for (const [name, value] of Object.entries(headers)) res.setHeader(name, value);
  res.end(JSON.stringify(payload));
}

function secureConfig() {
  const password = process.env.APP_PASSWORD || '';
  const secret = process.env.SESSION_SECRET || '';
  return password.length >= 12 && Buffer.byteLength(secret) >= 32 && Boolean(process.env.DATABASE_URL);
}

function signature(value) {
  return crypto.createHmac('sha256', process.env.SESSION_SECRET).update(value).digest('base64url');
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
  const token = cookies(req)[COOKIE_NAME] || '';
  const [issuedAt, providedSignature] = token.split('.');
  if (!/^\d{10,13}$/.test(issuedAt || '') || !providedSignature) return false;
  const issuedAtMs = Number(issuedAt);
  const timestamp = issuedAt.length <= 10 ? issuedAtMs * 1000 : issuedAtMs;
  if (!Number.isFinite(timestamp) || timestamp > Date.now() + 60_000 || Date.now() - timestamp > SESSION_TTL_SECONDS * 1000) return false;
  return safeEqual(providedSignature, signature(issuedAt));
}
function cookieHeader(value, maxAge) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return `${COOKIE_NAME}=${encodeURIComponent(value)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${secure}`;
}
function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  try { return new URL(origin).host === host; } catch { return false; }
}
function getSql() {
  if (!process.env.DATABASE_URL) throw new Error('Database is not configured');
  const sql = neon(process.env.DATABASE_URL);
  schemaReady ||= sql`
    CREATE TABLE IF NOT EXISTS mono_cromat_state (
      singleton boolean PRIMARY KEY DEFAULT true CHECK (singleton),
      payload jsonb NOT NULL,
      revision integer NOT NULL DEFAULT 0,
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  return schemaReady.then(() => sql);
}
function requestBody(req) {
  if (typeof req.body === 'string') {
    if (Buffer.byteLength(req.body) > MAX_BODY_BYTES) return null;
    try { return JSON.parse(req.body); } catch { return null; }
  }
  if (!req.body || typeof req.body !== 'object' || Buffer.byteLength(JSON.stringify(req.body)) > MAX_BODY_BYTES) return null;
  return req.body;
}
async function readState(sql) {
  const found = await sql`SELECT payload, revision FROM mono_cromat_state WHERE singleton = true`;
  if (found.length) return { row: found[0], isNew: false };
  const inserted = await sql`
    INSERT INTO mono_cromat_state (singleton, payload, revision)
    VALUES (true, ${JSON.stringify(EMPTY_STATE)}::jsonb, 0)
    ON CONFLICT (singleton) DO NOTHING
    RETURNING payload, revision
  `;
  if (inserted.length) return { row: inserted[0], isNew: true };
  const row = (await sql`SELECT payload, revision FROM mono_cromat_state WHERE singleton = true`)[0];
  return { row, isNew: false };
}

module.exports = async function handler(req, res) {
  const path = new URL(req.url, `https://${req.headers.host || 'localhost'}`).pathname.replace(/\/$/, '');
  if (req.method === 'OPTIONS') return send(res, 204, {});
  if (!sameOrigin(req)) return send(res, 403, { error: 'Origen no permitido.' });

  if (path === '/api/auth/session' && req.method === 'GET') {
    if (!secureConfig() && process.env.NODE_ENV === 'production') return send(res, 503, { configured: false, error: 'Configura las variables seguras de Vercel y Neon para habilitar la aplicación.' });
    return send(res, 200, { configured: secureConfig(), authenticated: authenticated(req), localMode: !secureConfig() });
  }

  if (path === '/api/auth/login' && req.method === 'POST') {
    if (!secureConfig()) return send(res, 503, { error: 'Configura DATABASE_URL, APP_PASSWORD y SESSION_SECRET en el entorno del servidor.' });
    const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
    const now = Date.now();
    const attempt = loginAttempts.get(ip) || { count: 0, since: now };
    if (now - attempt.since > 15 * 60_000) { attempt.count = 0; attempt.since = now; }
    if (attempt.count >= 8) return send(res, 429, { error: 'Demasiados intentos. Espera 15 minutos antes de volver a probar.' });
    const body = requestBody(req);
    if (!body || typeof body.password !== 'string' || body.password.length > 256 || !safeEqual(body.password, process.env.APP_PASSWORD)) {
      attempt.count += 1;
      loginAttempts.set(ip, attempt);
      return send(res, 401, { error: 'La contraseña no es correcta.' });
    }
    loginAttempts.delete(ip);
    const issuedAt = String(Date.now());
    const session = `${issuedAt}.${signature(issuedAt)}`;
    return send(res, 200, { authenticated: true }, { 'Set-Cookie': cookieHeader(session, SESSION_TTL_SECONDS) });
  }

  if (path === '/api/auth/logout' && req.method === 'POST') {
    return send(res, 200, { authenticated: false }, { 'Set-Cookie': cookieHeader('', 0) });
  }

  if (path !== '/api/state') return send(res, 404, { error: 'Ruta no encontrada.' });
  if (!authenticated(req)) return send(res, 401, { error: 'Inicia sesión para acceder a los datos.' });

  try {
    const sql = await getSql();
    if (req.method === 'GET') {
      const { row, isNew } = await readState(sql);
      return send(res, 200, { state: row.payload, revision: row.revision, isNew });
    }
    if (req.method === 'PUT') {
      const body = requestBody(req);
      if (!body || !isValidState(body.state) || !Number.isInteger(body.revision) || body.revision < 0) {
        return send(res, 400, { error: 'Los datos recibidos no tienen un formato válido.' });
      }
      const updated = await sql`
        UPDATE mono_cromat_state
        SET payload = ${JSON.stringify(body.state)}::jsonb,
            revision = revision + 1,
            updated_at = now()
        WHERE singleton = true AND revision = ${body.revision}
        RETURNING revision, updated_at
      `;
      if (!updated.length) return send(res, 409, { error: 'Los datos cambiaron en otra sesión. Recarga antes de volver a guardar.' });
      return send(res, 200, { revision: updated[0].revision, updatedAt: updated[0].updated_at });
    }
    res.setHeader('Allow', 'GET, PUT');
    return send(res, 405, { error: 'Método no permitido.' });
  } catch (error) {
    console.error('POS API error:', error.message);
    return send(res, 503, { error: 'No se pudo conectar con la base de datos. Tus cambios locales se conservaron.' });
  }
};
