
import React from 'react';
import { Github, Youtube, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/30 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-display font-bold text-white">
              Manish<span className="text-lofi-primary">.</span>
            </h2>
            <p className="text-muted-foreground mt-2">Computer Student | Lofi Anime Beat Producer</p>
          </div>
          
          <div className="flex space-x-5">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:contact@manishbhusal.com" 
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Manish Bhusal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
