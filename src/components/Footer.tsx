import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppStoreBadge, PlayStoreBadge } from './Badges';

export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="footer-top">
          <div style={{ maxWidth: '600px' }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Ready to reclaim your <br/> working memory?
            </motion.h2>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
               <a href="#"><AppStoreBadge style={{ height: '44px' }} /></a>
               <a href="#"><PlayStoreBadge style={{ height: '44px' }} /></a>
            </div>
          </div>
          
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.6)' }}>
             <p style={{ fontSize: '1.2rem' }}>Questions? Talk to us.</p>
             <a href="mailto:hello@lunoo.app" style={{ fontSize: '2rem', fontWeight: 900, color: '#fff' }}>hello@lunoo.app</a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800 }}>Lunoo</h4>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Built for every type of mind. <br/> Simple, visual, and neuro-inclusive.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/philosophy">Philosophy</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/">Live Support</Link>
            <Link to="/about">Community</Link>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/persona/habit-tracker-for-students">For Students</Link>
            <Link to="/persona/habit-tracker-for-entrepreneurs">For Entrepreneurs</Link>
            <Link to="/persona/daily-planner-for-professionals">For Professionals</Link>
            <Link to="/persona/productivity-app-for-creators">For Creators</Link>
          </div>
          <div className="footer-col" style={{ textAlign: 'right' }}>
            <h4>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'flex-end', marginBottom: '2rem' }}>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
            <h4>Social</h4>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-end' }}>
               <a href="#"><Instagram size={28} /></a>
               <a href="#"><Twitter size={28} /></a>
               <a href="#"><MessageSquare size={28} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Lunoo App Ltd. Made with <Heart size={14} fill="currentColor" color="var(--secondary)" /> for the community.</p>
          <p>Hand-crafted for humans.</p>
        </div>
      </div>
    </footer>
  );
}
