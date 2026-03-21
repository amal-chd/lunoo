import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <div className="nav-brand-img" style={{ background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
          <LIcon size={24} />
        </div>
        Lunoo
      </Link>

      <div className="nav-links">
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link to="/features" className={isActive('/features') ? 'active' : ''}>Features</Link>
        <Link to="/philosophy" className={isActive('/philosophy') ? 'active' : ''}>Philosophy</Link>
        <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>Story</Link>
      </div>

      <div className="nav-actions">
        <button className="btn btn-secondary glass-panel" style={{ padding: '0.6rem 1.4rem', fontSize: '1rem' }}>Log in</button>
        <button className="btn btn-primary" style={{ padding: '0.6rem 2rem', fontSize: '1rem', fontWeight: 800 }}>Download App</button>
      </div>
    </nav>
  );
}

function LIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7 L7 17 L17 17"></path>
    </svg>
  );
}
