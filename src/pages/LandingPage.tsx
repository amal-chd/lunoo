import { useParams, Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { GraduationCap, Briefcase, Camera, Rocket, CheckCircle } from 'lucide-react';
import { AppStoreBadge, PlayStoreBadge } from '../components/Badges';

const landingData: Record<string, { title: string, subtitle: string, description: string, icon: any, color: string }> = {
  'habit-tracker-for-students': {
    title: 'The Best habit tracker for students',
    subtitle: 'Stay on top of lectures, study habits, and personal growth.',
    description: 'Balancing school and life is hard. Lunoo is the ultimate habit tracker app for students, helping you manage study sessions, track hydration, and maintain consistent routines.',
    icon: GraduationCap,
    color: 'var(--primary)'
  },
  'habit-tracker-for-entrepreneurs': {
    title: 'Precision habit tracker for entrepreneurs',
    subtitle: 'Scale your business by mastering your daily routine.',
    description: 'Time is your most valuable asset. Lunoo serves as a high-performance productivity app for entrepreneurs who need to track deep work habits and manage busy schedules.',
    icon: Rocket,
    color: 'var(--secondary)'
  },
  'daily-planner-for-professionals': {
    title: 'Pro-grade daily planner for professionals',
    subtitle: 'Efficiency meets simplicity. Manage your career with Lunoo.',
    description: 'Transform your workflow with a professional daily planner app. Lunoo integrates task management and habit tracking to keep you at peak performance throughout the day.',
    icon: Briefcase,
    color: 'var(--accent-green)'
  },
  'productivity-app-for-creators': {
    title: 'The #1 productivity app for creators',
    subtitle: 'Fuel your creativity with consistent daily routines.',
    description: 'Creativity happens when you make space for it. Lunoo is a tailored productivity app for creators, offering visual habit tracking and flexible task management for your artistic process.',
    icon: Camera,
    color: 'var(--accent-orange, #ff9f43)'
  }
};

export default function LandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? landingData[slug] : null;

  if (!data) return <div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}><h1>Page Not Found</h1><Link to="/" className="btn btn-primary">Go Home</Link></div>;

  const Icon = data.icon;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div style={{ paddingTop: '10rem' }}>
      <div className="blob-shape blob-1" style={{ opacity: 0.1 }}></div>
      
      <section className="container" style={{ textAlign: 'center', marginBottom: '8rem' }}>
         <motion.div initial="hidden" animate="visible" variants={fadeUp}>
           <div style={{ width: '100px', height: '100px', background: data.color, borderRadius: '30px', margin: '0 auto 3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', boxShadow: `0 20px 40px ${data.color}33` }}>
              <Icon size={50} />
           </div>
           
           <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '2rem', lineHeight: '1.2' }}>{data.title}</h1>
           <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: '1.6' }}>{data.subtitle}</p>
           
           <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <a href="#"><AppStoreBadge style={{ height: '56px' }} /></a>
             <a href="#"><PlayStoreBadge style={{ height: '56px' }} /></a>
           </div>
         </motion.div>
      </section>

      <section style={{ padding: '8rem 0', background: 'var(--bg-surface)' }}>
         <div className="container">
            <div className="feature-grid">
               <div className="feature-text">
                  <h2 style={{ fontSize: '3rem' }}>Why {slug?.replace(/-/g, ' ')}?</h2>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{data.description}</p>
                  
                  <ul style={{ marginTop: '2.5rem', listStyle: 'none', padding: 0 }}>
                     <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                        <CheckCircle color="var(--accent-green)" /> Optimized daily habit tracker
                     </li>
                     <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                        <CheckCircle color="var(--accent-green)" /> Visual daily planner app interface
                     </li>
                     <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                        <CheckCircle color="var(--accent-green)" /> Seamless task manager integration
                     </li>
                  </ul>
               </div>
               
               <div className="feature-image-box" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                  <Icon size={180} color={data.color} opacity={0.2} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                  <div className="glass-panel" style={{ padding: '3rem', position: 'relative', zIndex: 1 }}>
                     <h3 style={{ fontSize: '2rem' }}>The only <br/> productivity app <br/> you need.</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
         <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem' }}>Ready to transform your routine?</h2>
         <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>Download Lunoo now and join the community of winners.</p>
         <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#"><AppStoreBadge style={{ height: '60px' }} /></a>
            <a href="#"><PlayStoreBadge style={{ height: '60px' }} /></a>
         </div>
      </section>
    </div>
  );
}
