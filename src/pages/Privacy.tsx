import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <>
      <section className="container" style={{ paddingTop: '10rem', paddingBottom: '8rem', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '4rem' }}>Last updated: March 24, 2026</p>
        </motion.div>

        <motion.div 
          className="mockup-card" 
          style={{ padding: '4rem 3rem', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>1. Introduction</h2>
          <p style={{ marginBottom: '2.5rem' }}>
            At Lunoo, we believe privacy is a fundamental human right. This Privacy Policy explains how we protect your data. Unlike legacy apps, we minimize data collection to ensure your routines remain yours alone.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>2. Data Collection</h2>
          <p style={{ marginBottom: '1.2rem' }}>We only collect what is strictly necessary:</p>
          <ul style={{ marginBottom: '2.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.8rem' }}><strong>Account Info</strong>: Email and name for secure syncing.</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>Secure Content</strong>: Habits, tasks, and finance entries are stored with industry-standard encryption.</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>Usage Metrics</strong>: Aggregated, anonymous data to improve app performance.</li>
          </ul>

          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>3. Data Use</h2>
          <p style={{ marginBottom: '2.5rem' }}>
            Your data is used solely to provide and improve Lunoo. We do not sell your data. Period.
          </p>

          <div style={{ background: 'rgba(255,109,0,0.05)', padding: '2rem', borderRadius: '16px', marginTop: '3rem', border: '1px solid rgba(255,109,0,0.1)' }}>
             <p style={{ color: '#ff6d00', margin: 0 }}>If you have questions, reach out to <a href="mailto:privacy@lunoo.app" style={{ color: '#ff6d00', fontWeight: 700, textDecoration: 'underline' }}>privacy@lunoo.app</a></p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
