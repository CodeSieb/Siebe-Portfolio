import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Background from './components/Background';
import Terminal from './components/Terminal';
import TaskManager from './components/TaskManager';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showTaskManager, setShowTaskManager] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-slate-100 font-sans selection:bg-neon-purple selection:text-white">
      <Background />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <Intro 
            key="intro" 
            onPlay={() => setHasEntered(true)} 
            onOpenTerminal={() => setShowTerminal(true)}
          />
        ) : (
          <Portfolio 
            key="portfolio" 
            onOpenTaskManager={() => setShowTaskManager(!showTaskManager)} 
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
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-t from-neon-bg via-transparent to-transparent z-40 opacity-40" />
    </div>
  );
};

export default App;