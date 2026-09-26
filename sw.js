const CACHE_NAME = 'mono-cromat-v7';
const CACHE_PREFIX = 'mono-cromat-';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './mobile-operations.css',
  './receipt-styles.css',
  './app.js',
  './manifest.json',
  './assets/logo-blue.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/pwa-icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          const indexRequest = new Request(new URL('./index.html', self.registration.scope));
          await cache.put(indexRequest, response.clone());
        }
        return response;
      } catch (error) {
        return (await caches.match(request))
          || (await caches.match(new URL('./index.html', self.registration.scope)))
          || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      return Response.error();
    }
  })());
});
