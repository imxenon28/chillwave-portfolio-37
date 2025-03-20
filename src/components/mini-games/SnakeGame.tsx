
import React, { useState, useEffect, useRef } from 'react';
import { RotateCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 15;
const CELL_SIZE = 20;
const GAME_SPEED = 150;

const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 7, y: 7 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const directionRef = useRef(direction);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  
  // Set up the game
  const startGame = () => {
    // Reset game state
    setSnake([{ x: 7, y: 7 }]);
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    placeFood();
    setGameOver(false);
    setGameActive(true);
    setScore(0);
    
    // Start game loop
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
    
    // Focus game area for keyboard controls
    if (gameAreaRef.current) {
      gameAreaRef.current.focus();
    }
  };
  
  // Randomly place food
  const placeFood = () => {
    const newFood: Position = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    
    // Make sure food doesn't spawn on the snake
    if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      placeFood();
    } else {
      setFood(newFood);
    }
  };
  
  // Update snake position
  const moveSnake = () => {
    setSnake(prevSnake => {
      const head = { ...prevSnake[0] };
      
      // Move head based on direction
      switch (directionRef.current) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }
      
      // Check wall collision
      if (
        head.x < 0 || 
        head.x >= GRID_SIZE || 
        head.y < 0 || 
        head.y >= GRID_SIZE
      ) {
        endGame();
        return prevSnake;
      }
      
      // Check self collision
      if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        endGame();
        return prevSnake;
      }
      
      // Create new snake body
      const newSnake = [head, ...prevSnake];
      
      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 1);
        placeFood();
      } else {
        // Remove tail
        newSnake.pop();
      }
      
      return newSnake;
    });
  };
  
  // End the game
  const endGame = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setGameActive(false);
    setGameOver(true);
    
    // Update high score
    if (score > highScore) {
      setHighScore(score);
    }
  };
  
  // Handle keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!gameActive) return;
    
    switch (e.key) {
      case 'ArrowUp':
        if (directionRef.current !== 'DOWN') {
          setDirection('UP');
          directionRef.current = 'UP';
        }
        break;
      case 'ArrowDown':
        if (directionRef.current !== 'UP') {
          setDirection('DOWN');
          directionRef.current = 'DOWN';
        }
        break;
      case 'ArrowLeft':
        if (directionRef.current !== 'RIGHT') {
          setDirection('LEFT');
          directionRef.current = 'LEFT';
        }
        break;
      case 'ArrowRight':
        if (directionRef.current !== 'LEFT') {
          setDirection('RIGHT');
          directionRef.current = 'RIGHT';
        }
        break;
    }
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, []);
  
  // Render a cell of the game (snake, food, or empty)
  const renderCell = (x: number, y: number) => {
    // Check if cell contains snake
    const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y;
    const isSnakeBody = snake.some((segment, index) => 
      index > 0 && segment.x === x && segment.y === y
    );
    
    // Check if cell contains food
    const isFood = food.x === x && food.y === y;
    
    return (
      <div
        key={`${x}-${y}`}
        className={`w-5 h-5 border border-white/10 ${
          isSnakeHead ? 'bg-space-indigo' : 
          isSnakeBody ? 'bg-space-purple' : 
          isFood ? 'bg-space-green rounded-full' : 
          'bg-white/5'
        }`}
      />
    );
  };
  
  // Render game board
  const renderGameBoard = () => {
    const board = [];
    
    for (let y = 0; y < GRID_SIZE; y++) {
      const row = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        row.push(renderCell(x, y));
      }
      board.push(
        <div key={y} className="flex">
          {row}
        </div>
      );
    }
    
    return board;
  };
  
  // Render direction controls for mobile
  const renderControls = () => {
    return (
      <div className="grid grid-cols-3 gap-1 mt-4">
        <div className="col-span-1"></div>
        <button 
          className="bg-white/10 rounded p-2 flex justify-center"
          onClick={() => {
            if (directionRef.current !== 'DOWN' && gameActive) {
              setDirection('UP');
              directionRef.current = 'UP';
            }
          }}
        >
          ↑
        </button>
        <div className="col-span-1"></div>
        
        <button 
          className="bg-white/10 rounded p-2 flex justify-center"
          onClick={() => {
            if (directionRef.current !== 'RIGHT' && gameActive) {
              setDirection('LEFT');
              directionRef.current = 'LEFT';
            }
          }}
        >
          ←
        </button>
        <div className="col-span-1"></div>
        <button 
          className="bg-white/10 rounded p-2 flex justify-center"
          onClick={() => {
            if (directionRef.current !== 'LEFT' && gameActive) {
              setDirection('RIGHT');
              directionRef.current = 'RIGHT';
            }
          }}
        >
          →
        </button>
        
        <div className="col-span-1"></div>
        <button 
          className="bg-white/10 rounded p-2 flex justify-center"
          onClick={() => {
            if (directionRef.current !== 'UP' && gameActive) {
              setDirection('DOWN');
              directionRef.current = 'DOWN';
            }
          }}
        >
          ↓
        </button>
        <div className="col-span-1"></div>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col items-center" 
      ref={gameAreaRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}>
      <div className="flex justify-between w-full mb-4">
        <div className="text-white">Score: {score}</div>
        {highScore > 0 && <div className="text-white">Best: {highScore}</div>}
      </div>
      
      <div className="border border-white/20 bg-black/20 p-1 mb-4">
        {renderGameBoard()}
      </div>
      
      {renderControls()}
      
      {!gameActive && !gameOver && (
        <Button 
          onClick={startGame}
          variant="secondary"
          className="mt-4"
        >
          Start Game
        </Button>
      )}
      
      {gameOver && (
        <div className="text-center mt-4">
          <div className="text-space-yellow font-semibold text-lg mb-2">Game Over!</div>
          <div className="text-white mb-4">Your Score: {score}</div>
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

export default SnakeGame;
