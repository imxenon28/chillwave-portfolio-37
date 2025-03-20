
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lofi-primary/10 to-transparent"></div>
      
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute h-full w-full opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-lofi-primary animate-slow-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className={`inline-block mb-4 glass-card px-4 py-2 transition-all duration-700 ${heroInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            <p className="text-sm text-white/80 uppercase tracking-wider">Welcome to my portfolio</p>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-display font-bold text-white transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-6'}`}>
            Manish Bhusal
          </h1>
          
          <div className={`h-px w-24 bg-lofi-primary/50 my-8 transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 transform-none' : 'opacity-0 scale-x-0'}`}></div>
          
          <p className={`text-xl md:text-2xl text-white/80 max-w-3xl transition-all duration-700 delay-300 ${heroInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            Computer Student <span className="inline-block mx-3 text-lofi-primary">|</span> Lofi Anime Beat Producer
          </p>
          
          <div className={`mt-12 transition-all duration-700 delay-400 ${heroInView ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className="btn-secondary group"
            >
              Discover more
              <ArrowDown className="ml-2 inline-block transition-transform group-hover:translate-y-1" size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-700 delay-500 ${heroInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-white/50 text-xs mt-2">Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
