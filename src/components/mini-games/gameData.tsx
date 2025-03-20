
import React from 'react';
import { Trophy, Clock, Target, Puzzle, Dices, Gamepad2 } from 'lucide-react';
import { Game } from './types';

export const games: Game[] = [
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
  {
    id: 'whack',
    title: 'Whack-A-Mole',
    description: 'Click on the moles as they appear to score points',
    icon: <Target className="h-6 w-6 text-space-yellow" />,
  },
  {
    id: 'puzzle',
    title: 'Sliding Puzzle',
    description: 'Arrange the tiles in the correct order by sliding them',
    icon: <Puzzle className="h-6 w-6 text-space-green" />,
  },
  {
    id: 'dice',
    title: 'Dice Roll',
    description: 'Roll the dice and test your luck',
    icon: <Dices className="h-6 w-6 text-space-red" />,
  },
  {
    id: 'snake',
    title: 'Snake Game',
    description: 'Control the snake and eat food to grow longer',
    icon: <Gamepad2 className="h-6 w-6 text-space-indigo" />,
  }
];
