import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home as HomeIcon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" onClick={closeMenu}>
        <img src="/logo.png" alt="Lunoo Logo" style={{ height: '36px', filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.4))' }} />
        Lunoo
      </Link>
      
      <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
        <div className="nav-links">
            <Link to="/" onClick={closeMenu} className="nav-link home-link">
              <HomeIcon size={14} />
              Home
            </Link>
            <Link to="/features" className="nav-link" onClick={closeMenu}>Features</Link>
            <Link to="/philosophy" className="nav-link" onClick={closeMenu}>Philosophy</Link>
            <Link to="/pricing" className="nav-link" onClick={closeMenu}>Pricing</Link>
        </div>
        
        <div className="nav-mobile-actions">
          <a 
            href="https://play.google.com/store/apps/details?id=com.lunoo.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-pill"
          >
            Download Now
          </a>
        </div>
      </div>

      <div className="nav-actions desktop-only">
        <a 
          href="https://play.google.com/store/apps/details?id=com.lunoo.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glow-pill"
          style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}
        >
          Download Now
        </a>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
