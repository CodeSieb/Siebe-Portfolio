import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-neon-bg">
      {/* Ambient Grid */}
      <div className="absolute inset-0 opacity-10 bg-[size:40px_40px] bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0], 
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neon-purple rounded-full mix-blend-screen filter blur-[120px] opacity-20"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.5, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-15"
      />

      {/* Tiny Particles (Simulated) */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 2 + 1,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;