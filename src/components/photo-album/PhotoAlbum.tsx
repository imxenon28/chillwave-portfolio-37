
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { photos, categories } from './photoData';
import PhotoCard from './PhotoCard';
import CategoryFilter from './CategoryFilter';
import { Images, ImageIcon } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const PhotoAlbum = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Add loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const filteredPhotos = activeCategory 
    ? photos.filter(photo => photo.category === activeCategory)
    : photos;

  // Log to help debug
  console.log('Photos available:', photos.length);
  console.log('Filtered photos:', filteredPhotos.length);
  console.log('Active category:', activeCategory);

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
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-t-lofi-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredPhotos.length > 0 ? (
          <div className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {filteredPhotos.map((photo, index) => (
                  <CarouselItem key={photo.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <PhotoCard 
                      photo={photo} 
                      index={index}
                      isInView={inView}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-black/30 hover:bg-black/50 border-space-purple/30" />
              <CarouselNext className="right-2 bg-black/30 hover:bg-black/50 border-space-purple/30" />
            </Carousel>
          </div>
        ) : (
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
