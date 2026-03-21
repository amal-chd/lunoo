import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div style={{ paddingBottom: '10rem', position: 'relative' }}>
      <div className="blob-shape blob-2" style={{ top: '10%', left: '-10%' }}></div>
      
      <section className="container" style={{ paddingTop: '16rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(30px, 8vw, 5rem)', marginBottom: '2rem' }}>Terms of Service.</h1>
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
            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '3rem' }}>
              By accessing and using Lunoo, you agree to these Terms of Service. If you do not agree, please do not use our services. Lunoo reserves the right to update these terms as needed, and we will notify you of any material changes.
            </p>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>2. Use of Service</h2>
            <p style={{ marginBottom: '1.5rem' }}>You may use Lunoo for personal, non-commercial purposes. You are responsible for maintaining the confidentiality of your account information. You agree not to:</p>
            <ul style={{ marginBottom: '3rem', paddingLeft: '2rem' }}>
              <li style={{ marginBottom: '1rem' }}>Violate any laws or regulations while using the app.</li>
              <li style={{ marginBottom: '1rem' }}>Attempt to gain unauthorized access to any part of our systems.</li>
              <li style={{ marginBottom: '1rem' }}>Use the service in any way that could damage or interfere with its performance.</li>
            </ul>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>3. Subscriptions & Payments</h2>
            <p style={{ marginBottom: '3rem' }}>
              While the basic features of Lunoo are free, we offer premium "Pro" features that require a subscription. Payments are managed through the Apple App Store and Google Play Store. Subscriptions recur unless canceled through your platform settings. We are not responsible for any platform processing errors.
            </p>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>4. Content Ownership</h2>
            <p style={{ marginBottom: '3rem' }}>
              You retain full ownership of all content you create in Lunoo. We do not claim any intellectual property rights over your entries. By using the app, you grant us a limited license solely for the purpose of storing and syncing your data across your devices.
            </p>

            <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '2rem' }}>5. Limitation of Liability</h2>
            <p style={{ marginBottom: '3rem' }}>
              Lunoo is provided "as is" without any warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service, including data loss or business interruption.
            </p>
            
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '6rem', marginTop: '6rem' }}>
               <h3 style={{ color: 'var(--text-main)', marginBottom: '1.5rem' }}>Termination</h3>
               <p style={{ marginBottom: '3rem' }}>
                 We reserve the right to suspend or terminate accounts that violate our terms or for any other reason, at our sole discretion. You may delete your account at any time through the app settings to terminate your use of the service.
               </p>
               <p>If you have any questions about these terms, please contact us at <a href="mailto:support@lunoo.app" style={{ color: 'var(--primary)', fontWeight: 600 }}>support@lunoo.app</a></p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
