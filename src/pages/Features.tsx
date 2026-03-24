import { motion } from 'framer-motion';
import { Clock, Droplet, CheckSquare, TrendingUp, Zap, PieChart, Shield, Download } from 'lucide-react';

export default function Features() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <section className="hero-wrapper" style={{ paddingBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
            <span style={{ color: "var(--text-light)" }}>✦</span> Feature Ecosystem
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title"
        >
          An Integrated Dashboard<br/>for your Life.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-subtitle"
        >
          Lunoo isn't just an app — it's your dashboard for total self-mastery.<br/>
          From financial freedom to daily hydration, we've unified it all.
        </motion.p>
      </section>

      {/* Bento Grid Concept for Features */}
      <section className="mockup-grid" style={{ marginBottom: '8rem', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', padding: '0 2rem' }}>
         
         {/* Financial Suite - Green Accent */}
         <motion.div {...fadeIn} className="mockup-card mockup-card-orange">
            <div className="card-header">
               <h3>Unified Financial Suite</h3>
               <div className="icon-button" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}><PieChart size={18} /></div>
            </div>

            <div className="appointment-card" style={{ paddingBottom: '2.5rem' }}>
               <div className="profile-row" style={{ marginBottom: '0.8rem' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', padding: '10px' }}>
                     <TrendingUp color="#10b981" size={24} />
                  </div>
                  <div className="profile-info">
                     <h4>Budget Architecture</h4>
                     <p>Income vs Expense Clarity.</p>
                  </div>
               </div>
               
               <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                 Automatic projections based on spending. Export everything to CSV and take control of your capital.
               </p>
               
               <div className="action-buttons">
                  <button className="btn-card"><Download size={12} /> Export CSV</button>
                  <button className="btn-card btn-primary-orange" style={{ background: '#10b981' }}>View Stats</button>
               </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem', opacity: 0.6 }}>
               <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1.5rem', borderRadius: '40px', fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.1)' }}>Financial Freedom</span>
            </div>
         </motion.div>

         {/* Wellness Ecosystem - Purple Accent */}
         <motion.div {...fadeIn} transition={{ delay: 0.1, duration: 0.6 }} className="mockup-card mockup-card-purple">
            <div className="card-header" style={{ marginBottom: '2.5rem' }}>
               <h3>Wellness Ecosystem</h3>
               <div className="icon-button"><Droplet size={18} /></div>
            </div>

            <div className="session-card">
               <div className="session-info">
                  <div style={{ background: 'rgba(155, 44, 255, 0.2)', padding: '10px', borderRadius: '50%' }}>
                     <Droplet color="#c77dff" size={20} />
                  </div>
                  <div>
                     <p>Hydration Monitoring</p>
                     <p>Intake visualization</p>
                  </div>
               </div>
               <div className="live-indicator">
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.7rem', color: '#c77dff', fontWeight: 600 }}>Active flow</div>
                    <div>Started 25 min ago</div>
                  </div>
               </div>
            </div>

            <div className="data-log-card">
               <div className="data-log-glow">
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                     <div style={{ background: 'rgba(255,255,255,0.2)', width: '30px', height: '30px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Zap size={16} fill="#fff" />
                     </div>
                     <div>
                        <h5>Mood Check-In</h5>
                        <p>Track your daily state</p>
                     </div>
                  </div>
                  <span className="data-time">Active</span>
               </div>
            </div>
         </motion.div>

         {/* Smart Habits - Purple Glow (Fire) */}
         <motion.div {...fadeIn} transition={{ delay: 0.2, duration: 0.6 }} className="mockup-card mockup-card-purple">
            <div className="card-header">
               <h3>Habit Architecture</h3>
               <div className="icon-button" style={{ background: 'rgba(255, 109, 0, 0.1)', color: '#ff6d00', border: '1px solid rgba(255, 109, 0, 0.3)' }}>
                  <Zap size={18} />
               </div>
            </div>

            <div className="appointment-card" style={{ borderColor: 'rgba(155, 44, 255, 0.3)' }}>
               <div className="profile-row">
                  <div style={{ width: '50px', height: '50px', background: 'var(--bg-page)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid rgba(155, 44, 255, 0.5)' }}>
                     <span style={{ fontSize: '1.5rem' }}>🔥</span>
                  </div>
                  <div className="profile-info">
                     <h4>Consistency Mastery</h4>
                     <p>Visual Streaks & Heatmaps</p>
                  </div>
               </div>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Leverage visual feedback to stay on track. Small steps lead to massive transformation.
               </p>
            </div>
            
            <div className="step-card" style={{ marginBottom: '1rem' }}>
               <div className="step-status" style={{ background: 'rgba(155, 44, 255, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                     <CheckSquare size={14} color="#9d4edd" /> Reading Time
                  </div>
                  <span style={{ color: 'var(--text-muted)' }}>12 Day Streak</span>
               </div>
            </div>
         </motion.div>

         {/* Deep Work Focus - Dark/Glass */}
         <motion.div {...fadeIn} transition={{ delay: 0.3, duration: 0.6 }} className="mockup-card mockup-card-orange">
            <div className="card-header">
               <h3>Deep Work & Flow</h3>
               <div className="icon-button"><Clock size={18} /></div>
            </div>

            <div className="session-card" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.02)' }}>
               <div className="session-info">
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '50%' }}>
                     <Shield color="#ff6d00" size={20} />
                  </div>
                  <div>
                     <p>Distraction Shield</p>
                     <p>Integrated Flow Timer</p>
                  </div>
               </div>
               <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  25:00
               </div>
            </div>

            <div className="data-log-card" style={{ border: 'none', background: 'transparent', padding: '0' }}>
               <div className="data-log-glow" style={{ background: 'linear-gradient(90deg, #ff6d00, #ff9900)', boxShadow: '0 10px 30px rgba(255, 109, 0, 0.4)' }}>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                     <h5 style={{ margin: '0', fontSize: '1rem', fontWeight: 700 }}>START FOCUS SESSION</h5>
                  </div>
               </div>
            </div>
         </motion.div>

      </section>

      {/* NEW: AI Mastery Section */}
      <section className="container" style={{ marginBottom: '10rem' }}>
         <div className="glass-panel" style={{ padding: '6rem 4rem', textAlign: 'center', background: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent)' }}>
            <motion.div {...fadeIn}>
               <div className="icon-button" style={{ margin: '0 auto 2rem', width: '60px', height: '60px', background: 'rgba(139, 92, 246, 0.1)' }}>
                  <Zap size={30} color="var(--primary-light)" />
               </div>
               <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#fff' }}>Persona-Driven Insights</h2>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
                  Lunoo analyzes your behavioral patterns to provide localized, context-aware suggestions. Whether you're an ADHD mind or a serial entrepreneur, the dashboard adapts to you.
               </p>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                     <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Local AI Processing</h4>
                     <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Insights are generated on-device, ensuring your personal data never touches our servers.</p>
                  </div>
                  <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                     <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Smart Burnout Detection</h4>
                     <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Identifies when your productivity metrics dip and suggests proactive breaks.</p>
                  </div>
                  <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'left', border: '1px solid rgba(255, 109, 0, 0.2)' }}>
                     <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem' }}>Custom Focus Blocks</h4>
                     <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Learns your "Flow State" peaks and helps you schedule tasks accordingly.</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* NEW: Global Sync Section */}
      <section className="container" style={{ marginBottom: '10rem' }}>
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div {...fadeIn}>
               <div className="hero-pill-badge" style={{ marginBottom: '2rem' }}>✦ Multi-Platform</div>
               <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Synchronized Sanctum.</h2>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  Start a habit on your iPhone, check your budget on your Android tablet, and view your focus stats on the web. Lunoo's hybrid backend ensures sub-second latency across all your nodes.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, marginTop: '2.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#fff' }}>
                     <CheckSquare size={18} color="#10b981" /> Real-time Supabase Sync
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#fff' }}>
                     <CheckSquare size={18} color="#10b981" /> Offline-first Architecture
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                     <CheckSquare size={18} color="#10b981" /> Zero-Knowledge Encryption
                  </li>
               </ul>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} style={{ position: 'relative' }}>
               <div className="glass-panel" style={{ padding: '3rem', borderRadius: '40px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ background: '#000', borderRadius: '25px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                     <div style={{ height: '300px', width: '100%', background: 'linear-gradient(135deg, rgba(155, 44, 255, 0.1), rgba(255, 109, 0, 0.1))', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱 💻 ⌚</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>SYCHRONIZING...</div>
                         </div>
                     </div>
                  </div>
               </div>
               
               {/* Decorative Circles */}
               <div className="glow-purple" style={{ top: '-40px', right: '-40px', width: '200px', height: '200px', zIndex: -1 }} />
            </motion.div>
         </div>
      </section>

      {/* NEW: Enterprise Security Section */}
      <section className="container" style={{ marginBottom: '10rem' }}>
         <div className="glass-panel" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <div>
               <Shield size={40} color="#10b981" style={{ marginBottom: '1.5rem' }} />
               <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '1rem' }}>Your Fortress.</h3>
               <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>We utilize industry-leading protocols to ensure your data remains your property. No backdoors, no selling to third parties.</p>
            </div>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ background: 'rgba(16, 185, 129, 0.1)', height: 'fit-content', padding: '10px', borderRadius: '12px' }}>
                      <TrendingUp size={16} color="#10b981" />
                   </div>
                   <div>
                      <h5 style={{ color: '#fff', margin: '0 0 0.4rem 0' }}>RSA-4096 Encryption</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>The same level of security used by global financial institutions.</p>
                   </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ background: 'rgba(139, 92, 246, 0.1)', height: 'fit-content', padding: '10px', borderRadius: '12px' }}>
                      <PieChart size={16} color="var(--primary-light)" />
                   </div>
                   <div>
                      <h5 style={{ color: '#fff', margin: '0 0 0.4rem 0' }}>Biometric Gateway</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>FaceID and Fingerprint integration for sensitive financial logs.</p>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* Trust/Tech Section */}
      <section style={{ background: 'rgba(255,255,255,0.02)', padding: '6rem 0', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--text-muted)', fontWeight: 500 }}>POWERING THE FUTURE OF PRODUCTIVITY</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', opacity: 0.4 }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit' }}>FLUTTER</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit' }}>POSTGRESQL</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit' }}>SUPABASE</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit' }}>FIREBASE</span>
          </div>
      </section>
    </>
  );
}
