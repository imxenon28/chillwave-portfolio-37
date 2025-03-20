
import React from 'react';
import { ContactForm, ContactInfo, SocialLinks } from './contact';

const Contact = () => {
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
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in-right delay-300">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
