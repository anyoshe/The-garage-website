'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js') // Points to public/sw.js
          .then((reg) => console.log('SW registered:', reg.scope))
          .catch((err) => console.error('SW failed:', err));
      });
    }
  }, []);

  return null;
}