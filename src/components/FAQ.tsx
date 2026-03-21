import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Is Lunoo free to use?",
    answer: "Yes! Lunoo offers a generous free tier that includes basic habit tracking and task management. Our Pro plan unlocks advanced insights, unlimited habits, and expense tracking."
  },
  {
    question: "How does the habit streak system work?",
    answer: "Every time you complete a habit on its scheduled day, your streak increases. Missing a day resets it, but don't worry—you can set 'skip' days for when you need a break without losing progress."
  },
  {
    question: "Can I sync my data across devices?",
    answer: "Absolutely. When you create an account, your habits, tasks, and routines are encrypted and synced across all your iOS and Android devices in real-time."
  },
  {
    question: "Is my financial data safe?",
    answer: "We take privacy seriously. Your expense tracking data is stored locally and synced only via secure, encrypted channels. We never sell your data to third parties."
  },
  {
    question: "Do you offer a student discount?",
    answer: "Yes! We believe students should have access to the best productivity tools. Reach out to support with your student ID for 50% off Lunoo Pro."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Everything you need to know about mastering your routine with Lunoo.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqData.map((item, index) => (
          <div key={index} className="glass-panel" style={{ overflow: 'hidden', padding: '0' }}>
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{ width: '100%', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', textAlign: 'left', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-main)' }}
            >
              {item.question}
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <ChevronDown size={24} color="var(--primary)" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ padding: '0 2rem 1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
