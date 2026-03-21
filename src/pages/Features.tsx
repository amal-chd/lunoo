import { Clock, CheckSquare, Droplet, Flame, Compass } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Features() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      <div className="blob-shape blob-1"></div>
      
      <div style={{ paddingTop: '12rem', paddingBottom: '8rem', position: 'relative', zIndex: 10 }}>
        <section className="container section-padding" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingTop: '0' }}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 0.8 }}
            className="hero-title gradient-text" style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', marginBottom: '1.5rem', display: 'inline-block' }}
          >
            Designed for<br/>how you live.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle" style={{ color: 'var(--text-muted)' }}
          >
            A curated set of tools that help you organize, focus, and hydrate smoothly. Avoid bloated software, and rely on what works perfectly.
          </motion.p>
        </section>

        <motion.section 
          className="container bento-grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariant} className="bento-item glass-panel" style={{ gridColumn: 'span 2' }}>
            <div className="bento-icon" style={{ background: 'var(--secondary)', color: '#fff', boxShadow: '0 10px 30px rgba(255,107,139,0.4)' }}><CheckSquare size={36} /></div>
            <h3 style={{ fontSize: '2.5rem' }}>Visual Checklists</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Break overwhelming projects into step-by-step checklists that trigger satisfying interactions.</p>
          </motion.div>
          
          <motion.div variants={itemVariant} className="bento-item glass-panel" style={{ background: 'linear-gradient(135deg, var(--accent-green) 0%, #0093e9 100%)', color: '#fff', border: 'none' }}>
            <div className="bento-icon" style={{ background: 'rgba(255,255,255,0.2)' }}><Droplet size={36} /></div>
            <h3 style={{ color: '#fff' }}>Hydration</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>Hit your daily water goal with frictionless one-tap logging.</p>
          </motion.div>

          <motion.div variants={itemVariant} className="bento-item glass-panel" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: '#fff', border: 'none' }}>
            <div className="bento-icon" style={{ background: 'rgba(255,255,255,0.2)' }}><Clock size={36} /></div>
            <h3 style={{ color: '#fff' }}>Timers</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)' }}>Track your current activity using our prominent countdown timer.</p>
          </motion.div>

          <motion.div variants={itemVariant} className="bento-item glass-panel" style={{ gridColumn: 'span 2' }}>
            <div className="bento-icon" style={{ background: 'var(--accent)', color: '#111', boxShadow: '0 10px 30px rgba(255,204,0,0.4)' }}><Compass size={36} /></div>
            <h3 style={{ fontSize: '2.5rem' }}>Guided Routines</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Launch an entire sequence of tasks at once. Perfect for morning warmups, deep work, or evening cool downs.</p>
          </motion.div>
        </motion.section>

        <section className="container block-features" style={{ background: 'transparent', paddingBottom: 0, marginTop: '8rem' }}>
          <motion.div 
             initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
             className="feature-grid reverse"
          >
             <div className="feature-text">
               <div style={{ padding: '0.6rem 1.2rem', background: 'var(--secondary)', color: '#fff', borderRadius: '99px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2rem', fontSize: '0.9rem', boxShadow: '0 8px 20px rgba(255,107,139,0.3)' }}>
                 <Flame size={18} /> Gamified Habits
               </div>
               <h2>Don't break<br/>the streak.</h2>
               <p>Build lifelong habits by tracking them systematically. Watch your daily streaks grow and get rewarded for your consistency with satisfying visual badges.</p>
               
               <div className="glass-panel floating-fast" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '3rem', color: 'var(--secondary)', fontWeight: '800', fontSize: '1.2rem', padding: '1.5rem 2rem', width: 'max-content' }}>
                 <Flame size={32} />
                 <span>12 Days Streak! Keep going.</span>
               </div>
             </div>
             
              <div className="feature-image-box purple floating">
                <div style={{ width: '85%', height: '85%', overflow: 'hidden', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.2)' }}>
                  <img src="/screenshots/habits.png" alt="Habit Tracking at Lunoo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
           </motion.div>
        </section>

        <section className="container section-padding" style={{ marginTop: '5rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Experience the <span className="gradient-text">Beautifully Minimal</span> UI</h2>
          </motion.div>
          
          <div className="screenshot-grid">
            <motion.div variants={itemVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="screenshot-item large">
              <img src="/screenshots/home.png" alt="Lunoo Dashboard" />
            </motion.div>
            <motion.div variants={itemVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="screenshot-item">
              <img src="/screenshots/finance.png" alt="Finance Tracker" />
            </motion.div>
            <motion.div variants={itemVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="screenshot-item">
              <img src="/screenshots/tasks.png" alt="Task Manager" />
            </motion.div>
            <motion.div variants={itemVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="screenshot-item large">
              <img src="/screenshots/habits.png" alt="Habit Progress" />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
