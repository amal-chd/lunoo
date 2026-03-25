import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: "The Architecture of Consistency: Why Visual Rituals Work",
    excerpt: "Discover the psychological power of visual habit tracking and how Lunoo transforms your daily routines into a digital sanctum of productivity.",
    category: "Productivity",
    date: "March 20, 2024",
    readTime: "6 min",
    author: "Elena Vance",
    image: "/images/journal/featured.png",
    slug: "architecture-of-consistency"
  },
  {
    id: 2,
    title: "Financial Flow: Navigating Modern Wealth Management",
    excerpt: "Learn how to architect your financial future with precision-driven tracking and intelligent automation tools designed for the modern era.",
    category: "Finance",
    date: "March 18, 2024",
    readTime: "8 min",
    author: "Marcus Aurelius",
    image: "/images/journal/finance.png",
    slug: "financial-flow-management"
  },
  {
    id: 3,
    title: "Mindful Metrics: The Intersection of Data and Wellbeing",
    excerpt: "Exploring the balance between digital optimization and mental clarity. How to use data to enhance your wellness without the burnout.",
    category: "Wellness",
    date: "March 15, 2024",
    readTime: "5 min",
    author: "Sarah Chen",
    image: "/images/journal/wellness.png",
    slug: "mindful-metrics-wellbeing"
  },
  {
    id: 4,
    title: "Digital Networking in the Era of Deep Work",
    excerpt: "How to maintain high-value professional connections while preserving your focus and cognitive bandwidth in a noisy world.",
    category: "Productivity",
    date: "March 12, 2024",
    readTime: "7 min",
    author: "David Goggins",
    image: "/images/journal/social.png",
    slug: "digital-networking-deep-work"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Productivity', 'Finance', 'Wellness'];

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <div className="blog-page" style={{ paddingBottom: '10rem', minHeight: '100vh', position: 'relative', background: 'transparent' }}>
      {/* Hero Section */}
      <section className="container" style={{ paddingTop: '10rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="pill-badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Insights & Guides</span>
          <h1 className="hero-title" style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', marginBottom: '1.5rem', lineHeight: 1, fontWeight: 800 }}>
            The <span className="gradient-text">Journal</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '750px', margin: '0 auto 5rem', fontSize: '1.4rem', opacity: 0.8 }}>
            Deep explorations in habit architecture, financial mastery, and the science of focus.
          </p>
        </motion.div>

        {/* Category Filters - High Gloss Segmented Control */}
        <div className="mobile-scroll-container" style={{ 
          display: 'flex', 
          justifyContent: window.innerWidth < 768 ? 'flex-start' : 'center', 
          gap: '0.8rem', 
          padding: '0.8rem',
          background: 'rgba(255,109,0,0.08)',
          borderRadius: '100px',
          maxWidth: '100%',
          overflowX: 'auto',
          margin: '0 auto 4rem',
          border: '2px solid rgba(255,109,0,0.3)',
          backdropFilter: 'blur(30px)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          scrollbarWidth: 'none'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '100px',
                border: 'none',
                background: activeCategory === category ? 'var(--secondary)' : 'rgba(255,255,255,0.03)',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                boxShadow: activeCategory === category ? '0 10px 30px rgba(255, 109, 0, 0.5)' : 'none',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>{category}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="responsive-grid responsive-grid-2" style={{ gap: '2rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/blog/${post.slug}`} className="glass-panel" style={{ 
                  padding: '0', 
                  overflow: 'hidden', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.02)',
                  textDecoration: 'none',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
                }}>
                  <div style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ 
                      position: 'absolute', 
                      top: '1.5rem', 
                      right: '1.5rem'
                    }}>
                      <span style={{ 
                        background: 'rgba(255,109,0,0.9)', 
                        color: '#fff', 
                        padding: '0.6rem 1.2rem', 
                        borderRadius: '8px', 
                        fontSize: '0.8rem', 
                        fontWeight: 900, 
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        backdropFilter: 'blur(5px)'
                      }}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: 'clamp(1.5rem, 5vw, 3.5rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '1.2rem' }}>
                      <Clock size={16} /> <span>{post.readTime} read</span>
                      <span style={{ margin: '0 0.3rem' }}>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: '#fff', marginBottom: '1rem', lineHeight: '1.2', fontFamily: 'Outfit', fontWeight: 700 }}>{post.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(1rem, 3vw, 1.15rem)', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--secondary)', fontWeight: 800, fontSize: '1.1rem', marginTop: 'auto' }}>
                      Read Journey <ArrowRight size={24} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter - Epic Design */}
      <section className="container" style={{ marginTop: '15rem' }}>
        <div className="glass-panel" style={{ 
          padding: 'clamp(3rem, 10vw, 10rem) clamp(1.5rem, 5vw, 4rem)', 
          textAlign: 'center', 
          border: '2px solid rgba(255,109,0,0.4)', 
          borderRadius: 'clamp(30px, 8vw, 60px)',
          background: 'radial-gradient(circle at center, rgba(255,109,0,0.1) 0%, transparent 70%), rgba(255,255,255,0.01)'
        }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: 800 }}>Master Your <span className="gradient-text">Focus</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.4rem', marginBottom: '5rem', maxWidth: '700px', margin: '0 auto 5rem' }}>
            Exclusive weekly guides on digital minimalism, wealth architecture, and high-performance habits.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', maxWidth: '650px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input 
              type="email" 
              placeholder="architect@domain.com" 
              style={{
                flex: 1,
                minWidth: '320px',
                padding: '1.6rem 3rem',
                borderRadius: '100px',
                border: '2px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '1.2rem',
                outline: 'none',
                backdropFilter: 'blur(20px)',
                transition: 'border-color 0.3s ease'
              }}
            />
            <button className="glow-pill" style={{ padding: '1.6rem 4.5rem', fontSize: '1.2rem' }}>Access Sanctum</button>
          </div>
        </div>
      </section>
    </div>
  );
}
