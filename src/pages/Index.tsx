
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Music from '../components/Music';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-lofi-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Music />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-lofi-primary/80 hover:bg-lofi-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
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
