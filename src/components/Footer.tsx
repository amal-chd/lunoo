import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppStoreBadge, PlayStoreBadge } from './Badges';

export default function Footer() {
  return (
    <footer className="footer shadow-2xl">
      <div className="container">
        
        {/* Simplified Premium CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{ 
            padding: '3rem',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Reclaim your <span className="gradient-text">focus.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
             Join the sanctuary. Optimize your habits and finances with Lunoo.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <a href="https://apps.apple.com/in/app/lunoo-habit-life-tracker/id6760951560" target="_blank" rel="noopener noreferrer" className="badge-link"><AppStoreBadge style={{ height: '40px' }} /></a>
             <a href="https://play.google.com/store/apps/details?id=com.lunoo.app" target="_blank" rel="noopener noreferrer" className="badge-link"><PlayStoreBadge style={{ height: '40px' }} /></a>
          </div>
        </motion.div>

        <div className="footer-grid">
          
          <div className="footer-col">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>
               <img src="/logo.png" alt="Lunoo" style={{ height: '28px' }} />
               Lunoo
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Master your mind and your money in one beautiful experience.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
               <a href="#" className="badge-link"><Instagram size={18} /></a>
               <a href="#" className="badge-link"><Twitter size={18} /></a>
               <a href="#" className="badge-link"><MessageSquare size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/philosophy">Philosophy</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href="mailto:hello@lunoo.app">Contact</a>
          </div>

          <div className="footer-col">
             <h4>Newsletter</h4>
             <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
               Stay updated with our neuro-inclusive growth tips.
             </p>
             <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1rem', borderRadius: '12px', color: '#fff', fontSize: '0.85rem', width: '100%' }}
                />
             </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Lunoo App. Built for humans.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
             <Heart size={14} color="var(--primary-light)" />
             <span>Systems Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
