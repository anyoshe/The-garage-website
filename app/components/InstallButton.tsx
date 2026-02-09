'use client';

import { useEffect, useState } from 'react';

export default function InstallButton() {
  const [showButton, setShowButton] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const ua = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua));

    const standalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true;
    setIsStandalone(standalone);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.location.hostname.includes('localhost') || window.location.hostname === '127.0.0.1') {
      setShowButton(true);
    }

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setShowButton(false);
      setDeferredPrompt(null);
    }
  };

  if (!isMounted || !showButton || isStandalone) return null;

return (
    <div
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        zIndex: 1000000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
        fontFamily: 'var(--font-orbitron), sans-serif',
      }}
    >
      {isIOS ? (
        /* iOS High-Tech Instruction Card */
        <div style={{
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 170, 255, 0.4)',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          maxWidth: '280px',
          color: 'white'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#00aaff', borderRadius: '50%' }}></div>
            <h4 style={{ fontSize: '10px', color: '#00aaff', letterSpacing: '2px', margin: 0 }}>SYSTEM_PROMPT</h4>
          </div>
          <p style={{ fontSize: '13px', lineHeight: '1.6', margin: 0, color: '#ccc' }}>
            Tap <strong style={{color: '#fff'}}>Share</strong> then <strong style={{color: '#00aaff'}}>Add to Home Screen</strong> for the Garage App.
          </p>
        </div>
      ) : (
        /* Android/Chrome Neon Tech Button */
        <button
          onClick={handleInstallClick}
          style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #00aaff',
            padding: '12px 24px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 20px rgba(0, 170, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 170, 255, 0.5)';
            e.currentTarget.style.borderColor = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 170, 255, 0.2)';
            e.currentTarget.style.borderColor = '#00aaff';
          }}
        >
          {/* Neon Icon Container */}
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'rgba(0, 170, 255, 0.1)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(0, 170, 255, 0.3)'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00aaff" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </div>

          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '9px', color: '#00aaff', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '2px' }}>
              MOBILE.APP
            </div>
            <div style={{ fontSize: '14px', color: '#ffffff', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Install App
            </div>
          </div>
          
          {/* Tech Corner Accents */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '6px', borderTop: '2px solid #00aaff', borderLeft: '2px solid #00aaff' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '6px', height: '6px', borderBottom: '2px solid #00aaff', borderRight: '2px solid #00aaff' }}></div>
        </button>
      )}
    </div>
  );
}