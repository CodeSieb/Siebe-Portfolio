import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Background from './components/Background';
import Terminal from './components/Terminal';
import TaskManager from './components/TaskManager';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showTaskManager, setShowTaskManager] = useState(false);
  const [isHackerMode, setIsHackerMode] = useState(false);

  const handleReset = () => {
    setShowIntro(true);
    // Optional: Reset hacker mode on exit, or keep it persistent. 
    // Resetting gives a fresh start feel.
    setIsHackerMode(false); 
    setShowTerminal(false);
    setShowTaskManager(false);
  };

  return (
    <div className={`relative min-h-screen w-full overflow-hidden font-sans selection:bg-neon-purple selection:text-white ${isHackerMode ? 'text-green-500' : 'text-slate-100'}`}>
      
      <Background />
      
      <AnimatePresence mode="wait">
        {showIntro ? (
          <Intro 
            key="intro" 
            onStart={() => setShowIntro(false)} 
            onOpenTerminal={() => setShowTerminal(true)}
            onEnableHackerMode={() => {
              setIsHackerMode(true);
              setShowIntro(false);
            }}
          />
        ) : (
          <Portfolio 
            key="portfolio" 
            onOpenTaskManager={() => setShowTaskManager(!showTaskManager)}
            isHackerMode={isHackerMode}
            onReset={handleReset}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTerminal && (
          <Terminal onClose={() => setShowTerminal(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTaskManager && (
          <TaskManager onClose={() => setShowTaskManager(false)} />
        )}
      </AnimatePresence>
      
      {/* Visual Overlay Effects */}
      <div className="scanlines" />
      <div className={`fixed inset-0 pointer-events-none bg-gradient-to-t z-40 opacity-40 ${isHackerMode ? 'from-green-900/20 via-transparent' : 'from-neon-bg via-transparent to-transparent'}`} />
    </div>
  );
};

export default App;