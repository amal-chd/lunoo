import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle, Shield, CreditCard, Layout } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  { name: 'General', icon: HelpCircle },
  { name: 'Privacy', icon: Shield },
  { name: 'Payments', icon: CreditCard },
  { name: 'Design', icon: Layout }
];

const faqData = [
  {
    category: "General",
    question: "Is Lunoo really free?",
    answer: "Yes! Our core features—habit tracking, basic finance logging, and wellness checks—are free forever. We believe everyone deserves a digital sanctuary."
  },
  {
    category: "Privacy",
    question: "How does Lunoo protect my data?",
    answer: "Your privacy is our priority. We use local encryption and secure cloud sync. We never sell your data, and we don't track your activity for ads."
  },
  {
    category: "General",
    question: "Is it available on all devices?",
    answer: "Currently, Lunoo is optimized for iOS and Android. We are working on a web version and a desktop app for macOS and Windows."
  },
  {
    category: "Design",
    question: "What makes Lunoo 'neuro-inclusive'?",
    answer: "We design with ADHD and other neurodivergent minds in mind. This means low-stress UI, intentional spacing, visual focus timers, and flexible habit streaks that don't reset when you miss a day."
  },
  {
    category: "Payments",
    question: "Can I export my financial data?",
    answer: "Absolutely. Pro users can export their entire financial history and habit data as CSV or JSON at any time."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)' }}
      className="glass-panel" 
      style={{ marginBottom: '1rem', overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)' }} 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div style={{ padding: '1.8rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontSize: '1.1rem', margin: 0, color: isOpen ? 'var(--primary-light)' : '#fff', transition: 'color 0.3s ease' }}>{question}</h4>
        <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
           <ChevronDown size={20} color={isOpen ? 'var(--primary-light)' : 'var(--text-muted)'} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ padding: '0 2rem 2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}
          >
            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(search.toLowerCase()) || 
                         item.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="hero-wrapper" style={{ paddingBottom: '4rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
             <HelpCircle size={14} style={{ marginRight: '8px' }} /> Help Center
          </div>
        </motion.div>
        <h1 className="hero-title" style={{ fontSize: '4.5rem' }}>How can we help?</h1>
        <p className="hero-subtitle">Search for answers or browse categories below.</p>
        
        {/* Modern Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '600px', margin: '3rem auto 0', position: 'relative' }}
        >
          <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
          <input 
            type="text" 
            placeholder="Search documentation..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '1.5rem 1.5rem 1.5rem 60px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.1rem', outline: 'none' }}
          />
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="container" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveCategory("All")}
          className={activeCategory === "All" ? "glow-pill" : "glass-panel"}
          style={{ padding: '0.8rem 1.5rem', cursor: 'pointer', border: 'none', background: activeCategory === "All" ? 'var(--primary-light)' : 'rgba(255,255,255,0.05)', color: '#fff' }}
        >
          All Topics
        </button>
        {faqCategories.map(cat => (
          <button 
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            style={{ padding: '0.8rem 1.5rem', cursor: 'pointer', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', background: activeCategory === cat.name ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.02)', color: activeCategory === cat.name ? 'var(--primary-light)' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <cat.icon size={16} /> {cat.name}
          </button>
        ))}
      </section>

      <section className="container" style={{ padding: '0 2rem 10rem', maxWidth: '800px' }}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
             No results found for "{search}"
          </div>
        )}
        
        {/* Support CTA */}
        <div className="glass-panel" style={{ marginTop: '6rem', padding: '3.5rem', textAlign: 'center', border: '1px dashed rgba(255,255,255,0.1)', background: 'transparent' }}>
           <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Still need help?</h3>
           <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Can't find what you're looking for? Reach out to our human support team.</p>
           <a href="/contact" className="glow-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
              <MessageCircle size={18} /> Contact Support
           </a>
        </div>
      </section>
    </>
  );
}
