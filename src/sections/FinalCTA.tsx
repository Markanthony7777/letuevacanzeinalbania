import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle } from 'lucide-react';
import ScheduleCallForm from '../components/ScheduleCallForm';

const FinalCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 container mx-auto px-4 py-24 text-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block text-[#FFD700] text-lg md:text-xl mb-4 font-display"
        >
          Il Tuo Viaggio Ti Aspetta
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 max-w-4xl mx-auto leading-tight"
        >
          Il Tuo Viaggio in Albania
          <br />
          <span className="bg-gradient-to-r from-[#FFD700] via-white to-[#FFD700] text-transparent bg-clip-text">
            Inizia Qui
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
        >
          Soggiorni brevi o permanenze lunghe—la nostra comunità ti aspetta.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={() => setIsFormOpen(true)}
            className="h-10 px-4 bg-[#FFD700] text-gray-900 font-semibold rounded transition-colors duration-300 flex items-center justify-center hover:bg-[#3DB4C0] hover:text-white"
          >
            Prenota il Tuo Viaggio
          </button>
          <a
            href="https://wa.me/393270543762"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-4 bg-[#25D366] text-white font-semibold rounded transition-colors duration-300 flex items-center justify-center hover:bg-[#22c55e]"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Scrivici Ora
          </a>
        </motion.div>
      </motion.div>

      <ScheduleCallForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default FinalCTA;