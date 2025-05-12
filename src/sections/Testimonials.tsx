import React, { useState, useEffect } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Antonella Quattrocchi",
      quote: "Inizialmente scettica, mi sono fidata del loro servizio per la nostra vacanza in famiglia a Valona. La migliore decisione di sempre! Il tour è stato fantastico, confortevole, con una guida eccezionale. Si sono adattati perfettamente alle esigenze della nostra famiglia. Sicuramente saranno il nostro primo riferimento quando torneremo!",
      photoUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Carla Esposito",
      quote: "Ho trovato questo gruppo fantastico per caso! L'escursione in barca pirata a Karaburun e Sazan è stata indimenticabile. Nonostante la mia iniziale esitazione sul tour delle grotte, si è rivelata un'esperienza incredibile. La loro esperienza ha reso ogni momento speciale.",
      photoUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "Beatrice Trentini",
      quote: "Tour meraviglioso con la nostra guida straordinaria! Una persona così calorosa e brillante, super attenta alle nostre esigenze. Se volete un tour ben organizzato e pieno di risate, non cercate oltre. Non vedo l'ora di vivere nuove esperienze!",
      photoUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      name: "Claudia Quattrocchi",
      quote: "Dopo aver affidato loro il nostro alloggio, abbiamo trascorso una giornata perfetta alla spiaggia Kyma di Dhërmi su loro raccomandazione. L'organizzazione in spiaggia era fantastica e incredibilmente accessibile. La loro conoscenza locale è impagabile!",
      photoUrl: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
    },
    {
      name: "Stefania Salvatore",
      quote: "Anche se la nostra meravigliosa vacanza è finita, rimarrà per sempre nel mio cuore. Un ringraziamento speciale alla nostra guida straordinaria che ha reso ogni momento memorabile. Il perfetto mix di professionalità e divertimento!",
      photoUrl: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
    },
    {
      name: "Rossella Fiorentino",
      quote: "Alcuni viaggi ti aiutano a scoprire luoghi, altri ti aiutano a scoprire un nuovo modo di vedere il mondo. Con loro, l'Albania è diventata più di una semplice destinazione turistica - è diventata un posto dove abbiamo lasciato un pezzo del nostro cuore e dove vorremo sempre tornare.",
      photoUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-display">
            Cosa Dice la Nostra Comunità
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Storie vere da chi ha vissuto l'Albania con noi
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <TestimonialCard {...testimonials[currentSlide]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto p-2 rounded-full bg-white/80 shadow-lg text-gray-800 hover:bg-[#3DB4C0] hover:text-white transition-all duration-300 transform hover:scale-110 -translate-x-1/2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto p-2 rounded-full bg-white/80 shadow-lg text-gray-800 hover:bg-[#3DB4C0] hover:text-white transition-all duration-300 transform hover:scale-110 translate-x-1/2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-[#3DB4C0]'
                    : 'w-2 bg-gray-300'
                } h-2 rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Hai avuto una bella esperienza con noi? Fallo sapere agli altri!
          </p>
          <button 
            className="h-10 px-4 bg-transparent border-2 border-[#3DB4C0] text-[#3DB4C0] font-semibold rounded transition-colors duration-300 flex items-center justify-center hover:bg-[#3DB4C0] hover:text-white mx-auto"
          >
            Lascia una Recensione
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;