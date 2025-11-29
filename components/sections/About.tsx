import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Cpu, Palette, AlertTriangle } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

interface AboutProps {
  isHackerMode?: boolean;
}

const About: React.FC<AboutProps> = ({ isHackerMode = false }) => {
  return (
    <section id="about" className="relative">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Avatar / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
        >
          <div className={`absolute inset-0 bg-gradient-to-tr rounded-full blur-2xl opacity-60 animate-pulse-slow ${isHackerMode ? 'from-green-600 to-black' : 'from-neon-blue to-neon-purple'}`} />
          <div className={`relative w-full h-full rounded-full border-4 overflow-hidden flex items-center justify-center transition-colors duration-500 ${isHackerMode ? 'bg-black border-green-800' : 'bg-slate-900 border-slate-800'}`}>
             {/* Base User Icon */}
             <User className={`w-24 h-24 transition-colors duration-500 ${isHackerMode ? 'text-green-600' : 'text-slate-600'}`} />
             
             {/* Hacker Mode Overlay: Black Cap Effect */}
             {isHackerMode && (
               <>
                 <div className="absolute inset-0 bg-black/80 mix-blend-multiply z-10" />
                 {/* Visual simulation of a 'Black Hat' or dark hood */}
                 <div className="absolute top-10 w-40 h-16 bg-black rounded-t-full z-20 shadow-[0_10px_20px_rgba(0,0,0,1)]" />
                 <div className="absolute top-24 w-48 h-4 bg-black z-20" />
                 <div className="absolute top-24 left-8 w-8 h-8 bg-black rotate-45 z-20" />
                 <div className="absolute top-24 right-8 w-8 h-8 bg-black rotate-45 z-20" />
                 <AlertTriangle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/50 w-32 h-32 z-0 animate-pulse" />
               </>
             )}
          </div>
          <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 backdrop-blur border px-4 py-1 rounded-full text-xs font-mono whitespace-nowrap transition-colors duration-500 ${isHackerMode ? 'bg-black text-red-500 border-red-500' : 'bg-black/80 text-neon-cyan border-neon-cyan'}`}>
            {isHackerMode ? 'ROOT_ACCESS_GRANTED' : 'Lvl 15 Developer'}
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            {isHackerMode ? (
              <span className="text-red-500 tracking-widest glitch-text">SYSTEM_OVERRIDE</span>
            ) : (
              <>ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">SIEBE</span></>
            )}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-lg leading-relaxed mb-8 ${isHackerMode ? 'text-green-500 font-mono' : 'text-slate-300'}`}
          >
            {isHackerMode ? (
              <p>
                &gt; Identity obfuscated.<br/>
                &gt; Exploring the digital underground.<br/>
                &gt; Tinkering with hardware and software limits.<br/>
                &gt; Nothing is secure. Everything is moddable.
              </p>
            ) : (
              <p>
                I'm a 15-year-old tech enthusiast passionate about bringing digital ideas to life. 
                Whether I'm modding Minecraft, building useful tools with Python, creating GFX, or 
                3D printing custom models, I'm always leveling up my skills.
              </p>
            )}
          </motion.div>

          {!isHackerMode && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Code, label: "Coding" },
                { icon: Cpu, label: "Tech" },
                { icon: Palette, label: "GFX Design" },
                { icon: User, label: "Gaming" }
              ].map((item, idx) => (
                <NeonCard key={idx} glowColor="cyan" className="flex flex-col items-center justify-center p-4 min-h-[100px]">
                  <item.icon className="w-6 h-6 mb-2 text-neon-cyan" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </NeonCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;