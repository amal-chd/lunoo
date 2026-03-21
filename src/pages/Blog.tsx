import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    slug: 'how-to-build-daily-habits-that-stick',
    title: 'How to Build Daily Habits That Stick (2026 Guide)',
    excerpt: 'Consistency is the secret to change. Learn the science behind habit formation and why tracking is your best ally.',
    date: 'March 15, 2026',
    author: 'Sarah James',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    slug: 'best-habit-tracker-apps-for-productivity',
    title: 'Best Habit Tracker Apps for Productivity in 2026',
    excerpt: 'Not all apps are created equal. We compare the top contenders and why a visual approach wins every time.',
    date: 'March 10, 2026',
    author: 'Mike Chen',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1512314881392-0b25e1975e53?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    slug: 'how-to-stay-consistent-with-daily-routine',
    title: 'How to Stay Consistent with Your Daily Routine',
    excerpt: 'Life happens. Here is how to maintain your routine even when your schedule gets chaotic and unpredictable.',
    date: 'March 5, 2026',
    author: 'Elena Ross',
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1493839523149-2864fca44919?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Blog() {
  return (
    <div className="page-pt">
       <section className="container section-padding">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
             <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>The <span className="gradient-text">Lunoo Blog</span></h1>
             <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>Insights and strategies to help you hack your brain and reclaim your focus.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
             {blogPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="glass-panel" 
                  whileHover={{ y: -10 }}
                  style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                   <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                      <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.5rem 1rem', background: 'var(--primary)', color: '#fff', borderRadius: '99px', fontWeight: 700, fontSize: '0.9rem' }}>
                        {post.category}
                      </div>
                   </div>
                   
                   <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                         <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {post.date}</span>
                         <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} /> {post.author}</span>
                      </div>
                      
                      <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>{post.title}</h3>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1 }}>{post.excerpt}</p>
                      
                      <Link to={`/blog/${post.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700, color: 'var(--primary)', fontSize: '1.1rem' }}>
                         Read Article <ArrowRight size={20} />
                      </Link>
                   </div>
                </motion.div>
             ))}
          </div>
       </section>
    </div>
  );
}
