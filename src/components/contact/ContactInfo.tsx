
import React from 'react';
import { Mail, Globe } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card rounded-xl p-6 md:p-8 mb-6">
      <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="mt-1 w-10 h-10 rounded-full bg-lofi-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
            <Mail size={18} className="text-lofi-primary" />
          </div>
          <div>
            <h4 className="text-white/90 font-medium mb-1">Email</h4>
            <a 
              href="mailto:manisbhusal187@gmail.com" 
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
            >
              manisbhusal187@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mt-1 w-10 h-10 rounded-full bg-lofi-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
            <Globe size={18} className="text-lofi-primary" />
          </div>
          <div>
            <h4 className="text-white/90 font-medium mb-1">Website</h4>
            <a 
              href="https://merocinema.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
            >
              merocinema.vercel.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
