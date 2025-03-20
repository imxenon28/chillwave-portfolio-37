
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { photos, categories } from './photo-album/photoData';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PhotoCard from './photo-album/PhotoCard';
import CategoryFilter from './photo-album/CategoryFilter';
import { Gallery, ImageIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotoAlbumPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const filteredPhotos = activeCategory 
    ? photos.filter(photo => photo.category === activeCategory)
    : photos;

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

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Star field background */}
      <div className="star-field fixed inset-0 pointer-events-none z-[-1]">
        {generateStars()}
      </div>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="py-12 relative" ref={ref}>
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="text-center mb-12">
              <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
                <ImageIcon className="w-8 h-8 text-lofi-primary" />
                <h1 className="text-4xl font-bold text-white">My Photo Album</h1>
              </div>
              <p className={`text-xl text-white/70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
                A collection of memories and moments from my life
              </p>
            </div>
            
            <CategoryFilter 
              categories={categories} 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              isInView={inView}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <PhotoCard 
                  key={photo.id} 
                  photo={photo} 
                  index={index}
                  isInView={inView}
                />
              ))}
            </div>
            
            {filteredPhotos.length === 0 && (
              <div className="text-center py-16">
                <Gallery className="w-16 h-16 text-white/30 mx-auto mb-4" />
                <p className="text-white/50 text-lg">No photos found in this category</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PhotoAlbumPage;
