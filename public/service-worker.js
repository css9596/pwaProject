const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  process.env.PUBLIC_URL + '/',
  process.env.PUBLIC_URL + '/index.html',
  process.env.PUBLIC_URL + '/manifest.json',
];
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                process.env.PUBLIC_URL + '/',
                process.env.PUBLIC_URL + '/index.html',
                process.env.PUBLIC_URL + '/manifest.json',
                // 추가적인 리소스가 필요할 경우 여기에 추가
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['v1'];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});