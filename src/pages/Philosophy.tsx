import { BookOpen, Sparkles, Brain, Heart, Eye } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export default function Philosophy() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div style={{ paddingBottom: '10rem', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Blobs */}
      <div className="blob-shape blob-1" style={{ top: '10%', right: '-10%', width: '600px', height: '600px' }}></div>
      <div className="blob-shape blob-2" style={{ bottom: '10%', left: '-10%', width: '500px', height: '500px' }}></div>

      <section className="container" style={{ paddingTop: '16rem', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h1 className="hero-title" style={{ maxWidth: '1000px', margin: '0 auto', fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: '0.9' }}>
            Built for <span className="gradient-text">every type of mind.</span>
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginTop: '3rem', maxWidth: '700px', margin: '3rem auto 0', lineHeight: '1.6' }}>
            Traditional productivity tools are built for one type of thinker. Lunoo is built for the rest of us.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Points */}
      <section className="container section-padding" style={{ marginTop: '5rem' }}>
        <motion.div 
          className="glass-panel" 
          style={{ padding: '8rem 6rem', borderRadius: '48px', position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '1.5rem', borderRadius: '24px' }}>
                   <Brain size={40} color="var(--primary)" />
                </div>
                <h2 style={{ fontSize: '3rem' }}>The Dopamine Loop.</h2>
              </div>
              <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Most apps use bright reds, aggressive notifications, and "shaming" reminders to get you to act. For many neuro-diverse minds, this causes immediate burnout. Lunoo uses <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>Cool-Focus design</span>—soft blues, purples, and gentle nudges that encourage action without the underlying anxiety.
              </p>
            </div>

            <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '6rem 0' }}></div>

            <div style={{ marginBottom: '8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
                <div style={{ background: 'var(--secondary-light)', padding: '1.5rem', borderRadius: '24px' }}>
                   <Eye size={40} color="var(--secondary)" />
                </div>
                <h2 style={{ fontSize: '3rem' }}>Visual Clarity.</h2>
              </div>
              <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                We believe in "One Thing at a Time". Our interface is stripped of unnecessary clutter. By using glassmorphism and depth, we help your brain distinguish between what is urgent and what is simply background noise.
              </p>
            </div>

            <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '6rem 0' }}></div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
                <div style={{ background: 'var(--accent-green-light)', padding: '1.5rem', borderRadius: '24px' }}>
                   <Heart size={40} color="var(--accent-green)" />
                </div>
                <h2 style={{ fontSize: '3rem' }}>Kind Productivity.</h2>
              </div>
              <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Life isn't a straight line. Lunoo is designed to be flexible. If you miss a day, we don't punish you with red exclamation marks. We offer gentle encouragement to step back into your flow whenever you're ready.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scientific Foundation */}
      <section className="container section-padding">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h3 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Rooted in Science.</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto' }}>Developed with insights from psychologists and neuro-diversity advocates.</p>
        </div>

        <motion.div 
          variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}
        >
          <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '3.5rem' }}>
             <h4 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <Sparkles size={24} color="var(--primary)" /> Low-Stress UI
             </h4>
             <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Reducing cognitive load by minimizing color-coded stressors and noisy visual patterns typical in "productivity" suites.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '3.5rem' }}>
             <h4 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <BookOpen size={24} color="var(--secondary)" /> ADHD-Friendly
             </h4>
             <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Built to support executive function with clear breadcrumbs, visual tasks, and focus-timers that actually work.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '3.5rem' }}>
             <h4 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <Eye size={24} color="var(--accent-green)" /> ND-Accessibility
             </h4>
             <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>A design language that prioritizes readability, spacing, and sensory-friendly interactions for all users.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
