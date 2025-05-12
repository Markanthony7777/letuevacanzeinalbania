import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-2xl font-display text-white mb-3">{title}</h3>
        <p className="text-white/80 mb-6 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
        
        {/* Button */}
        <motion.a
          href={link}
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="inline-block"
        >
          <span className="text-[#FFD700] font-display border-b border-[#FFD700] pb-1 group-hover:border-white/0 transition-all duration-300">
            View Details
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;