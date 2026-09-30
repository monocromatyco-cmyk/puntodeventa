const CACHE_NAME = 'mono-cromat-v8-consolidated';
const CACHE_PREFIX = 'mono-cromat-';
const APP_SHELL = [
  './', './index.html', './styles.css', './mobile-operations.css', './receipt-styles.css',
  './domain.js', './cloud.js', './app.js', './manifest.json', './assets/logo-blue.png',
  './assets/icon-192.png', './assets/icon-512.png', './assets/pwa-icon.svg'
];
const SHELL_URLS = new Set(APP_SHELL.map(path => new URL(path, self.registration.scope).href));

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
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  // Authentication, customer/payment data and third-party requests are never
  // intercepted, cached or replaced with an HTML offline response.
  if (request.method !== 'GET' || url.origin !== self.location.origin || url.pathname === '/api' || url.pathname.startsWith('/api/')) return;
  const navigation = request.mode === 'navigate';
  if (!navigation && !SHELL_URLS.has(url.href)) return;

  // Network-first prevents installed PWAs from showing the old consolidated
  // release indefinitely. Offline fallback is limited to the public app shell.
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(navigation ? new URL('./index.html', self.registration.scope).href : request, response.clone());
      }
      return response;
    } catch {
      return (await caches.match(navigation ? new URL('./index.html', self.registration.scope).href : request)) || Response.error();
    }
  })());
});
