import React from 'react';
import { motion } from 'framer-motion';

const SocialProofItalian = () => {
  const stats = [
    { number: "1000+", label: "Clienti Soddisfatti" },
    { number: "50+", label: "Tour Unici" },
    { number: "4.9/5", label: "Valutazione Media" },
    { number: "100%", label: "Garanzia di Soddisfazione" }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-blue-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofItalian;