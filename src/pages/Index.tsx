
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Music from '../components/Music';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Generate random stars for the star field
  const generateStars = () => {
    const stars = [];
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 3;
      const animationDelay = `${Math.random() * 3}s`;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const opacity = Math.random() * 0.8 + 0.2;
      
      stars.push(
        <div
          key={i}
          className="star animate-star-twinkle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left,
            top,
            opacity,
            animationDelay,
            boxShadow: size > 1.8 ? `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.8)` : 'none'
          }}
        />
      );
    }
    
    return stars;
  };
  
  // Generate random meteors for animation
  const generateMeteors = () => {
    const meteors = [];
    const meteorCount = 5;
    
    for (let i = 0; i < meteorCount; i++) {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 40}%`;
      const animationDelay = `${Math.random() * 10}s`;
      const animationDuration = `${Math.random() * 3 + 2}s`;
      
      meteors.push(
        <div
          key={i}
          className="meteor animate-meteor"
          style={{
            left,
            top,
            animationDelay,
            animationDuration
          }}
        />
      );
    }
    
    return meteors;
  };
  
  // Generate floating planets
  const generatePlanets = () => {
    const planets = [
      {
        size: 60,
        color: 'bg-space-purple/30',
        top: '20%',
        left: '10%',
        animationDelay: '0s'
      },
      {
        size: 30,
        color: 'bg-space-blue/30',
        top: '60%',
        left: '80%',
        animationDelay: '1s'
      },
      {
        size: 45,
        color: 'bg-space-teal/30',
        top: '80%',
        left: '25%',
        animationDelay: '2s'
      }
    ];
    
    return planets.map((planet, i) => (
      <div
        key={i}
        className={`planet ${planet.color} animate-space-float backdrop-blur-sm border border-white/10`}
        style={{
          width: `${planet.size}px`,
          height: `${planet.size}px`,
          top: planet.top,
          left: planet.left,
          animationDelay: planet.animationDelay
        }}
      />
    ));
  };

  // Preload critical background elements
  useEffect(() => {
    const preloadBackgroundImages = () => {
      // Preload any critical background images here if needed
    };
    
    preloadBackgroundImages();
    
    // Show/hide scroll-to-top button based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 500);
    };
    
    // Add smooth hover effect to all interactive elements
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      
      interactiveElements.forEach(element => {
        element.classList.add('hover:transform-gpu', 'hover:scale-105', 'transition-transform', 'duration-300');
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Apply hover effects after DOM is fully loaded
    setTimeout(addHoverEffects, 1000);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Custom cursor - now disabled */}
      <CustomCursor />
      
      {/* Star field background */}
      <div className="star-field fixed inset-0 pointer-events-none z-[-1]">
        {generateStars()}
        {generateMeteors()}
        {generatePlanets()}
      </div>
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <div className="space-y-0"> {/* Removed spacing between sections */}
          <About />
          <Projects />
          <Music />
          <Contact />
        </div>
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-space-purple/80 hover:bg-space-purple text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-10'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
