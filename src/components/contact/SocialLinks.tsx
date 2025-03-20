
import React from 'react';
import { Youtube, Instagram, Facebook } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="glass-card rounded-xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white mb-6">My Socials</h3>
      
      <div className="space-y-4">
        <a 
          href="https://www.youtube.com/@xya.aestify" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center group"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
            <Youtube size={18} className="text-white" />
          </div>
          <div>
            <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">YouTube</h4>
            <p className="text-white/50 text-sm">@xya.aestify</p>
          </div>
        </a>
        
        <a 
          href="https://www.instagram.com/manisbhusal__28" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center group"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
            <Instagram size={18} className="text-white" />
          </div>
          <div>
            <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">Instagram</h4>
            <p className="text-white/50 text-sm">@manisbhusal__28</p>
          </div>
        </a>
        
        <a 
          href="https://www.facebook.com/manis.bhusal.5" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center group"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
            <Facebook size={18} className="text-white" />
          </div>
          <div>
            <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">Facebook</h4>
            <p className="text-white/50 text-sm">manis.bhusal.5</p>
          </div>
        </a>
        
        <a 
          href="https://open.spotify.com/user/31qycgdjgatxw4b74lrqivyp5lxq" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center group"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 11.2A5.6 5.6 0 0 1 15.5 8"></path>
              <path d="M7 13.5A7 7 0 0 1 17 10"></path>
              <path d="M8.5 16.5a9 9 0 0 1 7.5-3"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">Spotify</h4>
            <p className="text-white/50 text-sm">My playlists</p>
          </div>
        </a>
        
        <a 
          href="https://x.com/IMXENON28" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center group"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">Twitter</h4>
            <p className="text-white/50 text-sm">@IMXENON28</p>
          </div>
        </a>
        
        <a 
          href="https://www.threads.net/@manisbhusal" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center group"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M19 7.5c-1-1-2.5-1.5-4-1.5-2.5 0-5 2-6.5 2S4 7 4 7"></path>
              <path d="M9 10.5V15"></path>
              <path d="M16 10.5V15"></path>
              <path d="M12 10.5V21"></path>
              <path d="M4 12.5C4 18 8 22 12 22s8-4 8-9.5c0-1-.5-2-1-3"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">Threads</h4>
            <p className="text-white/50 text-sm">@manisbhusal</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
