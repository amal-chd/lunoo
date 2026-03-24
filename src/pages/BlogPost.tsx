import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Mail, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from './Blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <h1 className="hero-title">Article Not Found</h1>
        <Link to="/blog" className="glow-pill">Back to Journal</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--secondary)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 2000
        }}
      />

      <article className="container" style={{ padding: '8rem 2rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#ff6d00', fontWeight: 600, marginBottom: '3rem', fontSize: '0.95rem' }}>
            <ArrowLeft size={16} /> Back to Journal
          </Link>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {post.readTime} read</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} /> {post.author}</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '3rem', lineHeight: '1.1', color: '#fff', fontFamily: 'Outfit' }}>
            {post.title}
          </h1>
          
          <div style={{ width: '100%', overflow: 'hidden', borderRadius: '32px', marginBottom: '4rem', boxShadow: '0 40px 100px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          
          <div style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            <p style={{ fontWeight: 500, fontSize: '1.5rem', marginBottom: '3rem', color: '#fff', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>
            
            <div className="article-content">
              <p style={{ marginBottom: '2rem' }}>Building a habit isn't just about willpower; it's about architecture. When you track a habit with Lunoo, you're not just checking a box—you're building a neurological shortcut that makes success inevitable. In this guide, we explore why the simple act of visualization transforms your 1% improvements into life-long systems.</p>
              
              <h2 style={{ fontSize: '2.2rem', margin: '4rem 0 1.5rem', color: '#fff', fontFamily: 'Outfit' }}>The Science of Consistency</h2>
              <p style={{ marginBottom: '2rem' }}>According to behavioral psychology, the key is to make it easy to start. Lunoo's visual rituals are designed to reduce friction and increase the dopamine reward of every task completed. This is the foundation of habit stacking—a technique where you anchor new behaviors to existing ones, creating a seamless flow throughout your day.</p>
              
              <blockquote style={{ padding: '3rem', margin: '4rem 0', background: 'rgba(255,255,255,0.02)', borderRadius: '32px', borderLeft: '6px solid var(--secondary)', fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-light)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '4rem', opacity: 0.1, color: 'var(--secondary)' }}>"</span>
                "We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle
              </blockquote>
              
              <p style={{ marginBottom: '2rem' }}>Our platform emphasizes progress over perfection. Life is unpredictable; your habit tracker shouldn't be a source of stress. Lunoo provides the context you need to understand your patterns, celebrate your wins, and adjust your course with grace when needed.</p>
              
              <h3 style={{ fontSize: '1.8rem', margin: '3rem 0 1.2rem', color: '#fff', fontFamily: 'Outfit' }}>Rewiring for Long-Term Success</h3>
              <p>As you continue your journey, remember that every interaction with your Digital Sanctum is a vote for the person you want to become. By choosing intentionality today, you're architecting a future of focus and financial liberation.</p>
            </div>

            {/* Share & Author Footer */}
            <div style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', marginBottom: '0.2rem' }}>{post.author}</h4>
                    <p style={{ fontSize: '0.9rem' }}>Growth & Strategy at Lunoo</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button className="icon-button" style={{ width: '45px', height: '45px' }}><Facebook size={18} /></button>
                  <button className="icon-button" style={{ width: '45px', height: '45px' }}><Twitter size={18} /></button>
                  <button className="icon-button" style={{ width: '45px', height: '45px' }}><Mail size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Articles */}
      <section className="container" style={{ paddingBottom: '10rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Continue <span className="gradient-text">Reading</span></h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {relatedPosts.map(rp => (
            <Link key={rp.id} to={`/blog/${rp.slug}`} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={rp.image} alt={rp.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.4' }}>{rp.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem' }}>
                  Read Article <ChevronRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
