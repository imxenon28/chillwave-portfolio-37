
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Music from '../components/Music';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Preload critical background elements
  useEffect(() => {
    const preloadBackgroundImages = () => {
      // Preload any critical background images here if needed
    };
    
    preloadBackgroundImages();
  }, []);

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
    </div>
  );
};

export default Index;
