import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsItalian = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      location: "Milano, Italia",
      text: "Un'esperienza incredibile! La guida era molto preparata e l'itinerario perfettamente organizzato.",
      rating: 5
    },
    {
      name: "Laura Bianchi",
      location: "Roma, Italia",
      text: "Ho scoperto un paese meraviglioso grazie a questo tour. Tornerò sicuramente!",
      rating: 5
    },
    {
      name: "Giuseppe Verdi",
      location: "Firenze, Italia",
      text: "Professionalità e attenzione ai dettagli. Altamente consigliato!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-xl text-gray-600">Esperienze autentiche raccontate dai viaggiatori</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsItalian;