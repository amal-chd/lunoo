import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="container" style={{ padding: '6rem 0' }}>
      <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary) 0%, #4a59d8 100%)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1rem' }}>Get the 1% Better Newsletter</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Bi-weekly tips on productivity, neuro-inclusive habits, and mastering your routine. Join 5,000+ readers.
          </p>

          {!subscribed ? (
            <form 
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                style={{ flex: 1, minWidth: '250px', padding: '1.2rem 1.5rem', borderRadius: 'var(--radius-md)', border: 'none', fontSize: '1.1rem' }}
              />
              <button 
                className="btn btn-primary" 
                style={{ background: 'var(--text-main)', padding: '1.2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700 }}
              >
                Join Now <Send size={20} />
              </button>
            </form>
          ) : (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>
               <CheckCircle2 size={32} /> You're on the list!
            </motion.div>
          )}
        </div>
        
        {/* Background blobs for the newsletter section */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'var(--secondary)', opacity: 0.2, borderRadius: '50%', filter: 'blur(80px)' }}></div>
      </div>
    </section>
  );
}
