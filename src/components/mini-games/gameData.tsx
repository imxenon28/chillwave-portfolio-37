
import React from 'react';
import { Trophy, Clock } from 'lucide-react';
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
];
