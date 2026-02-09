// app/manifest.ts  ← must be this exact path and name
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sir Luke Garage - 24/7 Breakdown Recovery & Auto Repairs',
    short_name: 'SirLuke',
    description: 'Nairobi\'s trusted garage for fast recovery, diagnostics, and repairs. Book now!',
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