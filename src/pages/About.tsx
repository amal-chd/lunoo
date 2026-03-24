import { motion, type Variants } from 'framer-motion';
import { Zap, Globe, Users } from 'lucide-react';

export default function About() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      <section className="hero-wrapper" style={{ paddingBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
            <span style={{ color: "var(--text-light)" }}>✦</span> The Lunoo Story
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title"
          style={{ fontSize: '5rem' }}
        >
          Built for the<br/>mindful few.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-subtitle"
        >
          We set out to create more than just a tool. We built a philosophy —<br/>
          a Digital Sanctum where your growth is the only notification that matters.
        </motion.p>
      </section>

      {/* Philosophy Overlap */}
      <section className="container" style={{ padding: '8rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
           {[
             { icon: Users, title: 'The Community', color: '#ff6d00', desc: 'Born from a global community of neurodivergent thinkers and productivity enthusiasts.' },
             { icon: Globe, title: 'Distributed Trust', color: '#9d4edd', desc: 'Secure, local-first architecture that works offline and syncs across the globe.' },
             { icon: Zap, title: 'Pure Intent', color: '#10b981', desc: 'Zero ads, zero bloat, and zero hidden agendas. Just you and your goals.' }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="glass-panel" 
               style={{ padding: '3.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
             >
                <item.icon color={item.color} size={32} style={{ marginBottom: '2rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: '#fff' }}>{item.title}</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      <section className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
          <div className="mockup-card" style={{ padding: '6rem 4rem', background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }}>
            <h3 style={{ fontSize: '3rem', marginBottom: '3rem', fontWeight: 600, color: '#fff', letterSpacing: '-1.5px' }}>The Core Vision</h3>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '850px', margin: '0 auto 4rem' }}>
               "Most productivity software feels like a treadmill. Constant push, constant noise. We wanted to build a sanctuary—a tool that breathes with you, knows your rhythm, and steps out of the way when you're in the zone."
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
               <div style={{ width: '40px', height: '1px', background: 'var(--primary-light)' }} />
               <span style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 500 }}>Team Lunoo</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section style={{ padding: '4rem 2rem 12rem', background: 'rgba(255,255,255,0.01)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '6rem', color: '#fff' }}>Trust in Motion.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                {[
                  { label: 'Active Users', value: '50,000+', color: '#ff6d00' },
                  { label: 'Habits Tracked', value: '12M+', color: '#9d4edd' },
                  { label: 'Countries Served', value: '150+', color: '#10b981' },
                  { label: 'Design Awards', value: '12', color: 'var(--primary-light)' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                    viewport={{ once: true }}
                    className="glass-panel" 
                    style={{ padding: '3.5rem', background: 'rgba(255,255,255,0.03)' }}
                  >
                     <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{stat.label}</p>
                     <h3 style={{ fontSize: '4rem', color: stat.color, fontWeight: 900, letterSpacing: '-2px' }}>{stat.value}</h3>
                  </motion.div>
                ))}
            </div>
         </div>
      </section>
    </>
  );
}
