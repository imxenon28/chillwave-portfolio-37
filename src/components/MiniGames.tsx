
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Gamepad2, Trophy, Clock, RotateCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const games = [
  {
    id: 'memory',
    title: 'Memory Match',
    description: 'Test your memory by matching pairs of cards',
    icon: <Trophy className="h-6 w-6 text-space-purple" />,
  },
  {
    id: 'reaction',
    title: 'Reaction Time',
    description: 'Test your reflexes by clicking as fast as possible',
    icon: <Clock className="h-6 w-6 text-space-cyan" />,
  },
];

// Memory Game Component
const MemoryGame = () => {
  const symbols = ['🚀', '🌟', '🌙', '🌎', '👾', '🛸', '🌌', '🪐'];
  const allSymbols = [...symbols, ...symbols];
  const [cards, setCards] = useState<Array<{ symbol: string; flipped: boolean; matched: boolean }>>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  
  // Initialize game
  useEffect(() => {
    resetGame();
  }, []);
  
  const resetGame = () => {
    // Shuffle cards
    const shuffled = [...allSymbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol) => ({ symbol, flipped: false, matched: false }));
    
    setCards(shuffled);
    setFlippedIndices([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameComplete(false);
  };
  
  const handleCardClick = (index: number) => {
    // Prevent clicking if card is already flipped or matched
    if (cards[index].flipped || cards[index].matched) return;
    
    // Prevent more than 2 cards being flipped
    if (flippedIndices.length === 2) return;
    
    // Flip card
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    
    // Add to flipped indices
    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);
    
    // Check for match if two cards are flipped
    if (newFlippedIndices.length === 2) {
      setMoves(m => m + 1);
      
      const [firstIndex, secondIndex] = newFlippedIndices;
      
      if (cards[firstIndex].symbol === cards[secondIndex].symbol) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].matched = true;
          matchedCards[secondIndex].matched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          setMatchedPairs(m => m + 1);
          
          // Check if game is complete
          if (matchedPairs + 1 === symbols.length) {
            setGameComplete(true);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const unflippedCards = [...cards];
          unflippedCards[firstIndex].flipped = false;
          unflippedCards[secondIndex].flipped = false;
          setCards(unflippedCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-4">
        <div className="text-white">Moves: {moves}</div>
        <div className="text-white">Matches: {matchedPairs}/{symbols.length}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-16 h-16 flex items-center justify-center text-2xl rounded-md cursor-pointer transition-all duration-300 ${
              card.flipped || card.matched
                ? "bg-space-purple/20 rotate-0"
                : "bg-space-indigo/40 hover:bg-space-indigo/60 rotate-3"
            } ${card.matched ? "ring-2 ring-space-cyan" : ""} 
            transform perspective-500 hover:scale-105`}
          >
            {(card.flipped || card.matched) && card.symbol}
          </div>
        ))}
      </div>
      
      {gameComplete && (
        <div className="text-center mb-4">
          <div className="text-space-yellow font-semibold text-lg mb-2">Congratulations!</div>
          <div className="text-white">You completed the game in {moves} moves</div>
        </div>
      )}
      
      <Button 
        onClick={resetGame}
        variant="secondary"
        className="group"
      >
        <RotateCw className="mr-2 h-4 w-4 group-hover:animate-spin" />
        Reset Game
      </Button>
    </div>
  );
};

// Reaction Time Game Component
const ReactionGame = () => {
  const [gameState, setGameState] = useState<'waiting' | 'ready' | 'clicked' | 'tooEarly'>('waiting');
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(0);
  const [bestTime, setBestTime] = useState(Infinity);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const startGame = () => {
    setGameState('ready');
    
    // Random time between 1-5 seconds
    const changeTime = 1000 + Math.random() * 4000;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setStartTime(Date.now());
      setGameState('clicked');
    }, changeTime);
  };
  
  const handleClick = () => {
    if (gameState === 'waiting') {
      startGame();
    } else if (gameState === 'ready') {
      // Clicked too early
      setGameState('tooEarly');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } else if (gameState === 'clicked') {
      const currentTime = Date.now();
      const reactionTimeMs = currentTime - startTime;
      setReactionTime(reactionTimeMs);
      
      if (reactionTimeMs < bestTime) {
        setBestTime(reactionTimeMs);
      }
      
      setGameState('waiting');
    } else if (gameState === 'tooEarly') {
      setGameState('waiting');
    }
  };
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-white mb-4">
        {bestTime !== Infinity && (
          <div className="text-center mb-2">
            Best Time: <span className="font-semibold text-space-cyan">{bestTime}ms</span>
          </div>
        )}
        {reactionTime > 0 && (
          <div className="text-center mb-4">
            Last Reaction Time: <span className="font-semibold text-space-purple">{reactionTime}ms</span>
          </div>
        )}
      </div>
      
      <div
        onClick={handleClick}
        className={`w-64 h-48 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 ${
          gameState === 'waiting'
            ? 'bg-space-indigo/40 hover:bg-space-indigo/60'
            : gameState === 'ready'
            ? 'bg-space-red/60'
            : gameState === 'clicked'
            ? 'bg-space-green/60'
            : 'bg-space-orange/60'
        }`}
      >
        <div className="text-white text-center p-4">
          {gameState === 'waiting' && 'Click to start'}
          {gameState === 'ready' && 'Wait for green...'}
          {gameState === 'clicked' && 'Click now!'}
          {gameState === 'tooEarly' && 'Too early! Click to try again.'}
        </div>
      </div>
    </div>
  );
};

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
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-700 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            Mini Games
          </h2>
          <p className={`section-subtitle mx-auto transition-all duration-700 delay-100 ${inView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
            Take a break and enjoy these space-themed mini games
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {games.map((game, index) => (
            <Card 
              key={game.id}
              className={`glass-card border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                inView ? 'opacity-100 transform-none animate-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setActiveGame(activeGame === game.id ? null : game.id)}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-display text-white">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {game.description}
                  </CardDescription>
                </div>
                {game.icon}
              </CardHeader>
              <CardContent className="pt-4">
                {activeGame === game.id && (
                  <div className="animate-scale-in">
                    {game.id === 'memory' && <MemoryGame />}
                    {game.id === 'reaction' && <ReactionGame />}
                  </div>
                )}
                {activeGame !== game.id && (
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Gamepad2 className="mr-2 h-4 w-4" />
                      Play Game
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniGames;
