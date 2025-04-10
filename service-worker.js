const cacheName = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    'https://picsum.photos/id/237/200/150' // Add more photoURLs if needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});