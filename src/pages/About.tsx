import { Heart, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div style={{ paddingBottom: '10rem', position: 'relative' }}>
      <div className="blob-shape blob-1" style={{ top: '5%', left: '-10%' }}></div>
      <div className="blob-shape blob-3" style={{ bottom: '10%', right: '-10%' }}></div>

      <section className="about-hero" style={{ paddingTop: '16rem', paddingBottom: '6rem', textAlign: 'center' }}>
         <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
           <h1 className="hero-title" style={{ maxWidth: '1000px', margin: '0 auto', fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: '1' }}>
             Built for <span className="gradient-text">every type of mind.</span>
           </h1>
         </motion.div>
      </section>

      <section className="container">
        <motion.div 
           initial="hidden" animate="visible" variants={fadeUp}
           className="glass-panel" style={{ padding: '6rem 4rem', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,0.8)' }}
        >
           <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.6rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '3rem', lineHeight: '1.4' }}>
                Lunoo started as a small personal project in a bedroom, driven by a simple question: "Why is most software built for only one way of thinking?"
              </p>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem', lineHeight: '1.8' }}>
                We noticed that traditional planners and lists were often way too rigid, causing more stress than support. We set out to build something that honors different types of minds. Inspired by the principles of neuroinclusivity, Lunoo uses visual cues and soft focus to make getting things done feel completely natural.
              </p>
              
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.2)', marginBottom: '8rem' }}>
                <img src="/screenshots/profile.png" alt="A look into Lunoo" style={{ width: '100%', display: 'block' }} />
              </motion.div>
           </div>
           
           <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '4rem 0' }}></div>

           <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <h3 style={{ fontSize: '3rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Our core values.</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>What drives our roadmap every single day.</p>
           </div>

           <motion.div 
              variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}
           >
              <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
                 <div style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #ff8fa3 100%)', width: '90px', height: '90px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 15px 30px rgba(255,107,139,0.3)' }}>
                    <ShieldCheck size={40} color="#fff" />
                 </div>
                 <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Privacy first.</h4>
                 <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Your routines are yours alone. We don't track you. Period.</p>
              </motion.div>

              <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
                 <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', width: '90px', height: '90px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 15px 30px rgba(92,111,255,0.3)' }}>
                    <Users size={40} color="#fff" />
                 </div>
                 <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Community Scale.</h4>
                 <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Sustaining thousands of neuro-diverse users worldwide daily.</p>
              </motion.div>

              <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
                 <div style={{ background: 'linear-gradient(135deg, var(--accent-green) 0%, #0093e9 100%)', width: '90px', height: '90px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 15px 30px rgba(0,210,138,0.3)' }}>
                    <Heart size={40} color="#fff" />
                 </div>
                 <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Neuro-inclusive.</h4>
                 <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Digital tools specifically built for every single type of mind.</p>
              </motion.div>
           </motion.div>
           
           <div style={{ textAlign: 'center', marginTop: '10rem' }}>
              <Link to="/features" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.3rem' }}>
                 See how it works <ArrowRight size={24} style={{ marginLeft: '1rem' }} />
              </Link>
           </div>
        </motion.div>
      </section>
    </div>
  );
}
