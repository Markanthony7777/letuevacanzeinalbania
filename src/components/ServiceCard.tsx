import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import VehicleGallery from './VehicleGallery';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  videoUrl?: string;
  id: string;
  showLearnMore?: boolean;
  learnMoreLink?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  isVehicleService?: boolean;
  vehicleImages?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  imageUrl,
  videoUrl,
  showLearnMore,
  learnMoreLink,
  loading = 'lazy',
  fetchPriority = 'auto',
  isVehicleService = false,
  vehicleImages = []
}) => {
  const handleLearnMore = () => {
    if (learnMoreLink) {
      if (learnMoreLink.startsWith('http')) {
        window.open(learnMoreLink, '_blank');
      } else {
        const element = document.querySelector(learnMoreLink);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 group h-full flex flex-col"
      whileHover={{ y: -10 }}
    >
      {isVehicleService && vehicleImages.length > 0 ? (
        <VehicleGallery images={vehicleImages} />
      ) : videoUrl ? (
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ aspectRatio: '16/9' }}
          >
            <source 
              src={videoUrl} 
              type="video/mp4" 
            />
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
                loading={loading}
                fetchPriority={fetchPriority}
              />
            )}
          </video>
        </div>
      ) : imageUrl && (
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`${imageUrl}?w=1200 1x, ${imageUrl}?w=2400 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${imageUrl}?w=800 1x, ${imageUrl}?w=1600 2x`}
            />
            <img 
              src={`${imageUrl}?w=400`}
              srcSet={`${imageUrl}?w=400 1x, ${imageUrl}?w=800 2x`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading={loading}
              fetchPriority={fetchPriority}
            />
          </picture>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <Icon className="h-8 w-8 text-[#FFD700] mr-3" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/80 leading-relaxed flex-grow">{description}</p>
        {showLearnMore && (
          <button 
            onClick={handleLearnMore}
            className="mt-4 text-[#FFD700] font-medium hover:text-white transition-colors flex items-center group cursor-pointer"
          >
            Learn More
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;