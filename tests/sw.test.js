const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function worker() {
  const events = new Map(); const stored = new Map(); const deleted = []; const added = [];
  let network = async () => ({ ok: true, type: 'basic', marker: 'new', clone() { return { ...this }; } });
  const self = { registration: { scope: 'https://pos.test/' }, location: { origin: 'https://pos.test' },
    addEventListener: (name, callback) => events.set(name, callback), async skipWaiting() {}, clients: { async claim() {} } };
  const cache = {
    async addAll(files) { added.push(...files); },
    async put(request, value) { stored.set(typeof request === 'string' ? request : request.url, value); }
  };
  vm.runInNewContext(fs.readFileSync(require.resolve('../sw.js'), 'utf8'), {
    self, URL, Set, Response,
    caches: { async open() { return cache; }, async match(request) { return stored.get(typeof request === 'string' ? request : request.url); },
      async keys() { return ['mono-cromat-v7', 'mono-cromat-v8-consolidated', 'another-app-cache']; }, async delete(key) { deleted.push(key); } },
    fetch: request => network(request)
  });
  return { events, stored, deleted, added, setNetwork: callback => { network = callback; } };
}

test('PWA installation includes both consolidated modules, responsive CSS and real icons', async () => {
  const sw = worker(); let promise;
  sw.events.get('install')({ waitUntil(value) { promise = value; } });
  await promise;
  for (const file of ['./domain.js', './cloud.js', './mobile-operations.css', './assets/icon-192.png', './assets/icon-512.png']) assert.ok(sw.added.includes(file));
});

test('PWA activation removes only old caches belonging to this app', async () => {
  const sw = worker(); let promise;
  sw.events.get('activate')({ waitUntil(value) { promise = value; } });
  await promise;
  assert.deepEqual(sw.deleted, ['mono-cromat-v7']);
});

test('private API, third-party requests and non-GET writes are never intercepted', () => {
  const sw = worker();
  for (const [url, method] of [['https://pos.test/api/state', 'GET'], ['https://pos.test/api/auth/session', 'GET'],
    ['https://pos.test/api', 'GET'], ['https://fonts.example/style.css', 'GET'], ['https://pos.test/index.html', 'PUT'], ['https://pos.test/not-public.json', 'GET']]) {
    let intercepted = false;
    sw.events.get('fetch')({ request: { url, method, mode: 'cors' }, respondWith() { intercepted = true; } });
    assert.equal(intercepted, false, url);
  }
});

test('public assets are network-first and offline fallback returns the asset, not HTML', async () => {
  const sw = worker(); const url = 'https://pos.test/app.js';
  sw.stored.set(url, { marker: 'old' });
  const request = { url, method: 'GET', mode: 'cors' }; let promise;
  sw.events.get('fetch')({ request, respondWith(value) { promise = value; } });
  assert.equal((await promise).marker, 'new');
  sw.setNetwork(async () => { throw Error('Offline'); });
  sw.events.get('fetch')({ request, respondWith(value) { promise = value; } });
  assert.equal((await promise).marker, 'new');
});
