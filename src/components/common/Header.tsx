'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfileAvatar = () => {
  const [useFallback, setUseFallback] = useState(false);
  if (useFallback) {
    return <span className="text-primary font-semibold">P</span>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/images/profile.png"
      alt="Profile"
      className="w-full h-full object-cover"
      onError={() => setUseFallback(true)}
    />
  );
};

const navLinks = [
  { id: 'nav_home', label: 'Home', href: '/' },
  { id: 'nav_projects', label: 'Projects', href: '/projects' },
  { id: 'nav_skills', label: 'Skills', href: '/skills' },
  { id: 'nav_contact', label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 ring-2 ring-primary/20 bg-primary/20 flex items-center justify-center text-primary font-semibold text-base shrink-0"
          >
            <ProfileAvatar />
          </motion.div>
          <span className="font-fraunces text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Dikshya Giri
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                href={link.href}
                className="relative text-base font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-muted-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
