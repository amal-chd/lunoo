import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <img src="/logo.png" alt="Lunoo Logo" style={{ height: '36px', filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.4))' }} />
        Lunoo
      </Link>
      
      <div className="nav-links-container">
        <div className="nav-links">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Home
            </Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/philosophy" className="nav-link">Philosophy</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/blog" className="nav-link">Journal</Link>
        </div>
      </div>

      <div className="nav-actions">
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
    </nav>
  );
}
