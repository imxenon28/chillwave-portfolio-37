
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
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </AspectRatio>
        {photo.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-2 rounded-b-lg">
            <p className="text-white text-sm font-medium truncate">{photo.caption}</p>
          </div>
        )}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-md border-space-purple/30">
          <div className="relative">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full rounded-lg object-contain max-h-[80vh]"
            />
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
