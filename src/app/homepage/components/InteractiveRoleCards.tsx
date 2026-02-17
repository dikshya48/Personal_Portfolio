'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const roles = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Building responsive and interactive user interfaces',
    icon: 'CodeBracketIcon',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Creating robust and scalable server-side solutions',
    icon: 'BriefcaseIcon',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    description: 'End-to-end development from concept to deployment',
    icon: 'SparklesIcon',
    color: 'from-green-500 to-emerald-500',
  },
];

const InteractiveRoleCards = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`relative p-8 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                hoveredId === role.id
                  ? 'scale-105 border-primary shadow-lg shadow-primary/20'
                  : 'hover:border-white/20'
              }`}
              onMouseEnter={() => setHoveredId(role.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center mb-6`}
              >
                <Icon name={role.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{role.title}</h3>
              <p className="text-muted-foreground">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveRoleCards;
