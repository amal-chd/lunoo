import { motion } from 'framer-motion';
import { TrendingUp, Droplet, Flame, CheckCircle2 } from 'lucide-react';
import { AppStoreBadge, PlayStoreBadge } from '../components/Badges';

export default function Home() {
  return (
    <>
      <section className="hero-wrapper">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
            <span style={{ color: "var(--text-light)" }}>✦</span> Your Digital Sanctum
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title"
        >
          Master Your Habits.<br/>Own Your Finances.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-subtitle"
        >
          Lunoo is the ultimate personal optimization platform. Track habits, manage budgets,<br/>and monitor holistic wellness in one beautiful, distraction-free experience.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="badge-link">
              <AppStoreBadge style={{ height: '48px' }} />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.lunoo.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="badge-link"
            >
              <PlayStoreBadge style={{ height: '48px' }} />
            </a>
          </div>
        </motion.div>

        <div className="hero-partners">
          <p>BUILT FOR HIGH PERFORMERS</p>
          <div className="partner-logos">
             <span>HABITS</span> • <span>FINANCE</span> • <span>WELLNESS</span> • <span>FOCUS</span>
          </div>
        </div>
      </section>

      {/* Mockup Cards Section */}
      <section className="mockup-grid">
         
         {/* Finance Command Center - Green/Emerald Theme */}
         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mockup-card mockup-card-orange">
            <div className="card-header">
               <h3>Finance Command Center</h3>
               <div className="icon-button" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}><TrendingUp size={18} /></div>
            </div>

            <div className="appointment-card" style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}>
               <div className="profile-row">
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', padding: '10px' }}>
                     <span style={{ fontSize: '1.2rem' }}>💰</span>
                  </div>
                  <div className="profile-info">
                     <h4>Monthly Balance</h4>
                     <p>+ ₹24,500 <span style={{ color: '#10b981', fontSize: '0.7rem', fontWeight: 700 }}>SAVINGS</span></p>
                  </div>
               </div>
            </div>

            <div className="data-log-card" style={{ borderColor: 'rgba(16, 185, 129, 0.1)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span>Rent & Utilities</span>
                  <span>₹12,000 / ₹15,000</span>
               </div>
               <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', background: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}></div>
               </div>
            </div>

            <div className="step-card" style={{ marginTop: '20px' }}>
                <div className="step-status">
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                      <span style={{ color: '#10b981' }}><CheckCircle2 size={14} /></span> Grocery Shopping
                   </div>
                   <span style={{ color: 'var(--text-muted)' }}>- ₹1,240</span>
                </div>
            </div>
         </motion.div>

         {/* Holistic Wellness - Purple Theme */}
         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mockup-card mockup-card-purple">
            <div className="card-header">
               <h3>Holistic Wellness</h3>
               <div className="icon-button"><Droplet size={18} /></div>
            </div>

            <div className="session-card">
               <div className="session-info">
                  <div style={{ width: '80px', height: '80px', border: '6px solid rgba(155, 44, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                     <div style={{ position: 'absolute', width: '100%', height: '100%', border: '6px solid #9d4edd', borderRadius: '50%', borderLeftColor: 'transparent', borderTopColor: 'transparent', transform: 'rotate(45deg)' }}></div>
                     <span style={{ fontSize: '1.2rem', fontWeight: 900 }}>75%</span>
                  </div>
                  <div>
                     <p>Daily Hydration</p>
                     <p>1,500ml / 2,000ml</p>
                  </div>
               </div>
               <div className="live-indicator">
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.7rem', color: '#c77dff', fontWeight: 600 }}>Active Goal</div>
                  </div>
                  <div className="indicator-dot"></div>
               </div>
            </div>

            <div className="data-log-card">
               <div className="data-log-glow">
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                     <div style={{ background: 'rgba(255,255,255,0.1)', width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <Flame size={16} color="#ff6d00" />
                     </div>
                     <div>
                        <h5>Habit Streak</h5>
                        <p>12 Days Consistent</p>
                     </div>
                  </div>
                  <span className="data-time" style={{ color: '#ff6d00' }}>🔥</span>
               </div>
            </div>
         </motion.div>

      </section>

      {/* Feature Showcase Grid */}
      <section className="features-preview" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 600 }}>One Platform, Total Clarity.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Stop jumping between apps. Lunoo integrates everything you need to grow.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                  { title: 'Habit Architecture', desc: 'Build routines that stick with gamified streaks and visual heatmaps.', icon: '⚡' },
                  { title: 'Unified Finance', desc: 'Automatic budget alerts and transaction tracking for financial freedom.', icon: '📈' },
                  { title: 'Wellness Ecosystem', desc: 'Hydration, sleep, and mood tracking for a holistic view of your health.', icon: '🌿' }
              ].map((f, i) => (
                  <div key={i} className="glass-panel" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>{f.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{f.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* NEW: Trust/Social Proof Section */}
      <section className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', flexWrap: 'wrap', opacity: 0.6 }}>
                <div>
                   <h3 style={{ fontSize: '3rem', color: '#ff6d00', fontWeight: 900 }}>50k+</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '2px' }}>HUMANS SERVED</p>
                </div>
                <div>
                   <h3 style={{ fontSize: '3rem', color: '#9d4edd', fontWeight: 900 }}>4.9</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '2px' }}>APP STORE RATING</p>
                </div>
                <div>
                   <h3 style={{ fontSize: '3rem', color: '#10b981', fontWeight: 900 }}>12M+</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '2px' }}>HABITS TRACKED</p>
                </div>
            </div>
         </motion.div>
      </section>

      {/* NEW: Testimonials Section */}
      <section className="container" style={{ marginBottom: '10rem' }}>
         <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <div className="hero-pill-badge" style={{ marginBottom: '2rem' }}>✦ User Stories</div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Love from the Sanctuary.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Join 50,000+ high-performers who found their balance with Lunoo.</p>
         </div>

         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {[
               { name: "Sarah J.", role: "Creative Director", text: "Lunoo transformed how I view my productivity. The low-stress habit tracking is a godsend for my ADHD brain. It doesn't guilt me — it empowers me.", color: "#ff6d00" },
               { name: "David M.", role: "Fintech Lead", text: "Finally, a finance app that doesn't feel like a spreadsheet. The visual budget architecture helped me save ₹50k in just two months.", color: "#10b981" },
               { name: "Elena R.", role: "Yoga Instructor", text: "The wellness ecosystem is so beautiful. I track my hydration and mood every day. It's truly a digital sanctum for the soul.", color: "#9d4edd" }
            ].map((t, idx) => (
               <motion.div 
                 key={idx} 
                 initial={{ opacity: 0, y: 30 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.8 }}
                 className="glass-panel" 
                 style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
               >
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: 'rgba(255,255,255,0.03)', fontWeight: 900, pointerEvents: 'none' }}>"</div>
                  <p style={{ fontSize: '1.1rem', color: '#fff', lineHeight: '1.8', marginBottom: '2.5rem', fontStyle: 'italic', position: 'relative' }}>{t.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                     <div style={{ width: '40px', height: '40px', background: t.color, borderRadius: '50%', opacity: 0.2 }}></div>
                     <div>
                        <h5 style={{ color: '#fff', margin: 0, fontSize: '1.1rem' }}>{t.name}</h5>
                        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>{t.role}</p>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* NEW: Final CTA Section */}
      <section className="container" style={{ paddingBottom: '12rem' }}>
         <div className="glass-panel" style={{ padding: '8rem 4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,109,0,0.05), rgba(155, 44, 255, 0.05))', border: '1px solid rgba(255,255,255,0.05)' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
               <h2 style={{ fontSize: '4rem', marginBottom: '2rem', color: '#fff' }}>Start Your Journey Today.</h2>
               <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
                  The first step toward mastery is creating a space that respects your focus. Download Lunoo and begin your transformation.
               </p>
               <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="#" className="badge-link">
                    <AppStoreBadge style={{ height: '54px' }} />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.lunoo.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="badge-link"
                  >
                    <PlayStoreBadge style={{ height: '54px' }} />
                  </a>
               </div>
            </motion.div>
         </div>
      </section>
    </>
  );
}
