import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import NeonCard from '../ui/NeonCard';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto w-full">
      <NeonCard glowColor="cyan" className="p-8 md:p-12 bg-gradient-to-br from-slate-900 to-slate-900">
        <div className="text-center mb-10">
          <MessageSquare className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold mb-2">CONNECT</h2>
          <p className="text-slate-400">Have a project idea or just want to chat games?</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-neon-cyan uppercase tracking-wider">Discord Username</label>
              <input 
                type="text" 
                placeholder="siebe#0000" 
                className="w-full bg-slate-950/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-mono"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-neon-cyan uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                placeholder="contact@siebe.dev" 
                className="w-full bg-slate-950/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-mono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-neon-cyan uppercase tracking-wider">Message</label>
            <textarea 
              rows={4} 
              placeholder="Yo Siebe, checked out your portfolio..." 
              className="w-full bg-slate-950/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-mono resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-display font-bold tracking-widest hover:bg-neon-cyan hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>SEND TRANSMISSION</span>
            <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </NeonCard>
    </section>
  );
};

export default Contact;