import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import ScheduleCallForm from '../components/ScheduleCallForm';

const HeroItalian = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const destinations = [
    {
      id: 'community',
      title: "Non sei un turista in Albania—Sei di famiglia",
      subtitle: 'Unisciti alla Nostra Comunità',
      description: 'Unisciti a oltre 500 residenti e viaggiatori internazionali nella comunità più accogliente dell\'Albania. Eventi sul tetto ogni settimana, consigli locali e amicizie durature.',
      type: 'video',
      videoUrl: '/assets/videos/community.vlora.mp4',
      cta: {
        primary: '✦ Unisciti alla nostra community su Facebook ✦',
        primaryLink: 'https://www.facebook.com/groups/400000239224187',
        action: 'link'
      }
    },
    {
      id: 'emotional',
      title: 'Vivi il tuo sogno albanese',
      subtitle: 'Il tuo viaggio inizia qui',
      description: 'Affitta per una settimana... o resta per tutta la vita. Ti aspetta una comunità internazionale.',
      imageUrl: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
      cta: {
        primary: 'Scopri di più',
        primaryLink: '#servizi',
        action: 'link'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const handleCTAClick = (cta: { action: string; primaryLink?: string }) => {
    if (cta.action === 'form') {
      setIsFormOpen(true);
    } else if (cta.action === 'link' && cta.primaryLink) {
      if (cta.primaryLink.startsWith('http')) {
        window.open(cta.primaryLink, '_blank');
      } else {
        const element = document.querySelector(cta.primaryLink);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {destinations[currentSlide].type === 'video' ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={() => setIsLoading(false)}
              >
                <source src={destinations[currentSlide].videoUrl} type="video/mp4" />
              </video>
              <button
                onClick={toggleMute}
                className="absolute bottom-20 right-8 z-10 p-3 rounded-full bg-black/20 text-white hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
            </>
          ) : (
            <img
              src={destinations[currentSlide].imageUrl}
              alt={destinations[currentSlide].title}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoading(false)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.span 
                className="text-[#FFD700] font-display text-lg md:text-2xl mb-4 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {destinations[currentSlide].subtitle}
              </motion.span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-white font-display">
                {destinations[currentSlide].title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {destinations[currentSlide].description}
              </p>
              
              {destinations[currentSlide].cta && (
                <motion.button 
                  onClick={() => handleCTAClick(destinations[currentSlide].cta)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#FFD700] text-gray-900 rounded-full font-semibold text-lg hover:bg-white transition-all"
                >
                  {destinations[currentSlide].cta.primary}
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-black/20 text-white hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300 pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-black/20 text-white hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300 pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#FFD700] w-12' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      <ScheduleCallForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default HeroItalian;