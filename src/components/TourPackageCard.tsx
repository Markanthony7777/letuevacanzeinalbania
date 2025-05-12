import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, MessageCircle, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ScheduleCallForm from './ScheduleCallForm';

interface TourPackageCardProps {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  locations: string[];
  imageUrl: string;
  includes: string[] | string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({
  title,
  subtitle,
  description,
  duration,
  locations,
  imageUrl,
  includes,
  loading = 'lazy',
  fetchPriority = 'auto'
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { t } = useTranslation();
  const includesArray = Array.isArray(includes) ? includes : [includes];

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-[300px] w-full overflow-hidden">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={`${imageUrl}?w=1200 1x, ${imageUrl}?w=2400 2x`}
              type="image/jpeg"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${imageUrl}?w=800 1x, ${imageUrl}?w=1600 2x`}
              type="image/jpeg"
            />
            <img 
              src={`${imageUrl}?w=400`}
              srcSet={`${imageUrl}?w=400 1x, ${imageUrl}?w=800 2x`}
              alt={`Scenic view of ${title}`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              loading={loading}
              fetchPriority={fetchPriority}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-[#FFD700] font-display text-lg mb-2">{subtitle}</p>
            <h3 className="text-2xl font-display text-white">{title}</h3>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-4 text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-[#3DB4C0]" />
            {duration}
          </div>

          <p className="text-gray-600 mb-4">{description}</p>

          <div className="mb-4">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600 mb-1">
                <MapPin className="w-4 h-4 mr-2 text-[#3DB4C0]" />
                {location}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Include:</h4>
            <div className="grid grid-cols-2 gap-2">
              {includesArray.map((item, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-auto">
            <a 
              href="https://wa.me/393270543762"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-full transition-colors duration-300"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-display">Scrivici Ora</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-3 bg-[#3DB4C0] text-white font-display hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300"
            >
              {t('tourPackages.ctaSchedule')}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <ScheduleCallForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default TourPackageCard;