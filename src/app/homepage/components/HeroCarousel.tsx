'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

const slides = [
  {
    id: 1,
    title: 'Welcome to My Portfolio',
    subtitle: 'Building Digital Experiences',
    image: '/assets/images/no_image.png',
  },
  {
    id: 2,
    title: 'Creative Solutions',
    subtitle: 'Innovation Meets Design',
    image: '/assets/images/no_image.png',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    subtitle: 'Turning Ideas into Reality',
    image: '/assets/images/no_image.png',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <AppImage
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
