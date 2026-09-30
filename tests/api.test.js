const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { createHandler } = require('../api/[...path].js');
const { createEmptyState } = require('../domain.js');
const { makeApi } = require('./helpers/fake-api.js');

function state(name = 'Cliente de prueba') {
  const value = createEmptyState();
  value.data.clients.push({ id: 'C001', name, purchases: 0, billed: 0, balance: 0, overdue: 0 });
  return value;
}

test('state API rejects unauthenticated reads and never caches private responses', async () => {
  const api = makeApi();
  const result = await api.request('/api/state');
  assert.equal(result.status, 401);
  assert.match(result.body.error, /Inicia sesión/);
  assert.equal(result.headers['cache-control'], 'no-store, private');
  assert.equal(api.queries.length, 0);
});

test('login issues a signed secure HttpOnly cookie and logout clears it', async () => {
  const api = makeApi();
  assert.equal((await api.request('/api/auth/login', { method: 'POST', body: { password: 'wrong' } })).status, 401);
  const cookie = await api.authenticate();
  const session = await api.request('/api/auth/session', { headers: { cookie } });
  assert.equal(session.body.authenticated, true);
  const login = await api.request('/api/auth/login', { method: 'POST', body: { password: api.env.APP_PASSWORD } });
  assert.match(login.headers['set-cookie'], /HttpOnly; SameSite=Lax/);
  assert.match(login.headers['set-cookie'], /; Secure/);
  const logout = await api.request('/api/auth/logout', { method: 'POST', headers: { cookie } });
  assert.match(logout.headers['set-cookie'], /Max-Age=0/);
});

test('forged, malformed and expired sessions are rejected', async () => {
  const api = makeApi();
  const expired = String(Date.now() - 8 * 24 * 60 * 60_000);
  const signature = crypto.createHmac('sha256', api.env.SESSION_SECRET).update(expired).digest('base64url');
  for (const cookie of ['mono_cromat_session=1234567890123.forged', 'mono_cromat_session=%ZZ', `mono_cromat_session=${expired}.${signature}`]) {
    assert.equal((await api.request('/api/state', { headers: { cookie } })).status, 401);
  }
});

test('cross-origin writes are rejected, including with a valid session', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  const denied = await api.request('/api/state', { method: 'PUT', headers: { cookie, origin: 'https://evil.example' }, body: { state: state(), revision: 0 } });
  assert.equal(denied.status, 403);
  const allowed = await api.request('/api/state', { headers: { cookie, origin: 'https://pos.test' } });
  assert.equal(allowed.status, 200);
});

test('GET on a new workspace does not create a row or consume the migration opportunity', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  for (let i = 0; i < 2; i += 1) {
    const result = await api.request('/api/state', { headers: { cookie } });
    assert.equal(result.status, 200);
    assert.equal(result.body.isNew, true);
    assert.equal(result.body.revision, 0);
  }
  assert.equal(api.getRow(), null);
  assert.ok(api.queries.every(query => !query.startsWith('INSERT')));
});

test('a failed first migration remains retryable and succeeds on the next attempt', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  const request = body => api.request('/api/state', { method: 'PUT', headers: { cookie }, body });
  api.failNextWrite();
  assert.equal((await request({ state: state(), revision: 0 })).status, 503);
  const fresh = await api.request('/api/state', { headers: { cookie } });
  assert.equal(fresh.body.isNew, true);
  assert.equal(api.getRow(), null);
  const saved = await request({ state: state(), revision: 0 });
  assert.equal(saved.status, 200);
  assert.equal(saved.body.revision, 1);
  assert.deepEqual(api.getRow().payload, state());
});

test('an empty revision-zero row created by PR2 still permits migration', async () => {
  const api = makeApi({ row: { payload: createEmptyState(), revision: 0 } });
  const cookie = await api.authenticate();
  assert.equal((await api.request('/api/state', { headers: { cookie } })).body.isNew, true);
  const saved = await api.request('/api/state', { method: 'PUT', headers: { cookie }, body: { state: state(), revision: 0 } });
  assert.equal(saved.body.revision, 1);
  assert.equal(api.getRow().payload.data.clients[0].name, 'Cliente de prueba');
});

test('concurrent first writers cannot overwrite each other; stale revisions get 409', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  const write = (name, revision) => api.request('/api/state', { method: 'PUT', headers: { cookie }, body: { state: state(name), revision } });
  const results = await Promise.all([write('Primera sesión', 0), write('Segunda sesión', 0)]);
  assert.deepEqual(results.map(result => result.status).sort(), [200, 409]);
  const winner = api.getRow().payload.data.clients[0].name;
  assert.equal((await write('No debe reemplazar', 0)).status, 409);
  assert.equal(api.getRow().payload.data.clients[0].name, winner);
  assert.equal((await write('Actualización válida', 1)).body.revision, 2);
  assert.equal((await write('Desactualizado', 1)).status, 409);
});

test('invalid payloads and missing-state updates are rejected before persisting', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  for (const body of [{ state: {}, revision: 0 }, { state: state(), revision: -1 }, '{broken', { state: state(), revision: 0.5 }]) {
    assert.equal((await api.request('/api/state', { method: 'PUT', headers: { cookie }, body })).status, 400);
  }
  assert.equal(api.queries.length, 0);
  assert.equal((await api.request('/api/state', { method: 'PUT', headers: { cookie }, body: { state: state(), revision: 7 } })).status, 409);
  assert.equal(api.getRow(), null);
});

test('a transient schema failure is retried instead of poisoning the function instance', async () => {
  const api = makeApi({ schemaFailures: 1 });
  const cookie = await api.authenticate();
  assert.equal((await api.request('/api/state', { headers: { cookie } })).status, 503);
  assert.equal((await api.request('/api/state', { headers: { cookie } })).status, 200);
  assert.equal(api.queries.filter(query => query.startsWith('CREATE')).length, 2);
});

test('unsupported authenticated state methods do not query the database', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  const result = await api.request('/api/state', { method: 'DELETE', headers: { cookie } });
  assert.equal(result.status, 405);
  assert.equal(result.headers.allow, 'GET, PUT');
  assert.equal(api.queries.length, 0);
});

test('login throttles repeated failures in the same function instance', async () => {
  const api = makeApi();
  for (let i = 0; i < 8; i += 1) assert.equal((await api.request('/api/auth/login', { method: 'POST', body: { password: 'wrong' } })).status, 401);
  assert.equal((await api.request('/api/auth/login', { method: 'POST', body: { password: api.env.APP_PASSWORD } })).status, 429);
});

test('unconfigured production fails closed instead of silently serving demo mode', async () => {
  for (const env of [{ NODE_ENV: 'production' }, { VERCEL: '1' }]) {
    const handler = createHandler({ env });
    let status; let body;
    await handler({ url: '/api/auth/session', method: 'GET', headers: {} }, {
      set statusCode(value) { status = value; }, setHeader() {}, end(value) { body = JSON.parse(value); }
    });
    assert.equal(status, 503);
    assert.equal(body.configured, false);
    assert.notEqual(body.localMode, true);
  }
});
