'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const primaryGold = '#c9a962'; // same as --primary

const RoleCards = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
        >
          {/* Designer Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                `0 0 20px ${primaryGold}40, 0 0 40px ${primaryGold}20`,
                `0 0 28px ${primaryGold}60, 0 0 56px ${primaryGold}30`,
                `0 0 20px ${primaryGold}40, 0 0 40px ${primaryGold}20`,
              ],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: `0 0 35px ${primaryGold}80, 0 0 70px ${primaryGold}40`,
              transition: { duration: 0.3 },
            }}
            className="relative flex-1 overflow-hidden rounded-2xl border-2 border-primary/60 bg-white/[0.02] backdrop-blur-xl p-8"
          >
            <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-4 drop-shadow-[0_0_8px_rgba(201,169,98,0.6)]"
              >
                ✦
              </motion.span>
              <h3 className="font-fraunces text-2xl font-semibold text-foreground mb-2" style={{ textShadow: `0 0 12px ${primaryGold}60` }}>
                Designer
              </h3>
              <p className="text-muted-foreground text-lg mb-4">UI/UX, Brand Identity, Prototypes</p>
              <Link
                href="/projects/designer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/50 bg-primary/10 text-primary font-medium text-lg hover:bg-primary/25 hover:border-primary/80 transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(201,169,98,0.4)]"
              >
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{
              y: [0, 8, 0],
              boxShadow: [
                `0 0 20px ${primaryGold}40, 0 0 40px ${primaryGold}20`,
                `0 0 28px ${primaryGold}60, 0 0 56px ${primaryGold}30`,
                `0 0 20px ${primaryGold}40, 0 0 40px ${primaryGold}20`,
              ],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
              boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: `0 0 35px ${primaryGold}80, 0 0 70px ${primaryGold}40`,
              transition: { duration: 0.3 },
            }}
            className="relative flex-1 overflow-hidden rounded-2xl border-2 border-primary/60 bg-white/[0.02] backdrop-blur-xl p-8"
          >
            <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4 drop-shadow-[0_0_8px_rgba(201,169,98,0.6)]"
              >
                {'</>'}
              </motion.span>
              <h3 className="font-fraunces text-2xl font-semibold text-foreground mb-2" style={{ textShadow: `0 0 12px ${primaryGold}60` }}>
                Developer
              </h3>
              <p className="text-muted-foreground text-lg mb-4">AI, Robotics, Full Stack</p>
              <Link
                href="/projects/developer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/50 bg-primary/10 text-primary font-medium text-lg hover:bg-primary/25 hover:border-primary/80 transition-all cursor-pointer hover:shadow-[0_0_20px_rgba(201,169,98,0.4)]"
              >
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoleCards;
