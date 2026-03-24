import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ 
          fontSize: '12rem', 
          fontWeight: 900, 
          lineHeight: 1,
          background: 'linear-gradient(135deg, var(--secondary), var(--primary))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '2rem',
          opacity: 0.2,
          position: 'relative'
        }}>
          404
        </div>
        
        <div style={{ position: 'relative', marginTop: '-8rem', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#fff' }}>Lost in the sanctuary?</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            Even the most mindful journeys have unexpected detours. Let's get you back to your Digital Sanctum.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link to="/" className="glow-pill" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Home size={18} /> Return Home
            </Link>
            <Link to="/features" style={{ 
              padding: '0.8rem 1.5rem', 
              borderRadius: '9999px', 
              border: '1px solid rgba(255,255,255,0.1)', 
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem'
            }}>
              <Compass size={18} /> Explore Features
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
