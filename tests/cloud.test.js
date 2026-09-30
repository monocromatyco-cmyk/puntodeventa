const test = require('node:test');
const assert = require('node:assert/strict');
const { createStore } = require('../cloud.js');
const { createEmptyState, normalizeSettings } = require('../domain.js');
const { makeApi } = require('./helpers/fake-api.js');

function fixture(name = 'Cliente real') {
  const state = createEmptyState();
  state.data.clients.push({ id: 'C001', name, purchases: 0, billed: 0, balance: 0, overdue: 0 });
  return state;
}
function localStore(state) {
  const values = new Map(state ? [['mono-cromat-data', JSON.stringify(state.data)], ['mono-cromat-settings', JSON.stringify(state.settings)]] : []);
  return { values, getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) };
}
async function setup({ state = fixture(), row = null, prepareLocalState } = {}) {
  const api = makeApi({ row });
  const cookie = await api.authenticate();
  const storage = localStore(state);
  const notices = []; const statuses = [];
  const store = createStore({ storage, prepareLocalState,
    fetch: (url, init) => api.request(url, { ...init, headers: { ...init.headers, cookie } }),
    onNotice: (message, error) => notices.push({ message, error }), onStatus: (label, status) => statuses.push({ label, status }) });
  return { api, storage, store, notices, statuses, cookie };
}

test('migration removes local data only after the server confirms its successful write', async () => {
  const { api, storage, store } = await setup();
  const loaded = await store.load();
  assert.deepEqual(loaded, fixture());
  assert.deepEqual(api.getRow().payload, fixture());
  assert.equal(store.getRevision(), 1);
  assert.equal(storage.values.size, 0);
  store.disconnect();
});

test('regression: failed migration followed by retry does not lose local records', async () => {
  const { api, storage, store } = await setup();
  const original = new Map(storage.values);
  api.failNextWrite();
  await assert.rejects(store.load(), error => error.status === 503);
  assert.deepEqual(storage.values, original);
  assert.equal(api.getRow(), null);
  const loaded = await store.load();
  assert.equal(loaded.data.clients[0].name, 'Cliente real');
  assert.deepEqual(api.getRow().payload, fixture());
  assert.equal(api.queries.filter(query => query.startsWith('INSERT')).length, 2);
  assert.equal(storage.values.size, 0);
  store.disconnect();
});

test('migration retries against the abandoned empty revision-zero row from PR2', async () => {
  const { api, storage, store } = await setup({ row: { payload: createEmptyState(), revision: 0 } });
  api.failNextWrite();
  await assert.rejects(store.load());
  assert.equal(storage.values.has('mono-cromat-data'), true);
  await store.load();
  assert.equal(api.getRow().revision, 1);
  assert.equal(storage.values.size, 0);
  store.disconnect();
});

test('a populated cloud workspace never overwrites or deletes a different local backup', async () => {
  const cloud = fixture('Cliente de Neon');
  const { api, storage, store, notices } = await setup({ row: { payload: cloud, revision: 3 } });
  const original = new Map(storage.values);
  assert.deepEqual(await store.load(), cloud);
  assert.deepEqual(storage.values, original);
  assert.deepEqual(api.getRow().payload, cloud);
  assert.equal(api.queries.filter(query => query.startsWith('INSERT') || query.startsWith('UPDATE')).length, 0);
  assert.match(notices[0].message, /Conservamos tu copia local/);
  store.disconnect();
});

test('invalid local records and lossy normalization preserve the complete source', async () => {
  for (const prepareLocalState of [undefined, (data, settings) => ({ data: { ...data, clients: [] }, settings: normalizeSettings(settings) })]) {
    const state = prepareLocalState ? fixture() : fixture('');
    const { api, storage, store } = await setup({ state, prepareLocalState });
    const original = new Map(storage.values);
    await assert.rejects(store.load(), /migrar/);
    assert.deepEqual(storage.values, original);
    assert.equal(api.getRow(), null);
    store.disconnect();
  }
});

