import React from 'react';
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

interface PortfolioProps {
  onOpenTaskManager: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpenTaskManager }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 w-full"
    >
      <Navbar onOpenTaskManager={onOpenTaskManager} />
      
      <main className="container mx-auto px-4 py-24 md:px-8 max-w-7xl flex flex-col gap-32">
        <About />
        <Timeline />
        <Gaming />
        <Printing />
        <Engineering />
        <Media />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm font-mono border-t border-slate-800/50 mt-12 bg-black/20 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} SIEBE. All systems nominal.</p>
      </footer>
    </motion.div>
  );
};

export default Portfolio;