import { motion, type Variants } from 'framer-motion';
import { Star, CheckSquare, Target, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppStoreBadge, PlayStoreBadge } from '../components/Badges';
import FAQ from '../components/FAQ';

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
  };

  return (
    <>
      <div className="blob-shape blob-1"></div>
      <div className="blob-shape blob-2"></div>
      <div className="blob-shape blob-3"></div>

      <section className="hero-wrapper">
        <div className="container">
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               <div className="hero-pill">
                 <span className="hero-pill-badge">Primary Features</span>
                 Habit Tracker • Daily Planner • Expense Manager
               </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
              className="hero-title"
            >
              All-in-One <span className="gradient-text">Habit Tracker & Productivity App.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-subtitle"
            >
              Master your daily routine with the ultimate task manager and habit tracker app. Build streaks, manage money, and stay consistent.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="hero-actions"
            >
             <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
               <a href="#"><AppStoreBadge style={{ height: '44px' }} /></a>
               <a href="#"><PlayStoreBadge style={{ height: '44px' }} /></a>
            </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 600 }}>
               <div style={{ display: 'flex', color: 'var(--accent)' }}>
                 {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
               </div>
               <span>Trusted by 10,000+ habit building superstars.</span>
            </motion.div>
          </div>

          <motion.div variants={scaleUp} initial="hidden" animate="visible" className="hero-mockup-container">
            <motion.div className="floating-widget widget-1 floating" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--primary-light)', borderRadius: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                 <Target size={24} />
               </div>
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Daily Habit</div>
                <div style={{ fontSize: '1.1rem' }}>Streak: 15 Days! 🔥</div>
              </div>
            </motion.div>

            <motion.div className="floating-widget widget-2 floating-fast" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
              <div style={{ width: '45px', height: '45px', background: 'var(--secondary)', borderRadius: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
                 <Wallet size={24} />
               </div>
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Expense Tracking</div>
                <div style={{ fontSize: '1.1rem' }}>Saved $40 today 💰</div>
              </div>
            </motion.div>

            <div className="mockup-frame">
              <div className="mockup-notch"></div>
              <div className="mockup-ui">
                <img src="/screenshots/home.png" alt="Lunoo Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '40px' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main SEO Sections */}
      <section className="container section-padding">
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="feature-grid">
           <div className="feature-text">
             <h2>Build Better<br/>Habits Daily</h2>
             <p>Our daily habit tracker helps you maintain consistency through visual progress and streaks. Research shows that tracking habits is the #1 way to ensure long-term behavior change.</p>
             <Link to="/features" className="btn btn-secondary glass-panel" style={{ marginTop: '2rem' }}>Experience the transformation</Link>
           </div>
           <div className="feature-image-box blue floating">
              <div className="glass-panel" style={{ padding: '3rem' }}>
                <Target size={80} color="var(--primary)" fill="rgba(92,111,255,0.1)" />
                <h3 style={{ marginTop: '2rem' }}>Routine Tracker</h3>
              </div>
           </div>
         </motion.div>

         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="feature-grid reverse" style={{ marginTop: '10rem' }}>
           <div className="feature-text">
             <h2>Organize Tasks &<br/>Stay Productive</h2>
             <p>As a robust task manager app, Lunoo integrates your daily planner and habit tracker into one seamless workflow. Never miss a deadline or a workout again.</p>
             <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
               <a href="#"><AppStoreBadge style={{ height: '56px' }} /></a>
               <a href="#"><PlayStoreBadge style={{ height: '56px' }} /></a>
            </div>
           </div>
           <div className="feature-image-box purple floating">
              <div className="glass-panel" style={{ padding: '3rem' }}>
                <CheckSquare size={80} color="var(--secondary)" />
                <h3 style={{ marginTop: '2rem' }}>Task Management</h3>
              </div>
           </div>
         </motion.div>

         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="feature-grid" style={{ marginTop: '10rem' }}>
           <div className="feature-text">
             <h2>Track Expenses &<br/>Manage Money</h2>
             <p>Why use multiple apps? Lunoo includes an integrated financial tracker so you can monitor your habits and your spending side-by-side. The ultimate all-in-one productivity app.</p>
             <Link to="/features" className="btn btn-secondary glass-panel" style={{ marginTop: '2rem' }}>Master your finances</Link>
           </div>
           <div className="feature-image-box green floating">
              <div className="glass-panel" style={{ padding: '3rem' }}>
                <Wallet size={80} color="var(--accent-green)" />
                <h3 style={{ marginTop: '2rem' }}>Expense Manager</h3>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#"><AppStoreBadge style={{ height: '60px' }} /></a>
            <a href="#"><PlayStoreBadge style={{ height: '60px' }} /></a>
         </div>
           </div>
         </motion.div>
      </section>

      {/* SCREENSHOT SLIDER SECTION */}
      <section className="screenshot-slider-section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Designed for <span className="gradient-text">Clarity & Ease.</span></h2>
            <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>A beautiful, intuitive interface that makes building habits and managing life a joy.</p>
          </motion.div>
          
          <div className="screenshot-track">
            <div className="screenshot-container">
              {[
                { src: '/screenshots/home.png', title: 'Home Dashboard' },
                { src: '/screenshots/habits.png', title: 'Habit Tracker' },
                { src: '/screenshots/finance.png', title: 'Finance Tracker' },
                { src: '/screenshots/tasks.png', title: 'Task Manager' },
                { src: '/screenshots/profile.png', title: 'Profile Settings' },
                // Duplicate for infinite scroll effect
                { src: '/screenshots/home.png', title: 'Home Dashboard' },
                { src: '/screenshots/habits.png', title: 'Habit Tracker' },
                { src: '/screenshots/finance.png', title: 'Finance Tracker' },
                { src: '/screenshots/tasks.png', title: 'Task Manager' },
                { src: '/screenshots/profile.png', title: 'Profile Settings' },
              ].map((item, index) => (
                <div key={index} className="screenshot-card glass-panel">
                  <img src={item.src} alt={item.title} />
                  <div className="screenshot-caption">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section style={{ background: 'var(--bg-surface)', padding: '6rem 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Improve Your Daily Routine</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            <p>
              Whether you are looking for a <strong>habit tracker app</strong> for students or a professional <strong>daily planner app</strong>, Lunoo is built to adapt. Our platform serves as your <strong>task manager app</strong>, <strong>routine tracker</strong>, and <strong>productivity app</strong>, all in one. Join thousands who have transformed their lives by tracking their habits and staying organized with our simple yet powerful mobile application. 
              <br/><br/>
              Available now — <Link to="/features" style={{ color: 'var(--primary)', fontWeight: 600 }}>Explore the best productivity app</Link> to get started on your journey of self-improvement.
            </p>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
