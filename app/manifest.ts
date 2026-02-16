// app/manifest.ts  ← must be this exact path and name
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Garage Auto - Professional Auto Services in Mirema, Nairobi',
    short_name: 'Garage Auto',
    description: 'Expert auto repair & maintenance in Mirema. Engine repairs, towing, AC service, transmissions & more. Honest prices, fast service. Book now!',
    theme_color: '#00aaff',
    background_color: '#0a0a0a',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}