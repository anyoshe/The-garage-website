import type { Metadata } from 'next';
import './globals.css';
import { Orbitron, Roboto } from 'next/font/google';
// import ServiceWorkerRegister from './components/ServiceWorkerRegister';
import InstallButton from './components/InstallButton';           // ← moved here
import { FaWhatsapp, FaPhone, FaWrench, FaBars } from 'react-icons/fa';
// import { useState, useEffect, useCallback } from 'react';       // only if needed below

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'The Garage Auto - Professional Auto Services in Mirema, Nairobi',
  description:
    'Trusted garage in Mirema for engine repairs, AC service, brakes, tires, car rescue & more. Honest work, fair prices, AI-assisted diagnostics.',
  keywords: 'Mirema garage, Nairobi auto repair, car rescue, engine repair, AC service, brake service, tire alignment',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'The Garage Auto',
  },
  formatDetection: { telephone: true },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-192.png',
  },
  openGraph: {
    title: 'The Garage Auto - Mirema Nairobi',
    description: 'Professional auto repairs, restorations & 24/7 car rescue in Nairobi.',
    url: 'https://your-domain.com', // change to real domain
    type: 'website',
    images: '/og-image.jpg', // add real OG image later
  },
  // Add theme-color array for better PWA dark/light support
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#00aaff" />
      </head>
      <body
        className={`${roboto.variable} ${orbitron.variable} font-roboto antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >

        {/* Main content */}
        <main className="pt-20 md:pt-24">{children}</main>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/254726938838?text=Hi%20The%20Garage%20Auto%20team%2C%20I%20need%20help%20with%20my%20car!"
          className="whatsapp-float fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Global Install Button */}
        <InstallButton />
      </body>
    </html>
  );
}