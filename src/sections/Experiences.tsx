import React, { useEffect } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Rellax from 'rellax';

const Experiences = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    
    // Initialize Rellax
    const rellax = new Rellax('.rellax', {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    return () => rellax.destroy();
  }, [controls, inView]);

  const experiences = [
    {
      title: "Luxury Villa Retreats",
      description: "Experience the epitome of comfort in our handpicked collection of premium villas along Albania's stunning coastline.",
      imageUrl: "https://images.pexels.com/photos/4318822/pexels-photo-4318822.jpeg",
      link: "#villas"
    },
    {
      title: "Cultural Expeditions",
      description: "Journey through UNESCO World Heritage sites and discover Albania's rich history with our expert guides.",
      imageUrl: "https://images.pexels.com/photos/11451357/pexels-photo-11451357.jpeg",
      link: "#culture"
    },
    {
      title: "Coastal Adventures",
      description: "Set sail along the Albanian Riviera, exploring hidden beaches and crystal-clear waters of the Ionian Sea.",
      imageUrl: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg",
      link: "#adventures"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-[#F9F7F5] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-[#1A2A3A] mb-6">
            Curated Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of bespoke experiences, each crafted to reveal 
            Albania's most enchanting destinations
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="rellax" data-rellax-speed="-2">
          <div className="w-64 h-64 rounded-full bg-[#3DB4C0]/5 absolute -top-32 -left-32"></div>
        </div>
        <div className="rellax" data-rellax-speed="2">
          <div className="w-96 h-96 rounded-full bg-[#D4AF37]/5 absolute -bottom-48 -right-48"></div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;