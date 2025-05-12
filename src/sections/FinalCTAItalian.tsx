import React from 'react';
import { motion } from 'framer-motion';

const FinalCTAItalian = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto per la Tua Avventura in Albania?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contattaci oggi per iniziare a pianificare il viaggio dei tuoi sogni
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all">
              Prenota Ora
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all">
              Richiedi Informazioni
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTAItalian;