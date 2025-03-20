
import React, { useEffect, useRef } from 'react';
import { Code, Music, BookOpen, Volleyball } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  // Create refs for animation elements
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 300
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    delay: 400
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 500
  });

  return (
    <section 
      id="about" 
      className="py-24 relative"
      ref={sectionRef}
    >
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-full w-full opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-lofi-secondary animate-slow-pulse"
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
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Get to know me a little better
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Image column */}
          <div 
            ref={imageRef}
            className={`lg:col-span-2 transition-all duration-700 delay-300 ${imageInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="glass-card p-1.5 rounded-2xl overflow-hidden w-full max-w-md mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-lofi-primary/10">
              <div className="rounded-xl overflow-hidden aspect-[4/5]">
                <img 
                  src="/lovable-uploads/83a4ed44-803c-407b-ad05-81a40e151fcc.png"
                  alt="Manish Bhusal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div 
            ref={contentRef}
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${contentInView ? 'opacity-100 transform-none' : 'opacity-0 translate-x-10'}`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6 relative">
              Hello there! I'm <span className="text-lofi-primary">Manish Bhusal</span>
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-lofi-primary/30 rounded-full"></span>
            </h3>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              I am 18 years old, passionate about technology and music. My journey started with a curiosity about how things work in the digital world, which led me to pursue computer science. Alongside my technical interests, I discovered a love for creating music that helps people relax and focus.
            </p>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              When I'm not coding or producing beats, you'll find me immersed in manga and light novels, or playing volleyball with friends. I believe in the perfect balance between technology and creativity, which is reflected in everything I do.
            </p>
            
            {/* Skills and interests */}
            <div 
              ref={skillsRef}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 transition-all duration-700 delay-500 ${skillsInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            >
              <div className="glass-card p-6 rounded-xl transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-lofi-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-lofi-primary/20 flex items-center justify-center mr-4">
                    <Code size={20} className="text-lofi-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Technical Skills</h4>
                </div>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-primary rounded-full mr-2"></span>
                    HTML & CSS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-primary rounded-full mr-2"></span>
                    JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-primary rounded-full mr-2"></span>
                    C Programming
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-primary rounded-full mr-2"></span>
                    C++
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-xl transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-lofi-secondary/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-lofi-secondary/20 flex items-center justify-center mr-4">
                    <Music size={20} className="text-lofi-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Music Production</h4>
                </div>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-secondary rounded-full mr-2"></span>
                    Lofi Composition
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-secondary rounded-full mr-2"></span>
                    Anime-inspired Beats
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-secondary rounded-full mr-2"></span>
                    Sound Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-secondary rounded-full mr-2"></span>
                    Audio Mixing
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-xl transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-lofi-accent/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-lofi-accent/20 flex items-center justify-center mr-4">
                    <BookOpen size={20} className="text-lofi-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Reading Interests</h4>
                </div>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-accent rounded-full mr-2"></span>
                    Manga
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-accent rounded-full mr-2"></span>
                    Light Novels
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-accent rounded-full mr-2"></span>
                    Technical Books
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-xl transform transition-all duration-500 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-lofi-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-lofi-primary/20 flex items-center justify-center mr-4">
                    <Volleyball size={20} className="text-lofi-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Sports</h4>
                </div>
                <ul className="text-white/70 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-lofi-primary rounded-full mr-2"></span>
                    Volleyball
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
