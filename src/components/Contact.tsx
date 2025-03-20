
import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, Youtube, Globe, Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Get In Touch</h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in delay-100">
            Have a question or want to collaborate? Reach out to me!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-left delay-200">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="text-white/80 text-sm mb-2 block">Your Name</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-lofi-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-white/80 text-sm mb-2 block">Your Email</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-lofi-primary/50"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-white/80 text-sm mb-2 block">Your Message</label>
                    <div className="relative">
                      <div className="absolute left-3 top-3.5 text-white/50">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-lofi-primary/50"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {loading ? (
                        <div className="h-5 w-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in-right delay-300">
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
                      href="mailto:contact@manishbhusal.com" 
                      className="text-white/70 hover:text-lofi-primary transition-colors duration-300"
                    >
                      contact@manishbhusal.com
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
