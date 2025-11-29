import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Smartphone, Unlock, ShieldAlert, Disc } from 'lucide-react';

const Secret: React.FC = () => {
  const secrets = [
    {
      title: "Media Liberator",
      desc: "Archiving digital media for offline preservation. Ripping & encoding.",
      icon: Disc,
      status: "ARCHIVING"
    },
    {
      title: "APK Injection",
      desc: "Modifying Android application packages. Custom features & ad-block integration.",
      icon: Smartphone,
      status: "PATCHED"
    },
    {
      title: "Grey Hat Labs",
      desc: "Experimenting with security protocols and network analysis.",
      icon: ShieldAlert,
      status: "ACTIVE"
    },
    {
        title: "Game Cracker",
        desc: "Bypassing restrictions for educational purposes.",
        icon: Unlock,
        status: "UNDETECTED"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto w-full py-12"
    >
      <div className="border border-green-900 bg-black/80 p-8 rounded-lg relative overflow-hidden">
        {/* Matrix-like background effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }} 
        />
        
        <div className="flex items-center gap-4 mb-12 border-b border-green-900/50 pb-4">
            <Skull className="w-10 h-10 text-green-500 animate-pulse" />
            <div>
                <h2 className="text-3xl font-mono font-bold text-green-500 uppercase glitch-text">Hidden Logs</h2>
                <p className="text-green-800 font-mono text-sm">Access Level: ADMIN</p>
            </div>
        </div>

        <div className="grid gap-6">
            {secrets.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 border border-green-900/30 bg-green-900/5 hover:bg-green-900/10 transition-colors rounded">
                    <div className="p-3 bg-black border border-green-800 rounded">
                        <item.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-mono font-bold text-green-400">{item.title}</h3>
                        <p className="text-sm font-mono text-green-700">{item.desc}</p>
                    </div>
                    <div className="text-xs font-mono px-2 py-1 bg-green-900/20 text-green-500 border border-green-800 rounded animate-pulse">
                        [{item.status}]
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 text-center">
            <p className="font-mono text-xs text-green-900">
                &gt; TRACE COMPLETE.<br/>
                &gt; LOGGING SESSION...
            </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Secret;