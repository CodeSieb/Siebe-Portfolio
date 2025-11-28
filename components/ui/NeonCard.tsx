import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue';
  delay?: number;
}

const NeonCard: React.FC<NeonCardProps> = ({ 
  children, 
  className = "", 
  glowColor = 'purple',
  delay = 0 
}) => {
  const borderColor = glowColor === 'cyan' ? 'group-hover:border-neon-cyan' : 'group-hover:border-neon-purple';
  const shadowColor = glowColor === 'cyan' ? 'group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]' : 'group-hover:shadow-[0_0_20px_rgba(188,19,254,0.3)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 transition-all duration-300 ${borderColor} ${shadowColor} ${className}`}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-slate-500 group-hover:border-white transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-slate-500 group-hover:border-white transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-slate-500 group-hover:border-white transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-500 group-hover:border-white transition-colors" />
      
      {children}
    </motion.div>
  );
};

export default NeonCard;