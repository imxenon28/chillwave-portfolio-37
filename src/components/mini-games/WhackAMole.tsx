
import React, { useState, useEffect, useRef } from 'react';
import { RotateCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhackAMole = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [activeMole, setActiveMole] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const moleTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameOver(false);
    spawnMole();
    
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  
  const endGame = () => {
    setGameActive(false);
    setGameOver(true);
    setActiveMole(null);
    
    if (score > highScore) {
      setHighScore(score);
    }
    
    if (timerRef.current) clearInterval(timerRef.current);
    if (moleTimerRef.current) clearTimeout(moleTimerRef.current);
  };
  
  const spawnMole = () => {
    if (!gameActive) return;
    
    if (moleTimerRef.current) clearTimeout(moleTimerRef.current);
    
    // Random position (0-8 for a 3x3 grid)
    setActiveMole(Math.floor(Math.random() * 9));
    
    // Random time between 800ms and 1500ms
    const nextSpawnTime = Math.random() * 700 + 800;
    moleTimerRef.current = setTimeout(() => {
      setActiveMole(null);
      
      // Wait a bit before spawning the next mole
      moleTimerRef.current = setTimeout(spawnMole, 300);
    }, nextSpawnTime);
  };
  
  const whackMole = (index: number) => {
    if (!gameActive || activeMole !== index) return;
    
    // Increment score
    setScore(prev => prev + 1);
    
    // Hide the mole
    setActiveMole(null);
    
    // Spawn next mole with a slight delay
    if (moleTimerRef.current) clearTimeout(moleTimerRef.current);
    moleTimerRef.current = setTimeout(spawnMole, 300);
  };
  
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (moleTimerRef.current) clearTimeout(moleTimerRef.current);
    };
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-4">
        <div className="text-white">Score: {score}</div>
        <div className="text-white">Time: {timeLeft}s</div>
        {highScore > 0 && <div className="text-white">High Score: {highScore}</div>}
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            onClick={() => whackMole(index)}
            className={`w-16 h-16 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ${
              activeMole === index 
                ? "bg-space-green scale-110 shadow-lg shadow-space-green/40" 
                : "bg-space-indigo/20 hover:bg-space-indigo/30"
            }`}
          >
            {activeMole === index && (
              <div className="text-2xl animate-bounce">🐹</div>
            )}
          </div>
        ))}
      </div>
      
      {!gameActive && !gameOver && (
        <Button 
          onClick={startGame}
          variant="secondary"
          className="group"
        >
          Start Game
        </Button>
      )}
      
      {gameOver && (
        <div className="text-center mb-4">
          <div className="text-space-yellow font-semibold text-lg mb-2">Game Over!</div>
          <div className="text-white mb-4">Final Score: {score}</div>
          <Button 
            onClick={startGame}
            variant="secondary"
            className="group"
          >
            <RotateCw className="mr-2 h-4 w-4 group-hover:animate-spin" />
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default WhackAMole;
