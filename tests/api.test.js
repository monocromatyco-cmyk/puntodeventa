const test = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/[...path].js');

async function request(path, method = 'GET', extra = {}) {
  const headers = {};
  let body = '';
  const response = {
    statusCode: 0,
    setHeader(name, value) { headers[name.toLowerCase()] = value; },
    end(value = '') { body = value; }
  };
  await handler({ url: path, method, headers: {}, ...extra }, response);
  return { status: response.statusCode, headers, body: body ? JSON.parse(body) : null };
}

test('cloud state API rejects unauthenticated reads', async () => {
  const previous = { ...process.env };
  process.env.NODE_ENV = 'production';
  process.env.APP_PASSWORD = 'a-long-demo-password';
  process.env.SESSION_SECRET = '0123456789abcdef0123456789abcdef';
  process.env.DATABASE_URL = 'postgresql://demo:demo@example.invalid/demo';
  try {
    const result = await request('/api/state');
    assert.equal(result.status, 401);
    assert.match(result.body.error, /Inicia sesión/);
    assert.equal(result.headers['cache-control'], 'no-store, private');
  } finally {
    for (const key of ['NODE_ENV', 'APP_PASSWORD', 'SESSION_SECRET', 'DATABASE_URL']) {
      if (previous[key] === undefined) delete process.env[key]; else process.env[key] = previous[key];
    }
  }
});

test('login issues a signed HttpOnly cookie and session validates it', async () => {
  const previous = { ...process.env };
  process.env.NODE_ENV = 'production';
  process.env.APP_PASSWORD = 'a-long-demo-password';
  process.env.SESSION_SECRET = '0123456789abcdef0123456789abcdef';
  process.env.DATABASE_URL = 'postgresql://demo:demo@example.invalid/demo';
  try {
    const failed = await request('/api/auth/login', 'POST', { body: { password: 'wrong-password' }, socket: {} });
    assert.equal(failed.status, 401);
    const loggedIn = await request('/api/auth/login', 'POST', { body: { password: 'a-long-demo-password' }, socket: {} });
    assert.equal(loggedIn.status, 200);
    const cookie = loggedIn.headers['set-cookie'];
    assert.match(cookie, /HttpOnly/);
    assert.match(cookie, /SameSite=Lax/);
    assert.match(cookie, /Secure/);
    const session = await request('/api/auth/session', 'GET', { headers: { cookie: cookie.split(';')[0] } });
    assert.equal(session.body.authenticated, true);
  } finally {
    for (const key of ['NODE_ENV', 'APP_PASSWORD', 'SESSION_SECRET', 'DATABASE_URL']) {
      if (previous[key] === undefined) delete process.env[key]; else process.env[key] = previous[key];
    }
  }
});
