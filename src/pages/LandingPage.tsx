import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { AppStoreBadge, PlayStoreBadge } from '../components/Badges';
import { GraduationCap, Briefcase, Camera, Rocket, CheckCircle2, TrendingUp, Droplet } from 'lucide-react';

const landingData: Record<string, { title: string, subtitle: string, description: string, icon: any, color: string, glowClass: string, keyFeature: { title: string, desc: string, icon: any } }> = {
  'habit-tracker-for-students': {
    title: 'Focus Mastery for Students',
    subtitle: 'Stay on top of lectures, study habits, and consistent hydration.',
    description: 'Balancing school and life is a high-stakes game. Lunoo provides students with a unified dashboard to track study sessions, monitor daily water intake, and build life-long habits.',
    icon: GraduationCap,
    color: '#ff5a1f',
    glowClass: 'mockup-card-orange',
    keyFeature: { title: 'Study Flow Timer', desc: 'Integrated Pomodoro sessions to master your focus.', icon: Rocket }
  },
  'habit-tracker-for-entrepreneurs': {
    title: 'Financial Freedom for Founders',
    subtitle: 'Scale your business while mastering your personal cash flow.',
    description: 'Time and capital are your leverage. Lunoo serves as a high-performance personal bank & habit dashboard for entrepreneurs who need to track spending and manage busy routines.',
    icon: Rocket,
    color: '#9b2cff',
    glowClass: 'mockup-card-purple',
    keyFeature: { title: 'Budget Architecture', desc: 'Real-time expense tracking and budget projections.', icon: TrendingUp }
  },
  'daily-planner-for-professionals': {
    title: 'Daily Plan for High Performers',
    subtitle: 'Efficiency meets simplicity. Manage your career with Lunoo.',
    description: 'Transform your workflow into a "Digital Sanctum". Lunoo integrates task management and financial analysis to keep professionals at peak performance throughout the day.',
    icon: Briefcase,
    color: '#ff5a1f',
    glowClass: 'mockup-card-orange',
    keyFeature: { title: 'Unified Dashboard', desc: 'Everything you need to organize your professional life.', icon: CheckCircle2 }
  },
  'productivity-app-for-creators': {
    title: 'Dynamic Routines for Creators',
    subtitle: 'Fuel your creativity with consistent daily wellness.',
    description: 'Creativity happens when your mind is clear. Lunoo is a tailored optimization app for creators, offering mood check-ins, hydration tracking, and flexible task management.',
    icon: Camera,
    color: '#9b2cff',
    glowClass: 'mockup-card-purple',
    keyFeature: { title: 'Mood & Wellness', desc: 'Holistic logging to keep your creative energy high.', icon: Droplet }
  }
};

export default function LandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? landingData[slug] : null;

  if (!data) return <div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}><h1>Page Not Found</h1><Link to="/" className="btn-white">Go Home</Link></div>;

  const Icon = data.icon;
  const KeyIcon = data.keyFeature.icon;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      <section className="hero-wrapper" style={{ paddingBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="hero-pill-badge">
            <span style={{ color: "var(--text-light)" }}>✦</span> Persona Spotlight
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title"
        >
          {data.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-subtitle"
        >
          {data.subtitle}
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="badge-link">
              <AppStoreBadge style={{ height: '48px' }} />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.lunoo.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="badge-link"
            >
              <PlayStoreBadge style={{ height: '48px' }} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main content grid */}
      <section className="mockup-grid" style={{ marginBottom: '8rem' }}>
         <motion.div initial="hidden" animate="visible" variants={fadeUp} className={`mockup-card ${data.glowClass}`} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '4rem' }}>
            
            <div style={{ width: '80px', height: '80px', background: `rgba(255,255,255,0.05)`, borderRadius: '50%', margin: '0 auto 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${data.color}55`, boxShadow: `0 0 30px ${data.color}33` }}>
               <Icon size={40} color={data.color} />
            </div>
            
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 500, fontFamily: 'Inter', color: '#fff' }}>
               Why {slug?.split('-').pop()}s love Lunoo?
            </h3>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: '0 auto 3rem', maxWidth: '600px' }}>
               {data.description}
            </p>

            <div className="appointment-card" style={{ textAlign: 'left', borderColor: `rgba(255,255,255,0.1)`, maxWidth: '500px', margin: '0 auto' }}>
               <div className="profile-row" style={{ marginBottom: '0' }}>
                  <div style={{ background: `rgba(255,255,255,0.1)`, borderRadius: '12px', padding: '10px' }}>
                     <KeyIcon size={24} color={data.color} />
                  </div>
                  <div className="profile-info">
                     <h4 style={{ fontSize: '1rem' }}>{data.keyFeature.title}</h4>
                     <p>{data.keyFeature.desc}</p>
                  </div>
               </div>
            </div>
            
         </motion.div>
      </section>
    </>
  );
}
