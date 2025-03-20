
import React, { useState, useEffect } from 'react';
import { Play, Volume2, Youtube, ExternalLink, RefreshCw } from 'lucide-react';
import { fetchChannelVideos, YouTubeVideo, searchChannelByUsername } from '../services/youtubeService';
import { useQuery } from '@tanstack/react-query';

const Music = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [channelId, setChannelId] = useState<string | null>(null);
  
  // Try to find the channel ID from the username first
  useEffect(() => {
    const getChannelId = async () => {
      const id = await searchChannelByUsername('xya.aestify');
      setChannelId(id);
    };
    
    getChannelId();
  }, []);
  
  // Fetch videos using react-query
  const { data: videos, isLoading, error, refetch } = useQuery({
    queryKey: ['youtubeVideos', channelId],
    queryFn: async () => {
      if (!channelId) return [];
      return await fetchChannelVideos(channelId, 5);
    },
    enabled: !!channelId,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
  
  // Fallback videos in case the API fails
  const fallbackVideos = [
    {
      id: 'aJJfG3LtTbE',
      title: 'Simple XYA Lofi Beats',
      description: 'Relaxing lofi beats for studying and chill vibes',
      thumbnail: `https://img.youtube.com/vi/aJJfG3LtTbE/maxresdefault.jpg`,
      publishedAt: new Date().toISOString()
    },
    {
      id: 'LvNBbYPUGvs',
      title: 'Gentle Days - Lofi & Chill Mix',
      description: 'Perfect beats for relaxing and unwinding',
      thumbnail: `https://img.youtube.com/vi/LvNBbYPUGvs/maxresdefault.jpg`,
      publishedAt: new Date().toISOString()
    },
    {
      id: 'gAYA0y8vGPQ',
      title: 'Nighttime Lofi Study Session',
      description: 'Late night study vibes with calming beats',
      thumbnail: `https://img.youtube.com/vi/gAYA0y8vGPQ/maxresdefault.jpg`,
      publishedAt: new Date().toISOString()
    }
  ];

  // Use fetched videos if available, otherwise use fallback
  const musicVideos = videos && videos.length > 0 ? videos : fallbackVideos;

  return (
    <section id="music" className="py-12 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="section-container relative z-10 py-12">
        <div className="text-center mb-8">
          <h2 className="section-title opacity-0 animate-fade-in">My Music</h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in delay-100 mb-8">
            Lofi anime beats to relax and study to
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Video */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in delay-200">
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="aspect-video w-full bg-black relative">
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="h-10 w-10 border-t-2 border-lofi-primary rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <iframe 
                    className="w-full h-full absolute top-0 left-0"
                    src={`https://www.youtube.com/embed/${musicVideos[activeVideo]?.id || ''}?rel=0`}
                    title={musicVideos[activeVideo]?.title || ''}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {musicVideos[activeVideo]?.title || 'Loading...'}
                </h3>
                <p className="text-white/70 mb-4">
                  {musicVideos[activeVideo]?.description || ''}
                </p>
                <div className="flex justify-between items-center">
                  <a 
                    href={`https://youtube.com/watch?v=${musicVideos[activeVideo]?.id}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lofi-primary hover:text-lofi-primary/80 flex items-center transition-colors duration-300 btn-hover-effect"
                  >
                    <Youtube size={18} className="mr-2" />
                    <span>Watch on YouTube</span>
                  </a>
                  
                  {error && (
                    <button 
                      onClick={() => refetch()} 
                      className="text-lofi-secondary hover:text-lofi-secondary/80 flex items-center transition-colors duration-300"
                      aria-label="Retry loading videos"
                    >
                      <RefreshCw size={18} className="mr-2" />
                      <span>Retry</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Selection and Music Info */}
          <div className="lg:col-span-1 opacity-0 animate-fade-in delay-300">
            <h3 className="text-xl font-semibold text-white mb-4">
              My Latest Tracks
            </h3>
            
            {isLoading ? (
              <div className="space-y-3 mb-6">
                {[1, 2, 3].map((placeholder) => (
                  <div key={placeholder} className="glass-card rounded-xl overflow-hidden flex animate-pulse">
                    <div className="w-24 h-16 md:w-32 md:h-20 bg-white/5"></div>
                    <div className="p-3 flex-1">
                      <div className="h-4 bg-white/5 rounded mb-2 w-3/4"></div>
                      <div className="h-3 bg-white/5 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3 mb-6">
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
            )}
            
            <div className="glass-card rounded-xl p-4 mb-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-lofi-secondary/20 flex items-center justify-center mr-4">
                  <Volume2 size={20} className="text-lofi-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-white">My Music Style</h4>
              </div>
              <p className="text-white/70 mb-2">
                I create lofi beats inspired by anime soundtracks and Japanese culture. My music aims to create a cozy, relaxing atmosphere perfect for studying, reading, or just chilling out.
              </p>
              <p className="text-white/70">
                Influences include Nujabes, Lofi Girl, and various anime composers.
              </p>
            </div>
            
            <a 
              href="https://www.youtube.com/@xya.aestify" 
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
