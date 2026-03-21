import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div style={{ paddingBottom: '10rem', position: 'relative' }}>
      <div className="blob-shape blob-1" style={{ top: '10%', right: '-10%' }}></div>
      
      <section className="container" style={{ paddingTop: '16rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '2rem' }}>Privacy Policy.</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Last updated: March 22, 2026</p>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '6rem 4rem', marginTop: '6rem', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1.1rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>1. Introduction</h2>
            <p style={{ marginBottom: '3rem' }}>
              At Lunoo, we believe privacy is a fundamental human right. This Privacy Policy explains how we collect, use, and protect your data. Unlike many other productivity apps, we minimize data collection to ensure your routines remain yours alone.
            </p>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>2. Data We Collect</h2>
            <p style={{ marginBottom: '1.5rem' }}>We only collect data that is strictly necessary for the app's functionality:</p>
            <ul style={{ marginBottom: '3rem', paddingLeft: '2rem' }}>
              <li style={{ marginBottom: '1rem' }}><strong>Account Information</strong>: Your email address and display name for account syncing and security.</li>
              <li style={{ marginBottom: '1rem' }}><strong>App Content</strong>: Your habits, tasks, and financial entries are stored securely to provide syncing across your devices.</li>
              <li style={{ marginBottom: '1rem' }}><strong>Usage Data</strong>: Aggregated, non-identifiable usage statistics to help us improve the app experience.</li>
            </ul>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>3. How We Use Data</h2>
            <p style={{ marginBottom: '3rem' }}>
              Your data is used solely to provide and improve Lunoo. We do not sell your data to third parties. We do not use your private entries for advertising or profiling.
            </p>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>4. Data Security</h2>
            <p style={{ marginBottom: '3rem' }}>
              We use industry-standard encryption to protect your data both in transit and at rest. Access to your personal data is restricted to employees who need it to provide support and technical maintenance.
            </p>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>5. Your Rights</h2>
            <p style={{ marginBottom: '3rem' }}>
              You have the right to access, export, and delete your data at any time directly through the app settings. If you delete your account, all your personal data will be permanently removed from our servers within 30 days.
            </p>
            
            <div style={{ background: 'rgba(0,0,0,0.03)', padding: '3rem', borderRadius: '24px', marginTop: '6rem' }}>
               <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Contact Us</h3>
               <p>If you have any questions about our privacy practices, please contact us at <a href="mailto:privacy@lunoo.app" style={{ color: 'var(--primary)', fontWeight: 600 }}>privacy@lunoo.app</a></p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
