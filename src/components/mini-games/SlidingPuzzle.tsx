
import React, { useState, useEffect } from 'react';
import { RotateCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SlidingPuzzle = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [emptyIndex, setEmptyIndex] = useState(8);
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);
  
  const initializePuzzle = () => {
    let numbers = Array.from({ length: 8 }, (_, i) => i + 1);
    numbers.push(0); // Empty tile
    
    // Shuffle the puzzle (make sure it's solvable)
    let shuffled = shuffleTiles(numbers);
    setTiles(shuffled);
    setEmptyIndex(shuffled.indexOf(0));
    setMoves(0);
    setSolved(false);
  };
  
  // Fisher-Yates shuffle (ensuring the puzzle is solvable)
  const shuffleTiles = (array: number[]) => {
    let currentArray = [...array];
    let m = currentArray.length;
    
    // Shuffle
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [currentArray[m], currentArray[i]] = [currentArray[i], currentArray[m]];
    }
    
    // Check if solvable
    if (!isSolvable(currentArray)) {
      // Swap the first two tiles to make it solvable
      [currentArray[0], currentArray[1]] = [currentArray[1], currentArray[0]];
    }
    
    return currentArray;
  };
  
  // Check if the puzzle is solvable
  const isSolvable = (puzzle: number[]) => {
    // Count inversions
    let inversions = 0;
    for (let i = 0; i < puzzle.length; i++) {
      if (puzzle[i] === 0) continue;
      
      for (let j = i + 1; j < puzzle.length; j++) {
        if (puzzle[j] === 0) continue;
        if (puzzle[i] > puzzle[j]) {
          inversions++;
        }
      }
    }
    
    // For a 3x3 puzzle, if the number of inversions is even, it's solvable
    return inversions % 2 === 0;
  };
  
  const checkIfSolved = (currentTiles: number[]) => {
    for (let i = 0; i < 8; i++) {
      if (currentTiles[i] !== i + 1) return false;
    }
    return currentTiles[8] === 0;
  };
  
  const moveTile = (index: number) => {
    if (solved) return;
    
    // Check if the tile can be moved (adjacent to empty tile)
    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;
    
    // Check if tile is adjacent to empty space (not diagonal)
    const isAdjacent = 
      (row === emptyRow && Math.abs(col - emptyCol) === 1) || 
      (col === emptyCol && Math.abs(row - emptyRow) === 1);
    
    if (!isAdjacent) return;
    
    // Move the tile
    const newTiles = [...tiles];
    newTiles[emptyIndex] = newTiles[index];
    newTiles[index] = 0;
    
    setTiles(newTiles);
    setEmptyIndex(index);
    setMoves(prev => prev + 1);
    
    // Check if puzzle is solved
    if (checkIfSolved(newTiles)) {
      setSolved(true);
    }
  };
  
  // Initialize the puzzle on first render
  useEffect(() => {
    initializePuzzle();
  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-white mb-4">
        Moves: <span className="font-semibold">{moves}</span>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {tiles.map((tile, index) => (
          <div
            key={index}
            onClick={() => moveTile(index)}
            className={`w-16 h-16 flex items-center justify-center text-xl font-bold rounded-md cursor-pointer transition-all duration-300 ${
              tile === 0 
                ? "bg-transparent" 
                : "bg-space-purple/50 hover:bg-space-purple/70"
            } ${
              tile === index + 1 ? "ring-2 ring-space-cyan/50" : ""
            }`}
          >
            {tile !== 0 && tile}
          </div>
        ))}
      </div>
      
      {solved && (
        <div className="text-center mb-4">
          <div className="text-space-yellow font-semibold text-lg mb-2">Puzzle Solved!</div>
          <div className="text-white mb-4">Completed in {moves} moves</div>
        </div>
      )}
      
      <Button 
        onClick={initializePuzzle}
        variant="secondary"
        className="group"
      >
        <RotateCw className="mr-2 h-4 w-4 group-hover:animate-spin" />
        New Puzzle
      </Button>
    </div>
  );
};

export default SlidingPuzzle;
