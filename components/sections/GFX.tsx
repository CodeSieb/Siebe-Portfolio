import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Image as ImageIcon } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

const GFX: React.FC = () => {
  const designs = [
    { title: "YouTube Thumbnails", desc: "High CTR gaming thumbnails", color: "from-red-500 to-orange-500" },
    { title: "Stream Overlays", desc: "Twitch & YouTube packages", color: "from-purple-500 to-pink-500" },
    { title: "Profile Branding", desc: "Logos, banners & avatars", color: "from-blue-500 to-cyan-500" },
  ];

  return (
    <section id="gfx" className="relative">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3 mb-2">
            <Palette className="w-8 h-8 text-neon-cyan" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
            GFX <span className="text-neon-purple">DESIGN</span>
            </h2>
        </div>
        <p className="text-slate-400 mt-2 text-center">Visual identities crafted for gamers and content creators.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {designs.map((item, index) => (
          <NeonCard key={index} glowColor="cyan" delay={index * 0.1} className="group overflow-hidden p-0 h-64 flex flex-col">
            {/* Visual Placeholder */}
            <div className={`h-40 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-grid-pattern opacity-30 transform scale-150" />
                 <ImageIcon className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 bg-slate-900/50 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          </NeonCard>
        ))}
      </div>
    </section>
  );
};

export default GFX;