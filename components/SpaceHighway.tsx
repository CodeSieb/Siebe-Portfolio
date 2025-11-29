import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CornerUpLeft } from 'lucide-react';

interface SpaceHighwayProps {
  onSelectSection: (section: string) => void;
}

const SECTIONS = ['About', 'Gaming', 'Projects', 'Engineering', 'Timeline', 'Media', 'Contact'];

const SpaceHighway: React.FC<SpaceHighwayProps> = ({ onSelectSection }) => {
  const [lane, setLane] = useState(0); // -1 (Left), 0 (Center), 1 (Right)
  const [gateZ, setGateZ] = useState(0); // Position of the incoming gate (0 to 100)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [targetLane, setTargetLane] = useState(0); // Where the gate spawns
  const [speed, setSpeed] = useState(2);
  const [message, setMessage] = useState("USE ARROWS TO STEER");

  // Game Loop
  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      setGateZ((prev) => {
        let next = prev + speed;
        if (next > 110) {
          // Reset gate and cycle section
          next = 0;
          setCurrentSectionIndex((prevIdx) => (prevIdx + 1) % SECTIONS.length);
          setTargetLane(Math.floor(Math.random() * 3) - 1); // Random lane -1, 0, 1
          setMessage("APPROACHING GATE...");
        }
        return next;
      });
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  // Collision Detection
  useEffect(() => {
    if (gateZ > 90 && gateZ < 105) {
      if (lane === targetLane) {
        // HIT!
        setSpeed(0); // Stop
        const section = SECTIONS[currentSectionIndex];
        setMessage(`WARPING TO ${section.toUpperCase()}...`);
        setTimeout(() => {
          onSelectSection(section);
        }, 800);
      }
    }
  }, [gateZ, lane, targetLane, currentSectionIndex, onSelectSection]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setLane((prev) => Math.max(prev - 1, -1));
    if (e.key === 'ArrowRight') setLane((prev) => Math.min(prev + 1, 1));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden select-none font-display">
      {/* Sky / Horizon */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#0a0a16] to-[#2d1b4e] flex items-end justify-center">
        <div className="w-full h-1 bg-neon-cyan/50 blur-sm" />
        {/* Sun */}
        <div className="absolute bottom-0 mb-[-60px] w-64 h-64 rounded-full bg-gradient-to-t from-yellow-500 to-red-600 blur-lg opacity-80" />
      </div>

      {/* Grid Floor */}
      <div className="absolute top-[50%] left-[-50%] right-[-50%] bottom-0 bg-[#0a0a16] perspective-grid" />
      
      {/* HUD */}
      <div className="absolute top-8 left-0 right-0 text-center z-20">
        <h2 className="text-neon-cyan text-2xl font-bold tracking-[0.5em] animate-pulse">{message}</h2>
        <div className="flex justify-center gap-8 mt-4 text-white/50 text-sm font-mono">
            <div className="flex items-center gap-2"><ArrowLeft size={16}/> LEFT</div>
            <div className="flex items-center gap-2">RIGHT <ArrowRight size={16}/></div>
        </div>
      </div>

      {/* 3D Scene Container */}
      <div className="absolute inset-0 flex items-center justify-center perspective-container">
        
        {/* Moving Gate */}
        <div 
           className="absolute transform-style-3d transition-transform duration-75 ease-linear"
           style={{
             transform: `translate3d(${targetLane * 300}px, 50px, ${gateZ * 5}px) scale(${0.5 + gateZ/100})`,
             opacity: gateZ > 105 ? 0 : 1,
             zIndex: Math.floor(gateZ)
           }}
        >
             <div className="w-[300px] h-[200px] border-4 border-neon-purple shadow-[0_0_50px_rgba(188,19,254,0.5)] bg-black/50 flex items-center justify-center backdrop-blur-sm">
                <span className="text-4xl font-black text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {SECTIONS[currentSectionIndex]}
                </span>
             </div>
             <div className="w-[320px] h-2 bg-neon-purple mt-2 blur-md mx-auto" />
        </div>

        {/* Player Car */}
        <div 
          className="absolute bottom-10 transition-all duration-300 ease-out z-50"
          style={{ transform: `translateX(${lane * 300}px)` }}
        >
             {/* Car Model (Simplified Visual) */}
            <div className="relative w-40 h-24">
                <div className="absolute bottom-0 w-full h-12 bg-slate-800 rounded-lg transform skew-x-12 border-b-4 border-neon-cyan shadow-[0_10px_50px_rgba(0,243,255,0.4)]"></div>
                <div className="absolute bottom-12 left-4 right-4 h-8 bg-black/80 rounded-t-lg border-t border-l border-r border-slate-600"></div>
                {/* Tail Lights */}
                <div className="absolute bottom-4 left-2 w-8 h-2 bg-red-500 blur-[2px] animate-pulse"></div>
                <div className="absolute bottom-4 right-2 w-8 h-2 bg-red-500 blur-[2px] animate-pulse"></div>
                {/* Exhaust */}
                <div className="absolute -bottom-2 left-8 w-2 h-4 bg-blue-400 blur-sm"></div>
                <div className="absolute -bottom-2 right-8 w-2 h-4 bg-blue-400 blur-sm"></div>
            </div>
        </div>

      </div>

      <style>{`
        .perspective-container {
            perspective: 1000px;
            transform-style: preserve-3d;
        }
        .perspective-grid {
            transform: perspective(500px) rotateX(60deg);
            background-image: 
                linear-gradient(rgba(188, 19, 254, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(188, 19, 254, 0.3) 1px, transparent 1px);
            background-size: 100px 100px;
            animation: gridMove 1s linear infinite;
        }
        @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 0 100px; }
        }
      `}</style>
      
      {/* Mobile Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-12 md:hidden pointer-events-auto z-50">
        <button onClick={() => setLane(Math.max(lane - 1, -1))} className="p-6 bg-white/10 rounded-full active:bg-neon-cyan/50"><ArrowLeft className="text-white" /></button>
        <button onClick={() => setLane(Math.min(lane + 1, 1))} className="p-6 bg-white/10 rounded-full active:bg-neon-cyan/50"><ArrowRight className="text-white" /></button>
      </div>

    </div>
  );
};

export default SpaceHighway;