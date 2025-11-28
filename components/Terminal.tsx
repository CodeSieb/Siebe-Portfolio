import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
}

const fileSystem: Record<string, string> = {
  'about.txt': `
NAME: Siebe
AGE: 15
ROLE: Developer & Maker
BIO: Tech enthusiast bringing digital ideas to life. 
     Modding Minecraft, building tools, and 3D printing.`,
  
  'gaming.txt': `
STATS:
- Brawl Stars: 45,000+ Trophies
- Minecraft: Builder/Survivor
- Assassin's Creed: Stealth Specialist
- Tomb Raider: 100% Completion

HARDWARE:
- Display: Laptop + Single Monitor
- Input: Corsair K55 + Logitech G305
- Printer: Bambu Lab A1 Combo`,

  'engineering.txt': `
VEX ROBOTICS:
- Active Member of School Club
- Designing & Programming Competitive Robots

CONSOLE MODDING:
- PlayStation 2: Softmodded/Homebrew capable
- Retro Tech Restoration`,

  'projects.txt': `
PUBLIC PROJECTS:
1. Printalyze (Web App) - printalyze.netlify.app
   3D printing analytics & workflow optimization.

2. Verbify.be (Web App) - verbify.be
   Language learning platform for conjugations.

3. YT-DLP GUI (Desktop)
   Modern interface for video downloads.`,

  'media.txt': `
FAVORITES:
[Books]
- Harry Potter Series
- Throne of Glass

[Watchlist]
- Avatar: The Last Airbender (Series)
- Harry Potter and the Sorcerer's Stone (Movie)`,
  
  'contact.txt': `
DISCORD: siebe#0000
EMAIL: contact@siebe.dev
STATUS: Open for collaboration`
};

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [history, setHistory] = useState<string[]>(['Welcome to SIEBE_OS v1.0.4', 'Type "help" to see available commands.']);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const args = cmd.split(' ').slice(1);
    const command = cmd.split(' ')[0];

    let output = '';

    switch (command) {
      case 'help':
        output = `Available commands:
  ls              - List files
  cat [filename]  - View file content
  clear           - Clear terminal
  whoami          - Display current user
  exit            - Close terminal`;
        break;
      case 'ls':
        output = Object.keys(fileSystem).join('  ');
        break;
      case 'cat':
        if (args.length === 0) {
          output = 'Usage: cat [filename]';
        } else if (fileSystem[args[0]]) {
          output = fileSystem[args[0]];
        } else {
          output = `Error: File '${args[0]}' not found.`;
        }
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'whoami':
        output = 'guest@siebe-portfolio';
        break;
      case 'exit':
        onClose();
        return;
      case '':
        break;
      default:
        output = `Command not found: ${command}. Type 'help' for assistance.`;
    }

    setHistory(prev => [...prev, `guest@siebe:~$ ${input}`, output].filter(Boolean));
    setInput('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="w-full max-w-3xl h-[600px] bg-[#0c0c0c] border border-green-500/50 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.1)] flex flex-col font-mono text-sm md:text-base overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-green-900">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-bold">guest@siebe-os:~</span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div 
          className="flex-1 p-4 overflow-y-auto text-green-400 font-mono space-y-2 scanlines-inner scrollbar-green" 
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap leading-relaxed">{line}</div>
          ))}
          
          <form onSubmit={handleCommand} className="flex gap-2 mt-2">
            <span className="text-green-500 shrink-0">guest@siebe:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-green-400 flex-1 w-full caret-green-500"
              autoComplete="off"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>

      <style>{`
        .scanlines-inner {
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
        }
        .scrollbar-green::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-green::-webkit-scrollbar-track {
          background: #0c0c0c; 
        }
        .scrollbar-green::-webkit-scrollbar-thumb {
          background: #22c55e; 
          border-radius: 4px;
        }
        .scrollbar-green::-webkit-scrollbar-thumb:hover {
          background: #4ade80; 
        }
      `}</style>
    </motion.div>
  );
};

export default Terminal;