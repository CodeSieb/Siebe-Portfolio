import React from 'react';
import { FileText, Download, Mail, Github, ExternalLink } from 'lucide-react';

const RecruiterView: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl border border-slate-200 p-8 md:p-12 print:shadow-none print:border-none">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">SIEBE</h1>
            <p className="text-xl text-slate-600">Developer & Maker (15 y/o)</p>
          </div>
          <div className="mt-4 md:mt-0 text-right space-y-1 text-sm text-slate-600">
            <div className="flex items-center justify-end gap-2">
              <span>contact@siebe.dev</span>
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>siebe#0000</span>
              <span className="font-bold">Discord</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Sidebar */}
          <aside className="space-y-8">
            <section>
              <h3 className="text-lg font-bold border-b border-slate-300 pb-2 mb-4 uppercase tracking-wider">Skills</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="font-semibold">Languages:</span> Python, JavaScript/TypeScript, Java, HTML/CSS</li>
                <li><span className="font-semibold">Frameworks:</span> React, PyQt, Node.js</li>
                <li><span className="font-semibold">Tools:</span> Git, Linux, Docker, FFmpeg</li>
                <li><span className="font-semibold">Hardware:</span> Raspberry Pi, Arduino, 3D Printing (Bambu Lab)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold border-b border-slate-300 pb-2 mb-4 uppercase tracking-wider">Interests</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Game Modding</li>
                <li>VEX Robotics Competition</li>
                <li>Automation & Scripting</li>
                <li>3D Design (CAD)</li>
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-2 space-y-10">
            
            <section>
              <h3 className="text-lg font-bold border-b border-slate-300 pb-2 mb-4 uppercase tracking-wider">Profile</h3>
              <p className="text-slate-700 leading-relaxed">
                Motivated 15-year-old developer with a hands-on approach to learning. 
                I specialize in creating practical desktop tools, web applications, and game modifications.
                Actively involved in robotics and competitive gaming, I balance technical precision with creative problem-solving.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold border-b border-slate-300 pb-2 mb-4 uppercase tracking-wider">Key Projects</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-lg">Printalyze</h4>
                    <a href="https://printalyze.netlify.app" target="_blank" className="text-blue-600 text-sm hover:underline flex items-center gap-1">printalyze.netlify.app <ExternalLink className="w-3 h-3"/></a>
                  </div>
                  <p className="text-sm text-slate-700 mt-1">Web application for 3D printing analytics and workflow optimization.</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-lg">Verbify.be</h4>
                    <a href="https://verbify.be" target="_blank" className="text-blue-600 text-sm hover:underline flex items-center gap-1">verbify.be <ExternalLink className="w-3 h-3"/></a>
                  </div>
                  <p className="text-sm text-slate-700 mt-1">Interactive platform for mastering language verb conjugations.</p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">YT-DLP GUI</h4>
                  <p className="text-sm text-slate-700 mt-1">Modern PyQt desktop interface for the command-line video downloader tool.</p>
                </div>

                <div>
                   <h4 className="font-bold text-lg">VEX Robotics Competitor</h4>
                   <p className="text-sm text-slate-700 mt-1">Design, build, and program robots for school club competitions.</p>
                </div>
              </div>
            </section>

             <section>
              <h3 className="text-lg font-bold border-b border-slate-300 pb-2 mb-4 uppercase tracking-wider">Achievements</h3>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>45,000+ Trophies in Brawl Stars</li>
                <li>Created 3+ Publicly available software tools</li>
                <li>Managed vanilla+ Minecraft SMP community</li>
              </ul>
            </section>

          </main>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          <p>Generated via Portfolio v1.0.4</p>
        </footer>
      </div>
    </div>
  );
};

export default RecruiterView;