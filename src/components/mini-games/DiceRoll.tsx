
import React, { useState } from 'react';
import { Dices } from 'lucide-react';
import { Button } from "@/components/ui/button";

const DiceRoll = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(6);
  const [rolling, setRolling] = useState(false);
  const [history, setHistory] = useState<{total: number, dice1: number, dice2: number}[]>([]);
  
  const rollDice = () => {
    if (rolling) return;
    
    setRolling(true);
    
    // Animate rolling
    let rollCount = 0;
    const maxRolls = 10;
    const rollInterval = setInterval(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      setDice1(newDice1);
      setDice2(newDice2);
      
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        setRolling(false);
        
        // Add to history
        setHistory(prev => [
          { total: newDice1 + newDice2, dice1: newDice1, dice2: newDice2 },
          ...prev.slice(0, 9) // Keep only the last 10 rolls
        ]);
      }
    }, 100);
  };
  
  const renderDiceFace = (value: number) => {
    switch (value) {
      case 1:
        return (
          <div className="grid place-items-center h-full w-full">
            <div className="h-3 w-3 bg-white rounded-full"></div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-2 place-items-center h-full w-full p-2">
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-3 place-items-center h-full w-full p-1">
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 grid-rows-2 place-items-center h-full w-full p-2">
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-2 grid-rows-2 place-items-center h-full w-full p-2">
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="col-span-2 h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        );
      case 6:
        return (
          <div className="grid grid-cols-2 grid-rows-3 place-items-center h-full w-full p-2">
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-6 mb-6 items-center justify-center">
        <div 
          className={`w-16 h-16 bg-space-red rounded-xl flex items-center justify-center shadow-lg ${
            rolling ? 'animate-bounce' : ''
          }`}
        >
          {renderDiceFace(dice1)}
        </div>
        <div 
          className={`w-16 h-16 bg-space-red rounded-xl flex items-center justify-center shadow-lg ${
            rolling ? 'animate-bounce' : ''
          }`}
        >
          {renderDiceFace(dice2)}
        </div>
      </div>
      
      <div className="text-white text-xl mb-4">
        Total: <span className="font-bold">{dice1 + dice2}</span>
      </div>
      
      <Button 
        onClick={rollDice}
        variant="secondary"
        disabled={rolling}
        className="group mb-6"
      >
        <Dices className="mr-2 h-4 w-4" />
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </Button>
      
      {history.length > 0 && (
        <div className="w-full">
          <h4 className="text-white mb-2 text-sm">Roll History</h4>
          <div className="grid grid-cols-3 gap-1 max-h-24 overflow-y-auto">
            {history.map((roll, i) => (
              <div key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-white">
                {roll.dice1}+{roll.dice2}={roll.total}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiceRoll;
