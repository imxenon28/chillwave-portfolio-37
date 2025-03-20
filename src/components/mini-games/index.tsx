
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import GameCard from './GameCard';
import MemoryGame from './MemoryGame';
import ReactionGame from './ReactionGame';
import { games } from './gameData';

const MiniGames = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="mini-games" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-4 transition-all duration-700 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            Mini Games
          </h2>
          <p className={`text-xl text-white/70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            Take a break and enjoy these space-themed mini games
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {games.map((game, index) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              description={game.description}
              icon={game.icon}
              activeGame={activeGame}
              setActiveGame={setActiveGame}
              isInView={inView}
              index={index}
            >
              {activeGame === game.id && (
                <>
                  {game.id === 'memory' && <MemoryGame />}
                  {game.id === 'reaction' && <ReactionGame />}
                </>
              )}
            </GameCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniGames;
