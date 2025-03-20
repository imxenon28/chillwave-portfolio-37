
import React from 'react';
import { Github, Youtube, Instagram, Mail, Facebook, Globe } from 'lucide-react';

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
              href="https://www.youtube.com/@xya.aestify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://www.instagram.com/manisbhusal__28" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/manis.bhusal.5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://x.com/IMXENON28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a 
              href="mailto:contact@manishbhusal.com" 
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/imxenon28" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
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
