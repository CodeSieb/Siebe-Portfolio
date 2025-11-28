import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Bot, Zap, Printer, Terminal } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      year: '2019',
      title: 'The Beginning',
      desc: 'Started modding Minecraft, sparking an interest in how code alters game mechanics.',
      icon: <Terminal className="w-5 h-5 text-neon-blue" />,
      color: 'border-neon-blue'
    },
    {
      year: '2022',
      title: 'Python & UI',
      desc: 'Began learning Python. Built my first GUI application, bridging logic with visual interfaces.',
      icon: <Code className="w-5 h-5 text-neon-purple" />,
      color: 'border-neon-purple'
    },
    {
      year: '2023',
      title: 'Robotics Engineering',
      desc: 'Joined the VEX Robotics club. Applied coding skills to physical hardware and competitive problem solving.',
      icon: <Bot className="w-5 h-5 text-neon-cyan" />,
      color: 'border-neon-cyan'
    },
    {
      year: '2025',
      title: 'Automation Era',
      desc: 'Raspberry Pi projects, home server automation, and building custom tools like Verbify & YT-DLP GUI.',
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      color: 'border-yellow-400'
    },
    {
      year: '2025',
      title: '3D Printing & Design',
      desc: 'Launched Design Lab. prototyping functional parts and mods with the Bambu Lab A1.',
      icon: <Printer className="w-5 h-5 text-green-400" />,
      color: 'border-green-400'
    }
  ];

  return (
    <section id="timeline" className="relative max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center">
          TECH <span className="text-neon-cyan">JOURNEY</span>
        </h2>
        <p className="text-slate-400 mt-2 text-center">Leveling up, one year at a time.</p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-700 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-white z-10 transform -translate-x-1/2 mt-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                 <div className="absolute inset-0 bg-white/50 animate-pulse rounded-full" />
              </div>

              {/* Content Side */}
              <div className="flex-1 md:w-1/2 ml-12 md:ml-0">
                <div className={`p-6 bg-slate-900/40 backdrop-blur-sm border-l-2 ${event.color} rounded-r-lg md:rounded-lg border md:border-l-0 md:border-b-2 hover:bg-slate-800/50 transition-colors`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xl font-bold text-white">{event.year}</span>
                    <div className="p-1.5 bg-slate-800 rounded-md">
                        {event.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 mb-2">{event.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>

              {/* Empty Side for Desktop Layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;