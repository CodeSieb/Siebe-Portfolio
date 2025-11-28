import React from 'react';
import { motion } from 'framer-motion';
import { Play, Terminal } from 'lucide-react';

interface IntroProps {
  onPlay: () => void;
  onOpenTerminal: () => void;
}

const Intro: React.FC<IntroProps> = ({ onPlay, onOpenTerminal }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neon-bg text-white"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative z-10 text-center flex flex-col items-center">
        {/* Name Animation */}
        <motion.h1
          initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-display text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]"
        >
          SIEBE
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-2 text-neon-cyan font-mono tracking-widest text-sm md:text-base uppercase"
        >
          System Ready // User Detected
        </motion.div>

        {/* Play Button */}
        <motion.button
          onClick={onPlay}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255,255,255)" }}
          whileTap={{ scale: 0.95 }}
          className="group mt-16 relative px-12 py-4 bg-transparent border-2 border-neon-cyan/50 text-neon-cyan font-display font-bold text-xl tracking-widest uppercase rounded-sm overflow-hidden transition-all hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Play className="w-5 h-5 fill-current" />
            Play
          </span>
          {/* Button slide effect */}
          <div className="absolute inset-0 bg-neon-cyan/20 transform -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full" />
        </motion.button>

        {/* Footer Area with Terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.5, duration: 2 }}
          className="absolute -bottom-32 md:-bottom-40 flex flex-col items-center gap-4"
        >
          <button 
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-green-500 border border-green-500/30 rounded bg-green-500/5 hover:bg-green-500/10 hover:border-green-500 transition-all"
          >
            <Terminal className="w-3 h-3" />
            <span>OPEN_TERMINAL_ACCESS</span>
          </button>
          
          <p className="text-xs text-slate-500 font-mono">
            v1.0.4 // PRESS START
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;