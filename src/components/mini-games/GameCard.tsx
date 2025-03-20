
import React, { ReactNode } from 'react';
import { Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  activeGame: string | null;
  setActiveGame: (id: string | null) => void;
  isInView: boolean;
  index: number;
  children?: ReactNode;
}

const GameCard = ({ 
  id, 
  title, 
  description, 
  icon, 
  activeGame, 
  setActiveGame, 
  isInView, 
  index,
  children
}: GameCardProps) => {
  const isActive = activeGame === id;
  
  return (
    <Card 
      className={`border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden ${
        isInView ? 'opacity-100 transform-none animate-fade-in' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-white/70">
            {description}
          </CardDescription>
        </div>
        {icon}
      </CardHeader>
      <CardContent className="pt-4">
        {isActive ? (
          <div className="animate-scale-in">
            {children}
          </div>
        ) : (
          <div className="flex justify-center">
            <Button 
              onClick={() => setActiveGame(id)}
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <Gamepad2 className="mr-2 h-4 w-4" />
              Play Game
            </Button>
          </div>
        )}
      </CardContent>
      {isActive && (
        <CardFooter className="flex justify-center pt-2 pb-4">
          <Button 
            onClick={() => setActiveGame(null)}
            variant="ghost" 
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            Close Game
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default GameCard;
