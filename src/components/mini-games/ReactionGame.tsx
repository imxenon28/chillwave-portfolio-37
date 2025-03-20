
import React, { useState, useEffect, useRef } from 'react';

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

export default ReactionGame;
