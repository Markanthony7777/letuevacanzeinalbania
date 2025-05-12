import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar, Plane, Check } from 'lucide-react';

const BookingProcessItalian = () => {
  const steps = [
    {
      icon: <PhoneCall className="w-12 h-12 text-blue-600" />,
      title: "Consulenza Gratuita",
      description: "Parliamo dei tuoi desideri di viaggio"
    },
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Pianificazione",
      description: "Creiamo il tuo itinerario personalizzato"
    },
    {
      icon: <Check className="w-12 h-12 text-blue-600" />,
      title: "Conferma",
      description: "Approvi e confermi il tuo viaggio"
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Partenza",
      description: "Inizia la tua avventura in Albania"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Come Prenotare</h2>
          <p className="text-xl text-gray-600">Quattro semplici passi per il tuo viaggio perfetto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-600"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcessItalian;