
import React from 'react';
import { Category } from './types';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  isInView: boolean;
}

const CategoryFilter = ({ 
  categories,
  activeCategory,
  setActiveCategory,
  isInView
}: CategoryFilterProps) => {
  return (
    <div 
      className={`flex flex-wrap gap-2 justify-center mb-8 transition-all duration-700 ${
        isInView ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
      }`}
    >
      <button
        onClick={() => setActiveCategory(null)}
        className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === null
            ? 'bg-lofi-primary text-white' 
            : 'bg-white/10 text-white/70 hover:bg-white/20'
        }`}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-lofi-primary text-white' 
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
