import React from 'react';
import { Trophy, Monitor, Keyboard, Mouse, Printer, Box } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

const Gaming: React.FC = () => {
  const games = [
    { name: "Brawl Stars", sub: "45,000+ Trophies", color: "text-yellow-400" },
    { name: "Minecraft", sub: "Creative & Survival", color: "text-green-400" },
    { name: "Assassin's Creed", sub: "Stealth Specialist", color: "text-red-500" },
    { name: "Tomb Raider", sub: "100% Completion", color: "text-blue-400" },
    { name: "Game Modding", sub: "Datapacks & Mods", color: "text-purple-400" },
  ];

  const setup = [
    { icon: Monitor, label: "Display", val: "Laptop + Single Monitor" },
    { icon: Keyboard, label: "Keyboard", val: "Corsair K55 RGB" },
    { icon: Mouse, label: "Mouse", val: "Logitech G305 Wireless" },
    { icon: Printer, label: "3D Printer", val: "Bambu Lab A1 Combo" },
  ];

  return (
    <section id="gaming" className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-purple/50" />
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center">GAMING <span className="text-neon-purple">PROFILE</span></h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-purple/50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Stat Card - Brawl Stars */}
        <NeonCard glowColor="purple" className="lg:col-span-1 flex flex-col justify-center items-center text-center py-12 bg-gradient-to-b from-slate-900 to-indigo-950/50">
          <Trophy className="w-16 h-16 text-yellow-400 mb-4 animate-pulse" />
          <h3 className="text-2xl font-bold text-white mb-2">Brawl Stars</h3>
          <div className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
            45,000+
          </div>
          <p className="text-slate-400 mt-2 font-mono text-sm">TROPHIES ACCUMULATED</p>
        </NeonCard>

        {/* Favorite Games List */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.slice(1).map((game, idx) => (
                <NeonCard key={idx} glowColor="cyan" delay={idx * 0.1} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Box className={`w-5 h-5 ${game.color}`} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">{game.name}</h4>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">{game.sub}</p>
                    </div>
                </NeonCard>
            ))}
        </div>
      </div>

      {/* Hardware Setup */}
      <div className="bg-slate-900/40 border-t border-b border-slate-800 p-8 backdrop-blur-sm">
        <h3 className="text-xl font-display font-bold text-center mb-8 text-slate-300">HARDWARE ARSENAL</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setup.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-3 group-hover:bg-neon-purple/20 transition-colors">
                        <item.icon className="w-6 h-6 text-slate-400 group-hover:text-neon-purple transition-colors" />
                    </div>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{item.label}</span>
                    <span className="text-sm font-medium text-slate-200">{item.val}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gaming;