
import React from 'react';
import { ContactForm, ContactInfo, SocialLinks } from './contact';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    delay: 300
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    delay: 400
  });

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Animated dots background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-full w-full opacity-20">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-lofi-primary animate-slow-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${sectionInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a question or want to collaborate? Reach out to me!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div 
            ref={formRef} 
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${formInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-10'}`}
          >
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div 
            ref={infoRef}
            className={`lg:col-span-2 transition-all duration-700 delay-400 ${infoInView ? 'opacity-100 transform-none' : 'opacity-0 translate-x-10'}`}
          >
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
