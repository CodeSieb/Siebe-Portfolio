import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import About from './sections/About';
import Timeline from './sections/Timeline';
import Gaming from './sections/Gaming';
import Media from './sections/Media';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Printing from './sections/Printing';
import Engineering from './sections/Engineering';
import Achievements from './sections/Achievements';
import Secret from './sections/Secret';

interface PortfolioProps {
  onOpenTaskManager: () => void;
  isHackerMode: boolean;
  onReset: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ 
  onOpenTaskManager, 
  isHackerMode,
  onReset
}) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'timeline', 'achievements', 'gaming', 'printing', 'engineering', 'media', 'projects', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-full"
    >
      <Navbar 
        onOpenTaskManager={onOpenTaskManager} 
        hideNav={isHackerMode} 
        activeSection={activeSection}
        isHackerMode={isHackerMode}
        onReset={onReset}
      />
      
      <main className="container mx-auto px-4 py-24 flex flex-col gap-32 md:px-8 max-w-7xl">
        {/* About is always rendered to show the Profile Icon transformation in Hacker Mode */}
        <About isHackerMode={isHackerMode} />

        {isHackerMode ? (
          /* In Hacker Mode, we only show About (modified) and the Secret logs */
          <Secret />
        ) : (
          /* Standard Portfolio Flow */
          <>
            <Timeline />
            <Achievements />
            <Gaming />
            <Printing />
            <Engineering />
            <Media />
            <Projects />
            <Contact />
          </>
        )}
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm font-mono border-t border-slate-800/50 mt-12 bg-black/20 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} SIEBE. All systems {isHackerMode ? 'compromised' : 'nominal'}.</p>
      </footer>
    </motion.div>
  );
};

export default Portfolio;