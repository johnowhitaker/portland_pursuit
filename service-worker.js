const cacheName = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/favicon.ico',
    '/images/cat.png',
    '/images/bald_eagle.png',
    '/images/biltong_vs_jerky.webp',
    '/images/boba_tea.webp',
    '/images/bushtit.png',
    '/images/chat_to_neighbor.webp',
    '/images/chickadee.png',
    '/images/cool_rock.webp',
    '/images/cool_treat.webp',
    '/images/crow.png',
    '/images/disappointed_junco.webp',
    '/images/feed_rue_bunny.webp',
    '/images/find_sculpture.webp',
    '/images/find_something_free.webp',
    '/images/food_carts.webp',
    '/images/freddies_frozen_food.webp',
    '/images/gain_2_pounds.webp',
    '/images/house_finch.png',
    '/images/hug_tree.webp',
    '/images/hummingbird.png',
    '/images/junco.png',
    '/images/lesser_goldfinch.png',
    '/images/little_free_library.webp',
    '/images/northern_flicker.png',
    '/images/racoon.png',
    '/images/ride_scooter.webp',
    '/images/robin.png',
    '/images/salt_water_taffy.webp',
    '/images/scrubjay.png',
    '/images/smell_double_delight.webp',
    '/images/smell_rose.webp',
    '/images/song_sparrow.png',
    '/images/starling.png',
    '/images/steal_berry.webp',
    '/images/take_the_bus.webp',
    '/images/tastiest_thai.webp',
    '/images/touch_ocean.webp',
    '/images/towhee.png',
    '/images/try_new_coffee_shop.webp',
    '/images/visit_local_park.webp',
    '/images/vulture.png',
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