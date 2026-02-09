// public/sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Chrome requires a fetch event to trigger the install prompt
self.addEventListener('fetch', (event) => {
  // You can leave this empty or do a network-first strategy
  event.respondWith(fetch(event.request).catch(() => {
    return new Response("Offline"); 
  }));
});