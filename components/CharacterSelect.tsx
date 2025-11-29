import React from 'react';
import { motion } from 'framer-motion';
import { User, Car, ArrowRight } from 'lucide-react';
import NeonCard from './ui/NeonCard';

interface CharacterSelectProps {
  onSelect: (mode: 'recruiter' | 'drifter') => void;
}

const CharacterSelect: React.FC<CharacterSelectProps> = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neon-bg p-4">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center"
      >
        SELECT <span className="text-neon-cyan">PLAYER</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-5xl justify-center items-stretch">
        
        {/* Option 1: The Recruiter */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <div 
            onClick={() => onSelect('recruiter')}
            className="group cursor-pointer h-full relative"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
             <div className="relative h-full bg-slate-900 border border-slate-700 rounded-xl p-8 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <User className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">THE RECRUITER</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                    Standard protocol. Clean, text-based overview of skills, experience, and projects. No distractions.
                </p>
                <div className="flex items-center gap-2 text-blue-400 font-mono text-sm group-hover:gap-4 transition-all">
                    <span>ACCESS_FILE</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
             </div>
          </div>
        </motion.div>

        {/* Option 2: The Neon Drifter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1"
        >
          <div 
            onClick={() => onSelect('drifter')}
            className="group cursor-pointer h-full relative"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
             <div className="relative h-full bg-slate-900 border border-slate-700 rounded-xl p-8 flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-neon-purple flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(188,19,254,0.5)]">
                    <Car className="w-10 h-10 text-neon-purple" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">NEON DRIFTER</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                    Interactive experience. Drive the Cyber-Highway to explore different sectors of the portfolio.
                </p>
                <div className="flex items-center gap-2 text-neon-purple font-mono text-sm group-hover:gap-4 transition-all">
                    <span>START_ENGINE</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CharacterSelect;