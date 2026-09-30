const CACHE = 'mono-cromat-v7';
const APP_SHELL = ['./', './index.html', './styles.css', './receipt-styles.css', './domain.js', './app.js', './manifest.json', './assets/logo-blue.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Never cache authentication or customer/payment data from the private API.
  if (new URL(event.request.url).origin === self.location.origin && new URL(event.request.url).pathname.startsWith('/api/')) return;
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
