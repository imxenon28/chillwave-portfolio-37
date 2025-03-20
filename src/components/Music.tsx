
import React, { useState } from 'react';
import { Play, Volume2, Youtube, ExternalLink } from 'lucide-react';

const Music = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  
  const musicVideos = [
    {
      id: 1,
      title: 'Rainy Day Lofi',
      description: 'Relaxing beats to help you focus on a rainy day.',
      embedId: 'jfKfPfyJRdk',
      thumbnail: `https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg`
    },
    {
      id: 2,
      title: 'Late Night Study Session',
      description: 'Perfect beats for those late night study sessions.',
      embedId: '5yx6BWlEVcY',
      thumbnail: `https://img.youtube.com/vi/5yx6BWlEVcY/maxresdefault.jpg`
    },
    {
      id: 3,
      title: 'Sakura Dreams',
      description: 'Japanese-inspired lofi beats with cherry blossom vibes.',
      embedId: 'DWcJFNfaw9c',
      thumbnail: `https://img.youtube.com/vi/DWcJFNfaw9c/maxresdefault.jpg`
    }
  ];

  return (
    <section id="music" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">My Music</h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in delay-100">
            Lofi anime beats to relax and study to
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Featured Video */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in delay-200">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="aspect-video w-full bg-black">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${musicVideos[activeVideo].embedId}`}
                  title={musicVideos[activeVideo].title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {musicVideos[activeVideo].title}
                </h3>
                <p className="text-white/70 mb-4">
                  {musicVideos[activeVideo].description}
                </p>
                <a 
                  href={`https://youtube.com/watch?v=${musicVideos[activeVideo].embedId}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lofi-primary hover:text-lofi-primary/80 flex items-center transition-colors duration-300"
                >
                  <Youtube size={18} className="mr-2" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Video Selection and Music Info */}
          <div className="lg:col-span-1 opacity-0 animate-fade-in delay-300">
            <h3 className="text-xl font-semibold text-white mb-6">
              My Latest Tracks
            </h3>
            
            <div className="space-y-4 mb-10">
              {musicVideos.map((video, index) => (
                <div 
                  key={video.id}
                  className={`glass-card rounded-xl overflow-hidden flex cursor-pointer transition-all duration-300 ${
                    activeVideo === index ? 'border border-lofi-primary/50 bg-white/10' : ''
                  }`}
                  onClick={() => setActiveVideo(index)}
                >
                  <div className="w-24 h-16 md:w-32 md:h-20 relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover"
                    />
                    {activeVideo === index && (
                      <div className="absolute inset-0 bg-lofi-primary/30 flex items-center justify-center">
                        <Play size={20} className="text-white" fill="white" />
                      </div>
                    )}
                  </div>
                  <div className="p-3 flex-1">
                    <h4 className="text-sm font-medium text-white truncate">
                      {video.title}
                    </h4>
                    <p className="text-xs text-white/60 line-clamp-1">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-card rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-lofi-secondary/20 flex items-center justify-center mr-4">
                  <Volume2 size={20} className="text-lofi-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-white">My Music Style</h4>
              </div>
              <p className="text-white/70 mb-4">
                I create lofi beats inspired by anime soundtracks and Japanese culture. My music aims to create a cozy, relaxing atmosphere perfect for studying, reading, or just chilling out.
              </p>
              <p className="text-white/70">
                Influences include Nujabes, Lofi Girl, and various anime composers.
              </p>
            </div>
            
            <a 
              href="https://youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center"
            >
              <Youtube size={18} className="mr-2" />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
