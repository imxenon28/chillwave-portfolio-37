
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Blog Website',
      description: 'A simple blog website built with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 2,
      title: 'To-Do List Application',
      description: 'A to-do list application with local storage functionality.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application that fetches data from an API.',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    },
    {
      id: 4,
      title: 'Calculator',
      description: 'A simple calculator with basic arithmetic operations.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/',
      demo: 'https://example.com/'
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">My Projects</h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in delay-100">
            A showcase of my coding journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-in transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-lofi-primary/30 via-lofi-secondary/20 to-lofi-accent/10 flex items-center justify-center">
                <h3 className="text-2xl font-display font-semibold text-white">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-white/70 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-lofi-primary flex items-center transition-colors duration-300"
                  >
                    <Github size={18} className="mr-2" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-lofi-primary flex items-center transition-colors duration-300"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
