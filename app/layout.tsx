// import type { Metadata } from 'next';
// import './globals.css'; 
// import { Orbitron, Roboto } from 'next/font/google';
// import ServiceWorkerRegister from './components/ServiceWorkerRegister';

// const orbitron = Orbitron({
//   subsets: ['latin'],
//   variable: '--font-orbitron',
//   weight: ['400', '700'],
// });

// const roboto = Roboto({
//   subsets: ['latin'],
//   variable: '--font-roboto',
//   weight: ['300', '400', '700'],
// });

// export const metadata: Metadata = {
//   title: 'Sir Luke Garage - Premier Auto Repairs & 24/7 Breakdown Recovery in Nairobi',
//   description:
//     'Trusted garage in Nairobi for fast breakdown recovery, engine diagnostics, and auto repairs. Mobile-friendly booking, WhatsApp support, and transparent pricing.',
//   keywords: 'Nairobi garage, auto repairs, breakdown recovery, car service, engine diagnostics, Sir Luke Garage',
//   openGraph: {
//     title: 'Sir Luke Garage - Premier Auto Repairs & 24/7 Breakdown Recovery',
//     description: "Nairobi's go-to for reliable car repairs and roadside assistance.",
//     url: 'https://sirlukegarage.vercel.app',
//     type: 'website',
//     images: 'https://via.placeholder.com/1200x630/00aaff/ffffff?text=Sir+Luke+Garage',
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="theme-color" content="#00aaff" />
//         {/* Add more PWA meta if needed */}
//       </head>
//       <body className={`${roboto.variable} ${orbitron.variable} font-roboto antialiased`}>
//         <ServiceWorkerRegister />
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import './globals.css'; 
import { Orbitron, Roboto } from 'next/font/google';
import ServiceWorkerRegister from './components/ServiceWorkerRegister';

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
  title: 'Sir Luke Garage - Premier Auto Repairs & 24/7 Breakdown Recovery in Nairobi',
  description:
    'Trusted garage in Nairobi for fast breakdown recovery, engine diagnostics, and auto repairs. Mobile-friendly booking, WhatsApp support, and transparent pricing.',
  keywords: 'Nairobi garage, auto repairs, breakdown recovery, car service, engine diagnostics, Sir Luke Garage',
  
  // PWA & iOS Specific Meta
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Sir Luke Garage',
  },
  formatDetection: {
    telephone: true, // Important for a garage website
  },
  icons: {
    icon: '/icon-192.png',
    apple: '/icon-192.png', // Specifically for iOS home screen
  },

  openGraph: {
    title: 'Sir Luke Garage - Premier Auto Repairs & 24/7 Breakdown Recovery',
    description: "Nairobi's go-to for reliable car repairs and roadside assistance.",
    url: 'https://sirlukegarage.vercel.app',
    type: 'website',
    images: 'https://via.placeholder.com/1200x630/00aaff/ffffff?text=Sir+Luke+Garage',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* The theme-color meta tag is still useful here for Android browser address bar */}
        <meta name="theme-color" content="#00aaff" />
      </head>
      <body className={`${roboto.variable} ${orbitron.variable} font-roboto antialiased`}>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}