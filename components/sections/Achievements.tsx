import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle, Smartphone, Server, Box, Globe, Disc } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "The Modder",
      desc: "Completed PS2 Mod Project",
      icon: Disc,
      color: "text-purple-400"
    },
    {
      title: "Toolsmith",
      desc: "Created 3+ Public Tools",
      icon: Box,
      color: "text-blue-400"
    },
    {
      title: "Server Owner",
      desc: "Ran a vanilla+ Minecraft SMP",
      icon: Server,
      color: "text-green-400"
    },
    {
      title: "Brawler Legend",
      desc: "45K Brawl Stars Trophies",
      icon: Smartphone,
      color: "text-yellow-400"
    },
    {
      title: "Web Deployer",
      desc: "Launched Verbify.be",
      icon: Globe,
      color: "text-cyan-400"
    },
    {
      title: "App Developer",
      desc: "Developed 3+ Desktop Apps",
      icon: CheckCircle,
      color: "text-orange-400"
    }
  ];

  return (
    <section id="achievements">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
            ACHIEVEMENTS <span className="text-neon-purple">UNLOCKED</span>
            </h2>
        </div>
        <p className="text-slate-400 mt-2 text-center uppercase tracking-widest text-xs">Real Life Stats</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-700/50 rounded-lg backdrop-blur-sm group hover:bg-slate-800/60 hover:border-neon-purple/30 transition-all"
          >
            <div className={`w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-white/20 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-0.5">{item.title}</h3>
                <p className="text-xs text-slate-400 font-mono">{item.desc}</p>
            </div>
            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <Trophy className="w-4 h-4 text-yellow-500/50" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;