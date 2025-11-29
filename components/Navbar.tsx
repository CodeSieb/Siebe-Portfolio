import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Terminal, Power } from 'lucide-react';

interface NavbarProps {
  onOpenTaskManager: () => void;
  hideNav?: boolean;
  activeSection?: string;
  isHackerMode?: boolean;
  onReset: () => void;
}

const navItems = ['About', 'Timeline', 'Gaming', 'Printing', 'Engineering', 'Media', 'Projects', 'Contact'];

const Navbar: React.FC<NavbarProps> = ({ 
  onOpenTaskManager, 
  hideNav = false, 
  activeSection = 'home',
  isHackerMode = false,
  onReset
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getFilepath = () => {
    if (isHackerMode) {
      return activeSection === 'home' ? '/root' : `/root/${activeSection}_obfuscated`;
    }
    return activeSection === 'home' ? '~/Siebe' : `~/Siebe/${activeSection}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <motion.div
        layout
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`pointer-events-auto backdrop-blur-md border rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors duration-300 overflow-hidden ${
          isHackerMode 
            ? 'bg-black/95 border-green-900 shadow-green-900/20' 
            : 'bg-slate-900/90 border-slate-700/50'
        }`}
        style={{ height: '50px' }} // Fixed height to prevent vertical layout shifts
      >
        <AnimatePresence mode="popLayout">
          {/* Collapsed State: Just Filepath */}
          {!isHovered && (
            <motion.div 
              key="collapsed"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center px-6 h-full whitespace-nowrap"
            >
              <div className={`flex items-center gap-2 ${isHackerMode ? 'text-green-500' : 'text-slate-400'}`}>
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-sm tracking-tight">{getFilepath()}</span>
                {!isHackerMode && <span className="animate-pulse w-2 h-4 bg-neon-cyan block ml-1" />}
              </div>
            </motion.div>
          )}

          {/* Expanded State: Full Navigation */}
          {isHovered && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center px-2 h-full gap-2 whitespace-nowrap"
            >
              {/* Exit/Power Button */}
              <button
                onClick={onReset}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-500/20 hover:text-red-500 text-slate-500 transition-colors"
                title="Return to Start Screen"
              >
                <Power className="w-4 h-4" />
              </button>

              <div className="w-px h-4 bg-slate-700 mx-1" />

              {/* Nav Links */}
              <div className="flex items-center gap-4 px-2">
                {!hideNav ? (
                  navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-xs font-medium text-slate-400 hover:text-neon-cyan transition-colors uppercase tracking-wider relative group/item"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan transition-all duration-300 group-hover/item:w-full" />
                    </button>
                  ))
                ) : (
                  <div className="text-xs font-mono text-red-500 tracking-widest px-4">
                    ACCESS_DENIED // LOCKDOWN_MODE
                  </div>
                )}
              </div>

              <div className="w-px h-4 bg-slate-700 mx-1" />

              {/* Task Manager Toggle */}
              <button 
                onClick={onOpenTaskManager}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                  isHackerMode 
                    ? 'bg-black text-green-500 border-green-800 hover:border-green-500' 
                    : 'bg-slate-800 hover:bg-slate-700 text-neon-cyan border-slate-700'
                }`}
              >
                <Activity className="w-3 h-3" />
                <span className="text-[10px] font-bold">SYS_MON</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;