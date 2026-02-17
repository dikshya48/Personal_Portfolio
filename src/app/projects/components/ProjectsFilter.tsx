'use client';

import { useState } from 'react';

const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

const ProjectsFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full transition-all ${
            activeCategory === category
              ? 'bg-primary text-white'
              : 'bg-black/40 border border-white/10 text-muted-foreground hover:border-white/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
