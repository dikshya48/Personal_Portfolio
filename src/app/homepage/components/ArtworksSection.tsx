'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Add your artwork images to public/assets/images/artworks/ as artwork-1 through artwork-6 (jpg or png)
// Update descriptions below for each piece
const artworks = [
  { id: 1, src: '/assets/images/artworks/artwork-1.png', description: 'Stone house: an ancient warmth' },
  { id: 2, src: '/assets/images/artworks/artwork-2.png', description: 'The Child: Small wonders, big world' },
  { id: 3, src: '/assets/images/artworks/artwork-3.png', description: 'Daydreaming' },
  { id: 4, src: '/assets/images/artworks/artwork-4.png', description: 'Rust turning into life' },
  { id: 5, src: '/assets/images/artworks/artwork-5.png', description: 'Little painter: capturing what her heart sees' },
  { id: 6, src: '/assets/images/artworks/artwork-6.png', description: 'Dobby: an unforgettable character' },
];

const ArtworksSection = () => {
  const [zoomedArt, setZoomedArt] = useState<typeof artworks[0] | null>(null);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-fraunces text-3xl md:text-4xl font-semibold text-foreground mb-3">
            My Artwork
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Few of my of hand-drawn sketches 
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {artworks.map((art, i) => (
            <ArtworkBox
              key={art.id}
              artwork={art}
              index={i}
              onZoom={() => setZoomedArt(art)}
            />
          ))}
        </motion.div>
      </div>

      {/* Zoom modal - click outside or X to close */}
      <AnimatePresence>
        {zoomedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setZoomedArt(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] w-full cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomedArt.src}
                alt={`Artwork ${zoomedArt.id}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg border border-white/10"
              />
              <p className="mt-4 text-center text-muted-foreground text-base md:text-lg w-full">{zoomedArt.description}</p>
              <button
                onClick={() => setZoomedArt(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ArtworkBox = ({
  artwork,
  index,
  onZoom,
}: {
  artwork: (typeof artworks)[0];
  index: number;
  onZoom: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * index }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onZoom}
      className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer group"
    >
      {/* Image or placeholder */}
      <div className="absolute inset-0 flex items-center justify-center bg-white/5">
        {!imgError ? (
          <img
            src={artwork.src}
            alt={`Artwork ${artwork.id}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50">
              <path d="M12 19l7-7 3 3-7 7-3-3z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-center px-4">Add artwork-{artwork.id}.jpg or .png</span>
          </div>
        )}
      </div>

      {/* Hover overlay with description */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/75 flex items-center justify-center p-4"
          >
            <p className="text-base md:text-lg text-foreground/95 line-clamp-3 text-center">
              {artwork.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default ArtworksSection;
