import { motion, type Variants } from 'framer-motion';
import { Check, Zap, Rocket, Shield } from 'lucide-react';

export default function Pricing() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Fundamental growth tools for every mind.",
      features: ["Unlimited Habits Tracker", "Daily Hydration Monitoring", "Basic Task Management", "Mood Check-ins", "Standard Focus Timer"],
      button: "Get Started",
      accent: "#ff6d00",
      highlight: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "The complete Digital Sanctum experience.",
      features: [
        "Everything in Free", 
        "Unified Financial Suite", 
        "CSV Data Export", 
        "Visual Insight Heatmaps", 
        "Custom Focus Sessions", 
        "Priority Syncing", 
        "Early Beta Access"
      ],
      button: "Try Pro",
      accent: "#9d4edd",
      highlight: true
    },
    {
      name: "Lifetime",
      price: "$99",
      period: "/once",
      description: "A lifetime commitment to your growth.",
      features: ["All Pro features forever", "Exclusive Lunoo Badge", "Direct Support Channel", "Founding Member Status", "Offline Mode Access"],
      button: "Claim Lifetime",
      accent: "#10b981",
      highlight: false
    }
  ];

  return (
    <>
      <section className="hero-wrapper" style={{ paddingBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
            <span style={{ color: "var(--text-light)" }}>✦</span> Pricing & Plans
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title"
        >
          Choose your<br/>path to mastery.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-subtitle"
        >
          Simple, transparent pricing. No dark patterns, no hidden fees.<br/>
          Just the tools you need to build your best self.
        </motion.p>
      </section>

      <section className="mockup-grid" style={{ marginBottom: '8rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', padding: '0 2rem', gap: '2rem' }}>
         {plans.map((plan, i) => (
           <motion.div 
             key={plan.name}
             initial="hidden" 
             whileInView="visible" 
             variants={fadeUp} 
             viewport={{ once: true }}
             transition={{ delay: i * 0.1, duration: 0.6 }}
             className={`mockup-card ${plan.highlight ? 'mockup-card-purple' : plan.accent === '#ff6d00' ? 'mockup-card-orange' : ''}`}
             style={{ 
               padding: '3rem 2rem', 
               display: 'flex', 
               flexDirection: 'column', 
               background: plan.highlight ? 'rgba(155, 44, 255, 0.05)' : 'rgba(255,255,255,0.02)',
               border: plan.highlight ? '1px solid rgba(155, 44, 255, 0.3)' : '1px solid rgba(255,255,255,0.05)',
               boxShadow: plan.highlight ? '0 20px 60px rgba(155, 44, 255, 0.15)' : 'none'
             }}
           >
              <div style={{ marginBottom: '2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: plan.accent, marginBottom: '0.5rem' }}>
                    {plan.name === 'Free' && <Shield size={18} />}
                    {plan.name === 'Pro' && <Zap size={18} />}
                    {plan.name === 'Lifetime' && <Rocket size={18} />}
                    <h3 style={{ margin: 0, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{plan.name}</h3>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                    <h2 style={{ fontSize: '3.5rem', margin: 0, fontWeight: 700 }}>{plan.price}</h2>
                    <span style={{ color: 'var(--text-muted)' }}>{plan.period}</span>
                 </div>
                 <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: '1.5' }}>{plan.description}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, marginBottom: '2.5rem' }}>
                 {plan.features.map(feature => (
                   <div key={feature} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', fontSize: '0.95rem', color: '#fff' }}>
                      <Check size={16} color={plan.accent} style={{ flexShrink: 0 }} />
                      <span>{feature}</span>
                   </div>
                 ))}
              </div>

              <button 
                className={`glow-pill ${plan.highlight ? '' : 'glow-pill-outline'}`}
                style={{ 
                  width: '100%', 
                  background: plan.highlight ? `linear-gradient(90deg, ${plan.accent}, #c77dff)` : 'transparent',
                  borderColor: plan.accent,
                  color: '#fff'
                }}
              >
                 {plan.button}
              </button>
           </motion.div>
         ))}
      </section>

      <section style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
         <p>Prices shown are in USD. Local taxes may apply. 14-day money-back guarantee on all paid plans.</p>
      </section>
    </>
  );
}