test('a lost response after a committed migration can be confirmed safely on retry', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  const storage = localStore(fixture());
  let loseResponse = true;
  const store = createStore({ storage, fetch: async (url, init) => {
    const response = await api.request(url, { ...init, headers: { ...init.headers, cookie } });
    if (init.method === 'PUT' && loseResponse) { loseResponse = false; throw Error('Response lost after commit'); }
    return response;
  } });
  await assert.rejects(store.load(), /Response lost/);
  assert.equal(api.getRow().revision, 1);
  assert.equal(storage.values.has('mono-cromat-data'), true);
  await store.load();
  assert.equal(api.queries.filter(query => query.startsWith('INSERT')).length, 1);
  assert.equal(storage.values.size, 0);
  store.disconnect();
});

test('local edits made by another tab during migration are not deleted', async () => {
  const api = makeApi();
  const cookie = await api.authenticate();
  const storage = localStore(fixture());
  const store = createStore({ storage, fetch: async (url, init) => {
    const response = await api.request(url, { ...init, headers: { ...init.headers, cookie } });
    if (init.method === 'PUT') storage.setItem('mono-cromat-data', JSON.stringify(fixture('Otra pestaña').data));
    return response;
  } });
  await store.load();
  assert.equal(api.getRow().payload.data.clients[0].name, 'Cliente real');
  assert.equal(JSON.parse(storage.getItem('mono-cromat-data')).clients[0].name, 'Otra pestaña');
  assert.equal(storage.values.has('mono-cromat-settings'), true);
  store.disconnect();
});

test('queued writes are serialized with updated revisions and do not write cloud data to localStorage', async () => {
  const { api, storage, store } = await setup({ state: null });
  await store.load();
  assert.equal(store.save(fixture('Primero')), true);
  assert.equal(store.save(fixture('Más reciente')), true);
  await store.flush();
  assert.equal(api.getRow().payload.data.clients[0].name, 'Más reciente');
  assert.equal(api.getRow().revision, 2);
  assert.equal(store.hasPending(), false);
  assert.equal(storage.values.size, 0);
  store.disconnect();
});

test('409 conflicts retain pending changes and block silent overwrites', async () => {
  const { api, store } = await setup({ state: null, row: { payload: fixture('Base'), revision: 1 } });
  await store.load();
  api.setRow({ payload: fixture('Otra sesión'), revision: 2 });
  assert.equal(store.save(fixture('Mis cambios pendientes')), true);
  await store.flush();
  assert.equal(store.hasConflict(), true);
  assert.equal(store.hasPending(), true);
  assert.equal(store.save(fixture('No se debe aceptar')), false);
  assert.equal(api.getRow().payload.data.clients[0].name, 'Otra sesión');
  const recovered = await store.load();
  assert.equal(recovered.data.clients[0].name, 'Mis cambios pendientes');
  assert.equal(store.hasConflict(), true);
  store.disconnect({ discardPending: true });
});

test('temporary write failures preserve pending snapshots and a retry flush saves them', async () => {
  const { api, store } = await setup({ state: null });
  await store.load();
  api.failNextWrite();
  store.save(fixture('Pendiente'));
  await store.flush();
  assert.equal(store.hasPending(), true);
  assert.equal(api.getRow(), null);
  await store.flush();
  assert.equal(store.hasPending(), false);
  assert.equal(api.getRow().payload.data.clients[0].name, 'Pendiente');
  store.disconnect();
});

test('expired sessions retain unsaved changes across reauthentication', async () => {
  const api = makeApi({ row: { payload: fixture('Base'), revision: 1 } });
  const cookie = await api.authenticate();
  let expired = false; let authNotices = 0;
  const store = createStore({ storage: localStore(), onUnauthorized: () => { authNotices += 1; },
    fetch: (url, init) => api.request(url, { ...init, headers: { ...init.headers, cookie: expired ? '' : cookie } }) });
  await store.load();
  expired = true;
  store.save(fixture('Sin perder'));
  await store.flush();
  assert.equal(authNotices, 1);
  assert.equal(store.hasPending(), true);
  expired = false;
  assert.equal((await store.load()).data.clients[0].name, 'Sin perder');
  await store.flush();
  assert.equal(api.getRow().payload.data.clients[0].name, 'Sin perder');
  assert.equal(store.hasPending(), false);
  store.disconnect();
});
