import React from 'react';
import { Bot, Disc, Cpu, Wrench } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

const Engineering: React.FC = () => {
  return (
    <section id="engineering" className="relative">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
          ENGINEERING <span className="text-neon-cyan">&</span> <span className="text-neon-purple">MODDING</span>
        </h2>
        <p className="text-slate-400 mt-4 text-center">Robotics competitions and hardware tinkering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* VEX Robotics */}
        <NeonCard glowColor="cyan" className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-slate-900 to-slate-900/50">
          <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-neon-cyan/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            <Bot className="w-8 h-8 text-neon-cyan" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white mb-2">VEX ROBOTICS</h3>
          <div className="inline-block px-3 py-1 rounded bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono mb-4">
            CLUB MEMBER
          </div>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Active member of the school's robotics club. We design, build, and program competitive robots 
            to solve complex challenges in the VEX ecosystem.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <Wrench className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-400">BUILDING</span>
            </div>
            <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <Cpu className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-400">PROGRAMMING</span>
            </div>
          </div>
        </NeonCard>

        {/* Console Modding */}
        <NeonCard glowColor="purple" className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-slate-900 to-slate-900/50">
          <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-neon-purple/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(188,19,254,0.2)]">
            <Disc className="w-8 h-8 text-neon-purple" />
          </div>
          <h3 className="text-2xl font-bold font-display text-white mb-2">CONSOLE MODDING</h3>
           <div className="inline-block px-3 py-1 rounded bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-mono mb-4">
            HARDWARE HACKER
          </div>
          <p className="text-slate-300 mb-6 leading-relaxed">
            I breathe new life into retro hardware. My latest project involves a fully modded PlayStation 2, 
            running custom homebrew software and game backups from HDD.
          </p>
          <div className="w-full bg-slate-950 rounded border border-slate-800 p-4">
             <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500">PROJECT: PS2 PHAT</span>
                <span className="text-xs text-green-500 font-mono">COMPLETED</span>
             </div>
             <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-neon-purple w-full" />
             </div>
          </div>
        </NeonCard>
      </div>
    </section>
  );
};

export default Engineering;