
import React from 'react';
import { Code, Music, BookOpen, Volleyball } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">About Me</h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in delay-100">
            Get to know me a little better
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Image column */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in-left delay-200">
            <div className="glass-card p-1.5 rounded-2xl overflow-hidden w-full max-w-md mx-auto">
              <div className="rounded-xl overflow-hidden aspect-[4/5]">
                <div className="w-full h-full bg-gradient-to-br from-lofi-primary/20 via-lofi-secondary/20 to-lofi-accent/20 flex items-center justify-center">
                  <span className="font-display text-xl text-white/50">Photo</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-right delay-300">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Hello there! I'm <span className="text-lofi-primary">Manish Bhusal</span>
            </h3>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              I am 18 years old, passionate about technology and music. My journey started with a curiosity about how things work in the digital world, which led me to pursue computer science. Alongside my technical interests, I discovered a love for creating music that helps people relax and focus.
            </p>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              When I'm not coding or producing beats, you'll find me immersed in manga and light novels, or playing volleyball with friends. I believe in the perfect balance between technology and creativity, which is reflected in everything I do.
            </p>
            
            {/* Skills and interests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-card p-6 rounded-xl">
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
              
              <div className="glass-card p-6 rounded-xl">
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
              
              <div className="glass-card p-6 rounded-xl">
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
              
              <div className="glass-card p-6 rounded-xl">
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
