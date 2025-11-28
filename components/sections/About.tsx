import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Cpu, Palette } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

const About: React.FC = () => {
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
          <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full blur-2xl opacity-60 animate-pulse-slow" />
          <div className="relative w-full h-full rounded-full border-4 border-slate-800 bg-slate-900 overflow-hidden flex items-center justify-center">
             {/* Placeholder for real image */}
             <User className="w-24 h-24 text-slate-600" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur border border-neon-cyan px-4 py-1 rounded-full text-neon-cyan text-xs font-mono whitespace-nowrap">
            Lvl 15 Developer
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">SIEBE</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed mb-8"
          >
            <p>
              I'm a 15-year-old tech enthusiast passionate about bringing digital ideas to life. 
              Whether I'm modding Minecraft, building useful tools with Python, creating GFX, or 
              3D printing custom models, I'm always leveling up my skills.
            </p>
          </motion.div>

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
        </div>
      </div>
    </section>
  );
};

export default About;