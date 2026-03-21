import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Mail } from 'lucide-react';
import { blogPosts } from './Blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}><h1>Article Not Found</h1><Link to="/blog" className="btn btn-primary">Back to Blog</Link></div>;
  }

  return (
    <div className="page-pt">
       <article className="container" style={{ padding: '6rem 0' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '3rem', fontSize: '1.2rem' }}>
                <ArrowLeft size={24} /> Back to Insights
             </Link>
             
             <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={20} /> {post.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={20} /> {post.author}</span>
             </div>
             
             <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '4rem', lineHeight: '1.1', maxWidth: '1000px' }}>{post.title}</h1>
             
             <div style={{ height: '600px', width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-xl)', marginBottom: '5rem', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             
             <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '4rem' }}>
                <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '120px', height: 'fit-content' }}>
                   <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Share</div>
                   <button className="glass-panel" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}><Facebook size={24} /></button>
                   <button className="glass-panel" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}><Twitter size={24} /></button>
                   <button className="glass-panel" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}><Mail size={24} /></button>
                </aside>
                
                <section style={{ maxWidth: '800px', color: 'var(--text-main)', fontSize: '1.3rem', lineHeight: '1.9' }}>
                   <p style={{ fontWeight: 600, fontSize: '1.6rem', marginBottom: '3rem', color: '#1e293b' }}>{post.excerpt}</p>
                   
                   <p>Building a habit isn't just about willpower; it's about architecture. When you track a habit with Lunoo, you're not just checking a box—you're building a neurological shortcut that makes success inevitable. In this guide, we explore why the simple act of visualization transforms your 1% improvements into life-long systems.</p>
                   
                   <h2 style={{ fontSize: '2.5rem', margin: '4rem 0 2rem' }}>The Science of Consistency</h2>
                   <p>According to James Clear and other habits experts, the key is to make it easy to start. Lunoo's visual rituals are designed to reduce friction and increase the dopamine reward of every task completed. Whether it's a simple task or a complex routine, the platform guides you through the process of stacking your behaviors for maximum impact.</p>
                   
                   <blockquote style={{ padding: '3rem', margin: '4rem 0', background: 'var(--bg-surface)', borderLeft: '10px solid var(--primary)', fontStyle: 'italic', fontSize: '1.8rem', fontWeight: 500, color: 'var(--primary)' }}>
                      "We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristole (and our favorite quote at Lunoo)
                   </blockquote>
                   
                   <p>As you continue your journey, remember that perfection isn't the goal—progress is. Our platform is built to handle the ups and downs of life, giving you the flexibility to adapt your habits while maintaining your long-term vision of productivity and success.</p>
                </section>
             </div>
          </motion.div>
       </article>
    </div>
  );
}
