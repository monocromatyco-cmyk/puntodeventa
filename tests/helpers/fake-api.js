const assert = require('node:assert/strict');
const { createHandler } = require('../../api/[...path].js');
const clone = value => JSON.parse(JSON.stringify(value));

function makeApi({ row: initialRow = null, schemaFailures = 0 } = {}) {
  let row = initialRow ? clone(initialRow) : null;
  let writeFailure = false;
  const queries = [];
  const sql = async (strings, ...values) => {
    const query = strings.join('?').trim();
    queries.push(query);
    if (query.startsWith('CREATE TABLE')) {
      if (schemaFailures > 0) { schemaFailures -= 1; throw Error('Temporary schema outage'); }
      return [];
    }
    if (query.startsWith('SELECT payload')) return row ? [clone(row)] : [];
    if (query.startsWith('INSERT INTO')) {
      assert.match(query, /ON CONFLICT \(singleton\) DO UPDATE/);
      assert.match(query, /WHERE mono_cromat_state\.revision = \?/);
      if (writeFailure) { writeFailure = false; throw Error('Temporary write outage'); }
      const [payload, revision] = values;
      assert.equal(revision, 0);
      if (row && row.revision !== revision) return [];
      row = { payload: JSON.parse(payload), revision: 1 };
      return [{ revision: row.revision, updated_at: '2026-09-30T12:00:00Z' }];
    }
    if (query.startsWith('UPDATE mono_cromat_state')) {
      assert.match(query, /WHERE singleton = true AND revision = \?/);
      if (writeFailure) { writeFailure = false; throw Error('Temporary write outage'); }
      const [payload, revision] = values;
      if (!row || row.revision !== revision) return [];
      row = { payload: JSON.parse(payload), revision: revision + 1 };
      return [{ revision: row.revision, updated_at: '2026-09-30T12:00:00Z' }];
    }
    throw Error(`Unexpected SQL statement: ${query}`);
  };
  const env = {
    NODE_ENV: 'production', APP_PASSWORD: 'test-password-only-for-fixtures',
    SESSION_SECRET: '0123456789abcdef0123456789abcdef', DATABASE_URL: 'postgresql://fixture:fixture@example.invalid/fixture'
  };
  const handler = createHandler({ env, sqlFactory: () => sql, logger: { error() {} } });
  async function request(url, { method = 'GET', headers = {}, body, ...extra } = {}) {
    const responseHeaders = {};
    let text = '';
    const res = {
      statusCode: 0, setHeader(name, value) { responseHeaders[name.toLowerCase()] = value; },
      end(value = '') { text = value; }
    };
    await handler({ url, method, headers: { host: 'pos.test', ...headers }, body, ...extra }, res);
    return { status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 300, headers: responseHeaders,
      body: text ? JSON.parse(text) : null, json: async () => text ? JSON.parse(text) : null };
  }
  async function authenticate() {
    const login = await request('/api/auth/login', { method: 'POST', body: { password: env.APP_PASSWORD } });
    assert.equal(login.status, 200);
    return login.headers['set-cookie'].split(';')[0];
  }
  return { env, handler, request, authenticate, queries, getRow: () => row ? clone(row) : null,
    failNextWrite() { writeFailure = true; }, setRow(value) { row = clone(value); } };
}

module.exports = { makeApi };
