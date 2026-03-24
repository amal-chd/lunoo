import { motion, type Variants } from 'framer-motion';
import { Brain, Heart, Sparkles, BookOpen } from 'lucide-react';

export default function Philosophy() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      <section className="hero-wrapper" style={{ paddingBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
            <span style={{ color: "var(--text-light)" }}>✦</span> The Digital Sanctum
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title"
        >
          Productivity should<br/>feel like a sanctuary.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-subtitle"
        >
          We build for every mind. Lunoo rejects the stress of "hustle culture"<br/>
          in favor of a calm, intentional, and integrated approach to growth.
        </motion.p>
      </section>

      {/* Philosophy Points - Alternating Side-by-Side */}
      <section className="container" style={{ padding: '8rem 2rem' }}>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
            
            {/* Point 1 */}
            <motion.div 
               initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
               style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}
            >
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <div className="icon-button" style={{ color: '#ff6d00', background: 'rgba(255, 109, 0, 0.1)', borderColor: 'rgba(255, 109, 0, 0.2)', marginBottom: '2rem' }}><Brain size={32} /></div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>The Dopamine Loop</h2>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                     Most apps use aggressive notifications and "shaming" reminders. Lunoo uses <strong>Focus Design</strong>—soft hues and gentle nudges that encourage action without the underlying anxiety. We believe your tools should support you, not stress you.
                  </p>
               </div>
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <div className="mockup-card mockup-card-orange" style={{ padding: '3rem' }}>
                     <div className="data-log-card" style={{ marginBottom: '1.5rem' }}>
                         <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                            <div style={{ width: '65%', height: '100%', background: '#ff6d00', borderRadius: '10px', boxShadow: '0 0 15px rgba(255,109,0,0.4)' }} />
                         </div>
                     </div>
                     <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>"A gentle reminder: You're doing great. Take a deep breath."</p>
                  </div>
               </div>
            </motion.div>

            {/* Point 2 */}
            <motion.div 
               initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
               style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap-reverse' }}
            >
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <div className="mockup-card mockup-card-purple" style={{ padding: '3rem' }}>
                     <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        {[1,2,3,4,5].map(i => <div key={i} style={{ width: '40px', height: '40px', borderRadius: '8px', background: i < 4 ? '#9d4edd' : 'rgba(255,255,255,0.05)' }} />)}
                     </div>
                     <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Missed a day? No streaks lost. Just pick up where you left off.</p>
                  </div>
               </div>
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <div className="icon-button" style={{ color: '#9d4edd', background: 'rgba(157, 78, 221, 0.1)', borderColor: 'rgba(157, 78, 221, 0.2)', marginBottom: '2rem' }}><Heart size={32} /></div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Kind Productivity</h2>
                  <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                     Life isn't a straight line. Lunoo is designed to be flexible. If you miss a day, we don't punish you. We offer gentle encouragement to step back into your flow whenever you're ready. Growth is a journey, not a sprint.
                  </p>
               </div>
            </motion.div>

         </div>
      </section>

      {/* Science Grid */}
      <section style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8rem 2rem' }}>
          <div className="container">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '5rem', textAlign: 'center', color: '#fff' }}>Rooted in Science</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
               {[
                  { icon: Sparkles, color: '#ff6d00', title: 'Low-Stress UI', desc: 'Minimizing color-coded stressors and noisy visual patterns typical in traditional suites.' },
                  { icon: BookOpen, color: '#9d4edd', title: 'ADHD Friendly', desc: 'Built to support executive function with clear breadcrumbs and visual focus-timers.' },
                  { icon: Brain, color: '#10b981', title: 'ND Accessibility', desc: 'A design language that prioritizes readability, spacing, and sensory-friendly interactions.' }
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-panel" 
                    style={{ padding: '3.5rem', textAlign: 'left', background: 'rgba(255,255,255,0.02)' }}
                  >
                     <item.icon color={item.color} style={{ marginBottom: '2rem' }} size={32} />
                     <h4 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: '#fff' }}>{item.title}</h4>
                     <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
                  </motion.div>
               ))}
            </div>
          </div>
      </section>
      {/* NEW: Manifesto Section */}
      <section className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
         <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="hero-pill-badge" style={{ marginBottom: '3rem' }}>✦ Our Manifesto</div>
            <h2 style={{ fontSize: '4.5rem', marginBottom: '4rem', color: '#fff', letterSpacing: '-2px' }}>A Space for<br/>Your Soul.</h2>
            
            <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto', padding: '6rem 4rem', background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))' }}>
               <p style={{ fontSize: '1.8rem', color: '#fff', lineHeight: '1.6', marginBottom: '5rem', fontWeight: 300, fontStyle: 'italic' }}>
                  "We reject the idea that productivity must be loud, aggressive, or anxiety-inducing. We believe that when your mind is at peace, your true potential emerges."
               </p>

               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem', textAlign: 'left' }}>
                  <div>
                     <h4 style={{ color: "var(--primary-light)", fontSize: '1.4rem', marginBottom: '1rem' }}>No Noise.</h4>
                     <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Every pixel on the screen serves a purpose. If it doesn't help you grow, it's not here.</p>
                  </div>
                  <div>
                     <h4 style={{ color: "#ff6d00", fontSize: '1.4rem', marginBottom: '1rem' }}>Total Privacy.</h4>
                     <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>A sanctuary isn't a sanctuary if someone is watching. Your data is your own.</p>
                  </div>
                  <div>
                     <h4 style={{ color: "#10b981", fontSize: '1.4rem', marginBottom: '1rem' }}>Human Rhythm.</h4>
                     <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>We build for the ebb and flow of human life, not the rigid logic of machines.</p>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>
    </>
  );
}
