import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  quote: string;
  photoUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, quote, photoUrl }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-[#3DB4C0]/20">
          <img 
            src={photoUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
        <div className="mt-auto">
          <h4 className="text-[#3DB4C0] font-semibold">{name}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;