'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, speed = 100, delay = 0 }: { text: string; speed?: number; delay?: number }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <span className="inline-flex items-center min-h-[1.5em]">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="inline-block w-[3px] h-[0.9em] ml-0.5 bg-primary rounded-sm"
      />
    </span>
  );
};

// Personal identity: artist, pencil sketches, coffee lover, lifelong learner, ambitious, curly hair, authentic (no gossip)
const floatingElements = [
  { id: 1, icon: 'pencil', color: 'gold', pos: 'top-[14%] left-[8%]', delay: 0, duration: 8 },
  { id: 2, icon: 'coffee', color: 'warm', pos: 'top-[24%] right-[10%]', delay: 1.2, duration: 9 },
  { id: 3, icon: 'curl', color: 'magenta', pos: 'bottom-[30%] left-[10%]', delay: 2, duration: 10 },
  { id: 4, icon: 'book', color: 'cyan', pos: 'bottom-[20%] right-[8%]', delay: 1.5, duration: 8 },
  { id: 5, icon: 'arrow-up', color: 'gold', pos: 'top-[40%] left-[5%]', delay: 0.6, duration: 11 },
  { id: 6, icon: 'curl', color: 'gold', pos: 'top-[58%] right-[7%]', delay: 2.2, duration: 9 },
  { id: 7, icon: 'pencil', color: 'magenta', pos: 'top-[10%] right-[20%]', delay: 1, duration: 7 },
  { id: 8, icon: 'coffee', color: 'gold', pos: 'bottom-[35%] left-[14%]', delay: 2.5, duration: 10 },
  { id: 9, icon: 'star', color: 'gold', pos: 'top-[35%] right-[22%]', delay: 0.4, duration: 9 },
  { id: 10, icon: 'curl', color: 'cyan', pos: 'bottom-[14%] right-[16%]', delay: 3, duration: 8 },
  { id: 11, icon: 'book', color: 'magenta', pos: 'top-[68%] left-[12%]', delay: 1.8, duration: 11 },
  { id: 12, icon: 'arrow-up', color: 'cyan', pos: 'bottom-[42%] right-[26%]', delay: 2.2, duration: 9 },
  { id: 13, icon: 'dot', color: 'warm', pos: 'top-[50%] left-[6%]', delay: 0.8, duration: 10 },
  { id: 14, icon: 'star', color: 'magenta', pos: 'bottom-[55%] right-[12%]', delay: 1.6, duration: 8 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Subtle background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent"
      />

      {/* Floating elements - you: artist, coffee, learning, ambition, curly hair, authentic */}
      {floatingElements.map((el) => {
        const colorMap = {
          gold: '#e8c547',
          cyan: '#00e5ff',
          magenta: '#ff2d95',
          warm: '#e07c4a',
        };
        const glowColor = colorMap[el.color as keyof typeof colorMap] || colorMap.gold;
        const glow = { filter: `drop-shadow(0 0 8px ${glowColor})` };

        const renderIcon = () => {
          const size = 20;
          const stroke = glowColor;
          switch (el.icon) {
            case 'pencil':
              return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={glow}>
                  <path d="M12 19l7-7 3 3-7 7-3-3z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              );
            case 'coffee':
              return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={glow}>
                  <path d="M18 8h1a4 4 0 010 8h-1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2v2M10 2v2M14 2v2" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              );
            case 'curl':
              return (
                <svg width={size + 6} height={size + 4} viewBox="0 0 30 22" fill="none" style={glow}>
                  <path d="M2 11c0 0 4-4 8-2s6 4 10 2 6-3 10-1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M5 6c2-1 5 1 7 2" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
                  <path d="M5 16c2 1 5-1 7-2" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
                </svg>
              );
            case 'book':
              return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={glow}>
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 6v6M9 9h6" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              );
            case 'arrow-up':
              return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={glow}>
                  <path d="M12 19V5M12 5l-7 7M12 5l7 7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              );
            case 'star':
              return (
                <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={glow}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" fill={stroke} fillOpacity="0.2" />
                </svg>
              );
            case 'dot':
              return (
                <div
                  className="rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: glowColor,
                    boxShadow: `0 0 12px ${glowColor}`,
                  }}
                />
              );
            default:
              return null;
          }
        };

        return (
          <motion.div
            key={el.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.25, 0.5, 0.25],
              y: [0, -32, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: el.delay,
            }}
            className={`absolute ${el.pos} pointer-events-none z-0`}
          >
            {renderIcon()}
          </motion.div>
        );
      })}

      {/* Central graphic */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary-dim to-transparent blur-2xl" />
          <div className="absolute inset-0 rounded-full border border-white/10 bg-background/80 backdrop-blur-xl flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-fraunces text-xl md:text-2xl font-medium text-primary mb-4 min-h-[2rem]"
        >
          <Typewriter text="Hey there, I'm Dikshya Giri" speed={80} delay={600} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-fraunces text-4xl md:text-6xl font-semibold text-center text-foreground mb-3"
        >
          Designer & Developer
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-md text-center"
        >
          Creative developer & artist — sketching ideas, designing experiences, building with code
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
