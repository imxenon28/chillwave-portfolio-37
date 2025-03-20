
import React, { useState, useEffect } from 'react';
import { RotateCw } from 'lucide-react';
import { Button } from "@/components/ui/button";

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

export default MemoryGame;
