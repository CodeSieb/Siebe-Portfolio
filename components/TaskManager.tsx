import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Activity, Cpu, CircuitBoard, Layers, Printer, Gamepad2, PlayCircle } from 'lucide-react';

interface TaskManagerProps {
  onClose: () => void;
}

const TaskManager: React.FC<TaskManagerProps> = ({ onClose }) => {
  const [cpuData, setCpuData] = useState<number[]>(new Array(40).fill(10));
  const [currentCpu, setCurrentCpu] = useState(15);
  
  // Update CPU graph simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const usage = Math.floor(Math.random() * 30) + 5 + (Math.random() > 0.8 ? 20 : 0); // Random spikes
      setCurrentCpu(usage);
      setCpuData(prev => [...prev.slice(1), usage]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      className="fixed z-[100] inset-0 md:inset-auto md:top-24 md:right-8 md:w-[400px] md:h-auto bg-[#1e1e1e] border border-slate-600 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden flex flex-col font-sans text-xs"
    >
      {/* Title Bar */}
      <div className="bg-[#2d2d2d] px-3 py-2 flex items-center justify-between border-b border-black">
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-neon-cyan" />
          <span className="text-slate-300 font-bold tracking-wide">Task Manager // SIEBE_OS</span>
        </div>
        <button onClick={onClose} className="hover:bg-red-500/80 p-1 rounded transition-colors group">
          <X className="w-3 h-3 text-slate-400 group-hover:text-white" />
        </button>
      </div>

      <div className="p-4 space-y-4 bg-[#1e1e1e] text-slate-300 h-full overflow-y-auto">
        
        {/* CPU Graph Section */}
        <div className="bg-black/40 border border-slate-700 p-3 rounded">
          <div className="flex justify-between items-end mb-2">
             <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-neon-blue" />
                <span className="font-bold">CPU Usage</span>
             </div>
             <span className="text-lg font-mono text-neon-blue">{currentCpu}%</span>
          </div>
          <div className="h-16 flex items-end gap-[2px] overflow-hidden">
            {cpuData.map((val, i) => (
              <div 
                key={i} 
                className="flex-1 bg-neon-blue/50 hover:bg-neon-blue transition-colors"
                style={{ height: `${val}%` }} 
              />
            ))}
          </div>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          
          {/* Active Projects */}
          <div className="bg-black/20 border border-slate-700 p-3 rounded">
            <div className="flex items-center gap-2 mb-2 text-neon-purple">
                <Layers className="w-3.5 h-3.5" />
                <span className="font-bold uppercase">Active Projects</span>
            </div>
            <div className="text-2xl font-display font-bold text-white mb-1">3</div>
            <div className="text-[10px] text-slate-500 flex flex-col gap-1">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Printalyze</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Verbify.be</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Portfolio v1</span>
            </div>
          </div>

          {/* Printing Queue */}
          <div className="bg-black/20 border border-slate-700 p-3 rounded">
            <div className="flex items-center gap-2 mb-2 text-green-400">
                <Printer className="w-3.5 h-3.5" />
                <span className="font-bold uppercase">Print Queue</span>
            </div>
            <div className="text-xl font-display font-bold text-slate-400 mb-1">Empty</div>
            <div className="text-[10px] text-slate-500">
                Status: <span className="text-green-500">Idle</span>
                <br />
                Temp: 24°C
            </div>
          </div>
        </div>

        {/* Gaming Stats */}
        <div className="bg-black/20 border border-slate-700 p-3 rounded">
            <div className="flex items-center gap-2 mb-3 text-orange-400">
                <Gamepad2 className="w-3.5 h-3.5" />
                <span className="font-bold uppercase">Weekly Activity</span>
            </div>
            <div className="space-y-3">
                <div>
                    <div className="flex justify-between text-[10px] mb-1">
                        <span>Minecraft</span>
                        <span className="text-slate-400">12h 30m</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[75%]" />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-[10px] mb-1">
                        <span>Brawl Stars</span>
                        <span className="text-slate-400">4h 15m</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400 w-[35%]" />
                    </div>
                </div>
            </div>
        </div>

         {/* System Footer */}
         <div className="text-[10px] text-slate-600 font-mono text-center pt-2 border-t border-slate-800">
            MEM: 16GB / 32GB • NET: 450Mbps • UPTIME: 42h 15m
         </div>

      </div>
    </motion.div>
  );
};

export default TaskManager;