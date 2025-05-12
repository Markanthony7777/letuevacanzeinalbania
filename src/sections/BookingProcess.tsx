import React, { useState, useEffect, useRef } from 'react';
import { Package, Building, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import ScheduleCallForm from '../components/ScheduleCallForm';
import Rellax from 'rellax';

const BookingProcess = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'tour' | 'accommodation' | 'transport'>('tour');
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxRef.current) {
      const rellax = new Rellax(parallaxRef.current, {
        speed: -5,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });

      return () => rellax.destroy();
    }
  }, []);

  const handleButtonClick = (type: 'tour' | 'accommodation' | 'transport') => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const serviceOptions = [
    {
      icon: Package,
      title: "Pacchetti Tour Completi",
      description: "prenota un pacchetto per un'esperienza comoda e organizzata",
      cta: "Prenota Ora il Tuo Tour",
      type: 'tour' as const
    },
    {
      icon: Building,
      title: "Soggiorni Individuali",
      description: "Prenota ville, hotel o B&B in modo indipendente",
      cta: "Richiedi Alloggio",
      type: 'accommodation' as const
    },
    {
      icon: Car,
      title: "Servizi Singoli",
      description: "Hai bisogno solo del trasporto o di una guida? Personalizza il tuo viaggio.",
      cta: "Richiedi Il Trasporto",
      type: 'transport' as const
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/images/sunsetksamil.jpeg)',
          transform: 'translateZ(0)',
          willChange: 'transform',
          height: '120%',
          top: '-10%'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Prenota a Modo Tuo
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Che tu voglia un pacchetto completo o solo servizi individuali, il nostro processo di prenotazione è semplice e flessibile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/20 transform hover:translate-y-[-10px] transition-transform duration-300"
            >
              <option.icon className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
              <p className="text-white/80 mb-6">{option.description}</p>
              <motion.button
                onClick={() => handleButtonClick(option.type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-[#FFD700] text-gray-900 font-medium rounded-lg transition duration-300 hover:bg-white w-full"
              >
                {option.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <ScheduleCallForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={formType}
      />
    </section>
  );
};

export default BookingProcess;