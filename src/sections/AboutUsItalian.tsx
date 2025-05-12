import React from 'react';
import { motion } from 'framer-motion';

const AboutUsItalian = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Chi Siamo</h2>
            <p className="text-xl text-gray-600 mb-8">
              Siamo un team di appassionati viaggiatori e esperti locali dedicati a mostrare la vera essenza dell'Albania. 
              La nostra missione è creare esperienze di viaggio autentiche e indimenticabili.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Con anni di esperienza nel settore turistico e una profonda conoscenza del territorio, 
              offriamo tour personalizzati che si adattano perfettamente alle esigenze di ogni viaggiatore.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Scopri di Più
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] rounded-xl overflow-hidden"
          >
            <img
              src="/assets/videos/ksamilbeach.view.jpeg"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsItalian;