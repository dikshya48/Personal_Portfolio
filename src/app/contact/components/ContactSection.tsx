'use client';

import { motion } from 'framer-motion';

// Update this with your email address
const EMAIL = 'dikshyagiri@example.com';

const floatingEmojis = ['✉️', '💬', '✨', '🚀', '💡', '🎨'];

const ContactSection = () => {
  return (
    <section className="min-h-screen pt-28 pb-24 px-6 relative overflow-hidden">
      {/* Floating fun emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-4xl md:text-5xl opacity-30 pointer-events-none"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="font-fraunces text-5xl md:text-7xl font-semibold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl">
            Let&apos;s connect — I&apos;d love to hear from you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-primary/20 border-2 border-primary/50 text-primary font-semibold text-xl hover:bg-primary/30 transition-colors shadow-lg shadow-primary/10"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
