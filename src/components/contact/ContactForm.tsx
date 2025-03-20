
import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
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
  );
};

export default ContactForm;
