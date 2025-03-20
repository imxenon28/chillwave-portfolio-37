
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Blog Website',
      description: 'A simple blog website built with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/imxenon28',
      demo: 'https://example.com/',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'To-Do List Application',
      description: 'A to-do list application with local storage functionality.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/imxenon28',
      demo: 'https://example.com/',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application that fetches data from an API.',
      tags: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/imxenon28',
      demo: 'https://example.com/',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Calculator',
      description: 'A simple calculator with basic arithmetic operations.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/imxenon28',
      demo: 'https://example.com/',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  // Create refs for the magnetic button effect
  const magneticButtonRef = useRef<HTMLAnchorElement>(null);
  
  // Setup for intersection observer animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Add magnetic button effect
  useEffect(() => {
    const magneticButton = magneticButtonRef.current;
    
    if (!magneticButton) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const buttonRect = magneticButton.getBoundingClientRect();
      
      const buttonX = buttonRect.left + buttonRect.width / 2;
      const buttonY = buttonRect.top + buttonRect.height / 2;
      
      const deltaX = e.clientX - buttonX;
      const deltaY = e.clientY - buttonY;
      
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < 150) {
        const x = deltaX / 10;
        const y = deltaY / 10;
        
        magneticButton.style.transform = `translate(${x}px, ${y}px)`;
      } else {
        magneticButton.style.transform = 'translate(0, 0)';
      }
    };
    
    const handleMouseLeave = () => {
      if (magneticButton) {
        magneticButton.style.transform = 'translate(0, 0)';
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    magneticButton.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (magneticButton) {
        magneticButton.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Add tilt effect to project cards
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      const handleMouseMove = (e: MouseEvent) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const deltaX = e.clientX - cardCenterX;
        const deltaY = e.clientY - cardCenterY;
        
        // Calculate rotation based on mouse position
        const rotateY = deltaX / 20;
        const rotateX = -deltaY / 20;
        
        cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      };
      
      const handleMouseLeave = () => {
        const cardElement = card as HTMLElement;
        cardElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      };
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      projectCards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as any);
        card.removeEventListener('mouseleave', handleMouseLeave as any);
      });
    };
    
    function handleMouseMove(this: HTMLElement, e: MouseEvent) {
      const cardRect = this.getBoundingClientRect();
      
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const deltaX = e.clientX - cardCenterX;
      const deltaY = e.clientY - cardCenterY;
      
      // Calculate rotation based on mouse position
      const rotateY = deltaX / 20;
      const rotateX = -deltaY / 20;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    }
    
    function handleMouseLeave(this: HTMLElement) {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
  }, []);

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${sectionInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            My Projects
          </h2>
          <p className={`section-subtitle mx-auto transition-all duration-700 delay-100 ${sectionInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            A showcase of my coding journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`glass-card rounded-xl overflow-hidden project-card transition-all duration-500 ${sectionInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
              style={{ 
                animationDelay: `${200 + index * 100}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div 
                className="h-48 bg-gradient-to-br from-lofi-primary/30 via-lofi-secondary/20 to-lofi-accent/10 flex items-center justify-center relative overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-500 hover:scale-110 hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="text-2xl font-display font-semibold text-white relative z-10">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-white/70 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white"
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
                    className="text-white/70 hover:text-lofi-primary flex items-center transition-all duration-300 hover:transform hover:translate-x-1"
                  >
                    <Github size={18} className="mr-2" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-lofi-primary flex items-center transition-all duration-300 hover:transform hover:translate-x-1"
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
            ref={magneticButtonRef}
            href="https://github.com/imxenon28" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center magnetic-button transition-all duration-500"
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
