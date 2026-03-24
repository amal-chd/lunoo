import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="hero-wrapper" style={{ paddingBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
             <MessageSquare size={14} style={{ marginRight: '8px' }} /> Support Sanctuaries
          </div>
        </motion.div>
        <h1 className="hero-title" style={{ fontSize: '4.5rem' }}>We're here for you.</h1>
        <p className="hero-subtitle">Whether you're a user, a partner, or just curious, we want to hear from you. Expect a thoughtful response within 24 hours.</p>
      </section>

      <section className="container" style={{ padding: '4rem 2rem 10rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          
          {/* Contact Details */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Ask anything.</h2>
             <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3.5rem', lineHeight: '1.6' }}>
               Our team actually reads every message. We're committed to building the best possible experience for our community.
             </p>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center', transition: 'transform 0.3s ease', cursor: 'default' }}>
                   <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '18px', borderRadius: '18px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                      <Mail color="var(--primary-light)" size={28} />
                   </div>
                   <div>
                      <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.4rem 0' }}>Email Us</h4>
                      <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1.1rem' }}>sanctuary@lunoo.app</p>
                   </div>
                </div>

                <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                   <div style={{ background: 'rgba(255, 109, 0, 0.1)', padding: '18px', borderRadius: '18px', border: '1px solid rgba(255, 109, 0, 0.2)' }}>
                      <MapPin color="#ff6d00" size={28} />
                   </div>
                   <div>
                      <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.4rem 0' }}>Our Base</h4>
                      <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '1.1rem' }}>Distributed & Remote Worldwide</p>
                   </div>
                </div>

                {/* Social Links */}
                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                   <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Social Sanctuaries</h4>
                   <div style={{ display: 'flex', gap: '1rem' }}>
                      {[
                        { icon: Twitter, href: "#", color: "#1DA1F2" },
                        { icon: Instagram, href: "#", color: "#E4405F" },
                        { icon: Linkedin, href: "#", color: "#0A66C2" }
                      ].map((social, i) => (
                        <a 
                          key={i} 
                          href={social.href} 
                          className="icon-button" 
                          style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.05)' }}
                        >
                          <social.icon size={20} color={social.color} />
                        </a>
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>

          {/* New Modern Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} 
            className="glass-panel" 
            style={{ padding: '4.5rem', background: 'rgba(255,255,255,0.01)', position: 'relative', overflow: 'hidden' }}
          >
             {/* Background glow in form */}
             <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '200px', height: '200px', background: 'var(--primary-light)', filter: 'blur(120px)', opacity: 0.05, pointerEvents: 'none' }} />
             
             <form onSubmit={(e) => e.preventDefault()} style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                   <div>
                      <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.5px' }}>NAME</label>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '15px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                      />
                   </div>
                   <div>
                      <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.5px' }}>EMAIL</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '15px', color: '#fff', fontSize: '1rem', outline: 'none' }}
                      />
                   </div>
                </div>
                
                <div style={{ marginBottom: '2.5rem' }}>
                   <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.5px' }}>SUBJECT</label>
                   <select style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '15px', color: '#fff', fontSize: '1rem', outline: 'none', appearance: 'none' }}>
                      <option style={{ background: '#000' }}>General Inquiry</option>
                      <option style={{ background: '#000' }}>Feature Suggestion</option>
                      <option style={{ background: '#000' }}>Support Request</option>
                      <option style={{ background: '#000' }}>Partnership</option>
                   </select>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                   <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.5px' }}>MESSAGE</label>
                   <textarea 
                      placeholder="Tell us what's on your mind..." 
                      rows={6}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.2rem', borderRadius: '15px', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'none', lineHeight: '1.6' }}
                   ></textarea>
                </div>

                <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="glow-pill" 
                   style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600 }}
                >
                   <Send size={20} /> Send sanctified message
                </motion.button>
             </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}
