import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

interface NavbarProps {
  onOpenTaskManager: () => void;
}

const navItems = ['About', 'Timeline', 'Gaming', 'Printing', 'Engineering', 'Media', 'Projects', 'Contact'];

const Navbar: React.FC<NavbarProps> = ({ onOpenTaskManager }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center py-6 pointer-events-none"
    >
      <div className="pointer-events-auto backdrop-blur-md bg-slate-900/60 border border-slate-700/50 rounded-full pl-6 pr-2 py-2 flex items-center gap-4 md:gap-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-[95vw]">
        
        <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-xs font-medium text-slate-400 hover:text-neon-cyan transition-colors uppercase tracking-wider relative group whitespace-nowrap py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-700 hidden md:block" />

        {/* Task Manager Toggle */}
        <button 
          onClick={onOpenTaskManager}
          className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-neon-cyan rounded-full border border-slate-700 transition-all hover:shadow-[0_0_10px_rgba(0,243,255,0.2)] group"
          title="Open System Monitor"
        >
          <Activity className="w-4 h-4 group-hover:animate-pulse" />
          <span className="text-[10px] font-bold hidden md:inline">SYS_MON</span>
        </button>

      </div>
    </motion.nav>
  );
};

export default Navbar;