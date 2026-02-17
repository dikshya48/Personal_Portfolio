'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectImage = ({ src, alt, slug }: { src: string; alt: string; slug: string }) => {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="relative w-full h-44 min-h-44 bg-white/5 border-b border-white/10 overflow-hidden flex items-center justify-center">
      {!hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-sm text-center px-4">
          Add image to public/assets/images/projects/{slug}.jpg
        </div>
      )}
    </div>
  );
};

const projects = [
  {
    id: '1',
    title: 'Dristi',
    type: 'developer',
    description: 'AI-powered wearable smart bag for the visually impaired — 1st place at HackNYU 2025',
    slug: 'dristi',
    image: '/assets/images/projects/dristi.jpg',
  },
  {
    id: '2',
    title: 'Smart Traffic Signal Control',
    type: 'developer',
    description: 'RL & LSTM-based adaptive traffic light system with real-time vehicle detection',
    slug: 'smart-traffic-signal',
    image: '/assets/images/projects/traffic.jpeg',
  },
  {
    id: '3',
    title: 'Gesture-Controlled Robotic Arm',
    type: 'developer',
    description: 'Hand tracking and gesture recognition for robotic control — HackNJIT Winner',
    slug: 'gesture-robotic-arm',
    image: '/assets/images/projects/gesture-robotic-arm.png',
  },
  {
    id: '5',
    title: 'Caldwell Astrobot',
    type: 'developer',
    description: 'NASA Space Apps — gesture-based robotic hand for microgravity environments',
    slug: 'caldwell-astrobot',
    image: '/assets/images/projects/caldwell-astrobot.png',
  },
];

const ProjectsOverview = () => {
  return (
    <section className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-fraunces text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Selected work spanning design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <motion.article
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group h-full flex flex-col rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
                >
                  <ProjectImage src={project.image} alt={project.title} slug={project.slug} />
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs font-medium text-primary mb-2 block uppercase tracking-wider">
                      {project.type === 'designer' ? 'Design' : 'Development'}
                    </span>
                    <h2 className="font-fraunces text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-base mb-3 line-clamp-2 flex-1">
                      {project.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-2 text-primary text-base font-medium"
                    >
                      <span>View Work</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex gap-4"
        >
          <Link href="/projects/designer">
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-primary font-medium text-sm"
            >
              Designer Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.span>
          </Link>
          <span className="text-muted-foreground">·</span>
          <Link href="/projects/developer">
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-primary font-medium text-sm"
            >
              Developer Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
