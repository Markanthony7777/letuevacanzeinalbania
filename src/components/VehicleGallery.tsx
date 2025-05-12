import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VehicleGalleryProps {
  images: string[];
}

const VehicleGallery: React.FC<VehicleGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setLastInteraction(Date.now());
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setLastInteraction(Date.now());
  }, [images.length]);

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      if (now - lastInteraction > 10000) { // Resume auto-advance after 10 seconds of inactivity
        setIsAutoPlaying(true);
      }
      
      if (isAutoPlaying) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, lastInteraction, images.length]);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    preloadImage(images[nextIndex]);
    preloadImage(images[prevIndex]);
  }, [currentIndex, images]);

  return (
    <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-t-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`${images[currentIndex]}?w=1200 1x, ${images[currentIndex]}?w=2400 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${images[currentIndex]}?w=800 1x, ${images[currentIndex]}?w=1600 2x`}
            />
            <img
              src={`${images[currentIndex]}?w=400`}
              srcSet={`${images[currentIndex]}?w=400 1x, ${images[currentIndex]}?w=800 2x`}
              alt={`Vehicle showcase ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
            />
          </picture>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prevImage}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
              setLastInteraction(Date.now());
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#FFD700] w-6'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleGallery;