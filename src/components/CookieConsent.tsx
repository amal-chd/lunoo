import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2500);
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
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          style={{ 
            position: 'fixed', 
            bottom: '2rem', 
            left: '0',
            right: '0',
            margin: '0 auto',
            zIndex: 10000, 
            width: 'calc(100% - 3rem)', 
            maxWidth: '540px', 
            padding: '1.25rem 1.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.5rem',
            background: 'rgba(15, 5, 25, 0.85)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
            flexDirection: window.innerWidth < 640 ? 'column' : 'row',
            textAlign: window.innerWidth < 640 ? 'center' : 'left'
          }}
        >
          <div style={{ 
            background: 'linear-gradient(135deg, var(--secondary), var(--primary))', 
            padding: '0.75rem', 
            borderRadius: '16px', 
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Cookie size={22} />
          </div>
          
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', margin: 0 }}>
              We use <span style={{ color: 'var(--primary-light)', fontWeight: 600 }}>cookies</span> to curate your sanctuary. 
              By browsing, you agree to our neuro-inclusive data practices.
            </p>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '0.75rem', 
            flexShrink: 0,
            width: window.innerWidth < 640 ? '100%' : 'auto'
          }}>
             <button 
               onClick={handleAccept} 
               className="glow-pill" 
               style={{ 
                 padding: '0.6rem 1.75rem', 
                 fontSize: '0.85rem',
                 width: window.innerWidth < 640 ? '100%' : 'auto',
                 justifyContent: 'center'
               }}
             >
               Accept
             </button>
             <button 
               onClick={() => setIsVisible(false)} 
               style={{ 
                 background: 'rgba(255,255,255,0.05)', 
                 color: 'var(--text-muted)',
                 padding: '0.6rem',
                 borderRadius: '50%',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center'
               }}
             >
               <X size={18} />
             </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
