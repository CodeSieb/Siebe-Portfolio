import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Box, ExternalLink } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

const Printing: React.FC = () => {
  return (
    <section id="printing" className="relative">
       <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
            <div className="flex items-center gap-3">
                <Printer className="w-8 h-8 text-neon-blue" />
                {/* 3D Printing Text Effect */}
                <div className="relative h-10 md:h-12 w-64 md:w-80 overflow-hidden">
                    {/* Ghost text for layout */}
                    <span className="absolute inset-0 text-3xl md:text-4xl font-display font-bold text-slate-800/50 select-none">
                        3D PRINTING
                    </span>
                    
                    {/* Animated Layer-by-Layer Reveal */}
                    <motion.div 
                        initial={{ clipPath: "inset(100% 0 0 0)" }}
                        whileInView={{ clipPath: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"] }}
                        transition={{ 
                            duration: 2, 
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 5 
                        }}
                        className="absolute inset-0"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neon-blue">
                            3D PRINTING
                        </h2>
                        {/* The "Nozzle" Line */}
                        <motion.div 
                            className="absolute left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_white,0_0_20px_#00f3ff]"
                            initial={{ top: "100%" }}
                            whileInView={{ top: ["100%", "0%"] }}
                            transition={{ 
                                duration: 2, 
                                ease: "linear",
                                repeat: Infinity,
                                repeatDelay: 5
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            <p className="text-slate-400 mt-2">Powered by Bambu Lab A1 Combo</p>
        </div>
        <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-slate-300">PRINTER STATUS: IDLE</span>
        </div>
       </div>

       <div className="w-full">
            {/* Featured Highlight */}
            <NeonCard glowColor="blue" className="p-8 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-slate-900 to-blue-950/30">
                <div className="w-full md:w-1/3 aspect-video bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 relative overflow-hidden group">
                     {/* Abstract representation of a printer/model */}
                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
                    <Box className="w-16 h-16 text-blue-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">My Design Lab</h3>
                    <p className="text-slate-300 mb-6">
                        I design and print functional parts and gaming accessories using my Bambu Lab A1 Combo. 
                        Check out my latest models available for download.
                    </p>
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold text-sm transition-colors flex items-center gap-2 mx-auto md:mx-0">
                        <ExternalLink className="w-4 h-4" />
                        Visit MakerWorld Profile
                    </button>
                </div>
            </NeonCard>
       </div>
    </section>
  );
};

export default Printing;