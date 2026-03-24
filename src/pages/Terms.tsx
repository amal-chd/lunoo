import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <>
      <section className="container" style={{ paddingTop: '10rem', paddingBottom: '8rem', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>Terms of Service</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '4rem' }}>Last updated: March 24, 2026</p>
        </motion.div>

        <motion.div 
          className="mockup-card" 
          style={{ padding: '4rem 3rem', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '2.5rem' }}>
            By accessing and using Lunoo, you agree to these Terms of Service. If you do not agree, please do not use our services. Lunoo reserves the right to update these terms as needed.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>2. Use of Service</h2>
          <ul style={{ marginBottom: '2.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li style={{ marginBottom: '0.8rem' }}>You are responsible for maintaining the confidentiality of your account.</li>
            <li style={{ marginBottom: '0.8rem' }}>You agree not to violate any laws or regulations while using the app.</li>
            <li style={{ marginBottom: '0.8rem' }}>You will not attempt to gain unauthorized access to our systems.</li>
          </ul>

          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>3. Subscriptions</h2>
          <p style={{ marginBottom: '2.5rem' }}>
            Payments are managed through the Apple App Store and Google Play Store. Subscriptions recur unless canceled through your platform settings.
          </p>

          <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>4. Data & Privacy</h2>
          <p style={{ marginBottom: '2.5rem' }}>
            Your data is yours. We claim no intellectual property rights over the content you input into the app. For more details, see our Privacy Policy.
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', marginTop: '3rem' }}>
             <p>If you have questions, reach out to <a href="mailto:legal@lunoo.app" style={{ color: '#ff6d00', fontWeight: 600 }}>legal@lunoo.app</a></p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
