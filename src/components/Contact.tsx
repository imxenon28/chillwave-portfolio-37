
import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
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
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">My Socials</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://youtube.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
                    <Youtube size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">YouTube</h4>
                    <p className="text-white/50 text-sm">Lofi beats & mixes</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">GitHub</h4>
                    <p className="text-white/50 text-sm">Code & projects</p>
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-lofi-primary transition-colors duration-300">Instagram</h4>
                    <p className="text-white/50 text-sm">Photos & updates</p>
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
