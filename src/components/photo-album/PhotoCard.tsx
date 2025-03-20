
import React, { useState } from 'react';
import { Photo } from './types';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface PhotoCardProps {
  photo: Photo;
  index: number;
  isInView: boolean;
}

const PhotoCard = ({ photo, index, isInView }: PhotoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div
        className={`glass-card p-1.5 rounded-xl overflow-hidden transition-all duration-500 transform cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-lofi-primary/20 h-full`}
        style={{ 
          transitionDelay: `${150 * (index % 8)}ms`,
        }}
        onClick={() => setIsOpen(true)}
      >
        <AspectRatio ratio={1}>
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg">
              <p className="text-white/70 text-sm">Image not found</p>
            </div>
          ) : (
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
              <div className="w-8 h-8 border-4 border-t-lofi-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </AspectRatio>
        {photo.caption && imageLoaded && !imageError && (
          <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-2 rounded-b-lg">
            <p className="text-white text-sm font-medium truncate">{photo.caption}</p>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-md border-space-purple/30">
          <div className="relative">
            {imageError ? (
              <div className="w-full h-64 flex items-center justify-center bg-gray-800 rounded-lg">
                <p className="text-white/70">Failed to load image</p>
              </div>
            ) : (
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full rounded-lg object-contain max-h-[80vh]"
                onError={() => setImageError(true)}
              />
            )}
            {photo.caption && (
              <div className="mt-4">
                <p className="text-white text-lg font-medium">{photo.caption}</p>
                {photo.category && (
                  <p className="text-white/70 text-sm">{photo.category}</p>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoCard;
