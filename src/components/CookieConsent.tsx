import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="glass-panel"
          style={{ 
            position: 'fixed', 
            bottom: '2rem', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            zIndex: 10000, 
            width: 'calc(100% - 4rem)', 
            maxWidth: '600px', 
            padding: '1.5rem 2rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ background: 'var(--primary-light)', padding: '0.8rem', borderRadius: '12px', color: '#fff' }}>
            <Cookie size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
              We use cookies to improve your experience and analyze our traffic. By clicking "Accept", you agree to our use of cookies.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button onClick={handleAccept} className="btn btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>Accept</button>
             <button onClick={() => setIsVisible(false)} style={{ background: 'none', color: 'var(--text-muted)' }}><X size={20} /></button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
