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
      <section className="mockup-grid responsive-grid-2" style={{ marginBottom: '4rem', padding: '0 1rem' }}>
         
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
               <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', color: '#fff' }}>Persona-Driven Insights</h2>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
                  Lunoo analyzes your behavioral patterns to provide localized, context-aware suggestions. Whether you're an ADHD mind or a serial entrepreneur, the dashboard adapts to you.
               </p>
               
               <div className="responsive-grid responsive-grid-3" style={{ gap: '1.5rem', marginTop: '3rem' }}>
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
               <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', marginBottom: '1.5rem' }}>Synchronized Sanctum.</h2>
               <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  Start a habit on your iPhone, check your budget on your Android tablet, and view your focus stats on the web. Lunoo's hybrid backend ensures sub-second latency across all your nodes.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, marginTop: '2.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#fff' }}>
                      <CheckSquare size={18} color="#10b981" /> Real-time Firebase Sync
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#fff' }}>
                     <CheckSquare size={18} color="#10b981" /> Offline-first Architecture
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
                     <CheckSquare size={18} color="#10b981" /> Zero-Knowledge Encryption
                  </li>
               </ul>
            </motion.div>
                <motion.div {...fadeIn} transition={{ delay: 0.2 }} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
               <div className="glass-panel" style={{ width: '100%', maxWidth: '500px', aspectRatio: '1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px solid rgba(255,255,255,0.05)', background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.05), transparent)' }}>
                  {/* Central Node */}
                  <div style={{ zIndex: 2, background: 'var(--bg-page)', padding: '1.5rem', borderRadius: '50%', border: '2px solid var(--primary-light)', boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}>
                     <img src="/logo.png" alt="Lunoo" style={{ width: '40px', height: '40px' }} />
                  </div>

                  {/* Orbiting Devices */}
                  {[
                    { Icon: Zap, color: '#ff6d00', delay: 0, angle: 0 },
                    { Icon: Droplet, color: '#3b82f6', delay: 2, angle: 120 },
                    { Icon: CheckSquare, color: '#10b981', delay: 4, angle: 240 }
                  ].map((device, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: device.delay }}
                      style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}
                    >
                      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'auto' }}>
                         <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', padding: '12px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                            <device.Icon size={20} color={device.color} />
                         </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Pulsing Rings */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ position: 'absolute', width: '60%', height: '60%', border: '1px solid var(--primary-light)', borderRadius: '50%' }}
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.05, 0.2, 0.05] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    style={{ position: 'absolute', width: '80%', height: '80%', border: '1px solid var(--primary-light)', borderRadius: '50%' }}
                  />
               </div>
               
               {/* Decorative Circles */}
               <div className="glow-purple" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', zIndex: -1, opacity: 0.4 }} />
            </motion.div>
         </div>
      </section>

      {/* NEW: Enterprise Security Section */}
      <section className="container" style={{ marginBottom: '10rem' }}>
         <div className="glass-panel" style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <div>
               <Shield size={40} color="#10b981" style={{ marginBottom: '1.5rem' }} />
               <h3 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', marginBottom: '1rem' }}>Your Fortress.</h3>
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
              <span style={{ fontSize: '1.2rem', fontWeight: 900, fontFamily: 'Outfit' }}>FIREBASE</span>
          </div>
      </section>
    </>
  );
}
