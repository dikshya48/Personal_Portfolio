'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const designerSkills = ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems'];
const developerSkills = ['Python', 'C++', 'JavaScript', 'C#', 'React', 'TypeScript', 'NestJS', 'Node.js', 'SQL', 'TensorFlow', 'PyTorch', 'OpenCV', 'Computer Vision', 'Pandas', 'NumPy', 'Matplotlib', 'Vector Databases'];

const SkillsMap = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="min-h-screen pt-28 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="font-fraunces text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Skills
          </h1>
        </motion.div>

        <div className="relative min-h-[500px] flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          {/* Designer Circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary/40 bg-primary/5 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="font-fraunces text-lg md:text-xl font-semibold text-foreground text-center px-4">
                Designer
                <br />
                <span className="text-primary text-sm">UI/UX</span>
              </span>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-[360px]">
              {designerSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(201, 169, 98, 0.3)' }}
                  className={`px-4 py-2 rounded-full border text-base cursor-default transition-all duration-300 ${
                    hoveredSkill === skill
                      ? 'border-primary bg-primary/20 text-primary shadow-lg shadow-primary/20'
                      : 'border-white/20 bg-white/[0.02] text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connecting line (visual) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40"
          />

          {/* Developer Circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-primary/40 bg-primary/5 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="font-fraunces text-lg md:text-xl font-semibold text-foreground">
                Developer
              </span>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-[400px]">
              {developerSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i + 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(201, 169, 98, 0.3)' }}
                  className={`px-4 py-2 rounded-full border text-base cursor-default transition-all duration-300 ${
                    hoveredSkill === skill
                      ? 'border-primary bg-primary/20 text-primary shadow-lg shadow-primary/20'
                      : 'border-white/20 bg-white/[0.02] text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 right-10 w-4 h-4 rounded-full bg-primary/30"
      />
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-10 w-3 h-3 rounded-full bg-primary/40"
      />
    </section>
  );
};

export default SkillsMap;
