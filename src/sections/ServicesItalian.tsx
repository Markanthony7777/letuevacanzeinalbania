import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, Calendar, Map } from 'lucide-react';

const ServicesItalian = () => {
  const services = [
    {
      icon: <Compass className="w-12 h-12 text-blue-600" />,
      title: "Tour Personalizzati",
      description: "Itinerari su misura basati sui tuoi interessi e preferenze"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Guide Locali Esperte",
      description: "Accompagnatori qualificati che conoscono ogni angolo dell'Albania"
    },
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "Pianificazione Flessibile",
      description: "Programmi adattabili alle tue esigenze di tempo"
    },
    {
      icon: <Map className="w-12 h-12 text-blue-600" />,
      title: "Destinazioni Uniche",
      description: "Accesso a luoghi nascosti e esperienze autentiche"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600">Scopri come possiamo rendere il tuo viaggio indimenticabile</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesItalian;