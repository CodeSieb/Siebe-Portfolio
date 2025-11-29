import React from 'react';
import { Github, Folder, ExternalLink, Globe } from 'lucide-react';
import NeonCard from '../ui/NeonCard';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'public-1',
      title: 'Printalyze',
      description: 'A dedicated project for 3D printing analytics. Helps makers optimize their workflow and analyze print data.',
      tags: ['Web App', '3D Printing', 'Analytics'],
      link: 'https://printalyze.netlify.app' 
    },
    {
      id: 'public-2',
      title: 'Verbify.be',
      description: 'An interactive language learning platform focused on mastering verb conjugations efficiently.',
      tags: ['Web Development', 'Education', 'Languages'],
      link: 'https://verbify.be'
    },
    {
      id: '1',
      title: 'YT-DLP GUI',
      description: 'A modern PyQt graphical interface for the powerful youtube-dl fork, making video downloads effortless.',
      tags: ['Python', 'PyQt', 'FFmpeg']
    },
    {
      id: '2',
      title: "Anna's Archive GUI",
      description: 'Desktop application to search and download resources from the shadow library efficiently.',
      tags: ['Python', 'API', 'UI/UX']
    },
    {
      id: '4',
      title: 'The Hub App',
      description: 'An all-in-one utility suite combining my best tools into a single dashboard.',
      tags: ['Electron', 'React', 'Node.js']
    },
    {
      id: '5',
      title: 'Minecraft Datapacks',
      description: 'Custom gameplay mechanics and server-side mods to enhance the vanilla survival experience.',
      tags: ['Java', 'JSON', 'Game Design']
    }
  ];

  return (
    <section id="projects">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          MY <span className="text-neon-purple">PROJECTS</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl text-center">
          A collection of public web apps, desktop tools, and game mods I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <NeonCard key={project.id} glowColor="purple" delay={idx * 0.1} className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-slate-800 rounded-lg text-neon-purple">
                <Folder className="w-6 h-6" />
              </div>
              <div className="flex gap-2">
                {/* Only show GitHub icon for projects that aren't the specific private web apps */}
                {!['public-1', 'public-2'].includes(project.id) && (
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors" title="View Code">
                        <Github className="w-5 h-5 text-slate-400 hover:text-white" />
                    </button>
                )}
                
                {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-full transition-colors" 
                      title="View Project"
                    >
                        {/* Always use Globe for web apps */}
                        {(project.tags.includes('Web App') || project.tags.includes('Web Development')) ? (
                          <Globe className="w-5 h-5 text-slate-400 hover:text-white" />
                        ) : (
                          <ExternalLink className="w-5 h-5 text-slate-400 hover:text-white" />
                        )}
                    </a>
                )}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-2 py-1 bg-slate-800 text-neon-cyan rounded-sm border border-slate-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </NeonCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;