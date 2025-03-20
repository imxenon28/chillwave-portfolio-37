
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { photos, categories } from './photoData';
import PhotoCard from './PhotoCard';
import CategoryFilter from './CategoryFilter';
import { Images, ImageIcon } from 'lucide-react';

const PhotoAlbum = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const filteredPhotos = activeCategory 
    ? photos.filter(photo => photo.category === activeCategory)
    : photos;

  return (
    <section id="photo-album" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            <ImageIcon className="w-8 h-8 text-lofi-primary" />
            <h2 className="text-4xl font-bold text-white">Photo Album</h2>
          </div>
          <p className={`text-xl text-white/70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            A glimpse into my life through pictures
          </p>
        </div>
        
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isInView={inView}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <Images className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/50 text-lg">No photos found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoAlbum;
