import React from 'react';
import { motion } from 'framer-motion';

const TourPackagesItalian = () => {
  const packages = [
    {
      title: "Tour Costiero",
      duration: "7 giorni",
      price: "da €899",
      description: "Esplora le splendide spiagge della Riviera Albanese",
      image: "/assets/images/ksamilatsunset.jpeg"
    },
    {
      title: "Avventura in Montagna",
      duration: "5 giorni",
      price: "da €699",
      description: "Scopri i maestosi paesaggi montani dell'Albania",
      image: "/assets/images/coupleinradhime.jpeg"
    },
    {
      title: "Tour Culturale",
      duration: "6 giorni",
      price: "da €799",
      description: "Immergiti nella ricca storia e cultura albanese",
      image: "/assets/images/Kamaybeachksamil.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I Nostri Pacchetti</h2>
          <p className="text-xl text-gray-600">Scegli l'avventura perfetta per te</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{pkg.duration}</span>
                  <span className="text-blue-600 font-semibold">{pkg.price}</span>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Prenota Ora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackagesItalian;