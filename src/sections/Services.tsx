import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { 
  Compass, Map, Car, Building, FileText, PlaneTakeoff, 
  Users, Headphones
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ScheduleCallForm from '../components/ScheduleCallForm';

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { t } = useTranslation();
  
  const services = [
    {
      id: 'tourist-trips',
      title: t('services.tourTitle'),
      description: t('services.tourText'),
      icon: Compass,
      imageUrl: '/assets/images/beratfamilyphoto.jpeg',
      showLearnMore: true,
      learnMoreLink: '#tour-packages',
      loading: 'eager',
      fetchPriority: 'high'
    },
    {
      id: 'private-tours',
      title: t('services.privateTitle'),
      description: t('services.privateText'),
      icon: Map,
      imageUrl: '/assets/images/kamaybeachksamil.jpeg',
      loading: 'eager',
      fetchPriority: 'high'
    },
    {
      id: 'transportation',
      title: t('services.transportTitle'),
      description: t('services.transportText'),
      icon: Car,
      imageUrl: '/assets/images/shuttleservicefromairport.jpg',
      loading: 'eager',
      fetchPriority: 'high'
    },
    {
      id: 'accommodation',
      title: t('services.accommodationTitle'),
      description: t('services.accommodationText'),
      icon: Building,
      videoUrl: '/assets/videos/albaniaapartment.mp4',
      imageUrl: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
      loading: 'lazy'
    },
    {
      id: 'residency',
      title: t('services.residencyTitle'),
      description: t('services.residencyText'),
      icon: FileText,
      imageUrl: '/assets/images/visadocuments.jpg',
      loading: 'lazy'
    },
    {
      id: 'vehicle',
      title: t('services.vehicleTitle'),
      description: t('services.vehicleText'),
      icon: Car,
      isVehicleService: true,
      vehicleImages: [
        '/assets/images/carrental.jpeg',
        '/assets/images/carrental2.jpeg',
        '/assets/images/fordfrontview.jpeg',
        '/assets/images/fordinsideviewrental.jpeg',
        '/assets/images/fordsiderental.jpeg',
        '/assets/images/mercedezrental.jpeg',
        '/assets/images/mercedezinside.jpeg'
      ],
      loading: 'lazy'
    },
    {
      id: 'travel-booking',
      title: t('services.bookingTitle'),
      description: t('services.bookingText'),
      icon: PlaneTakeoff,
      imageUrl: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg',
      loading: 'lazy'
    },
    {
      id: 'community',
      title: t('services.communityTitle'),
      description: t('services.communityText'),
      icon: Users,
      imageUrl: '/assets/images/gjirokaster.jpg',
      loading: 'lazy',
      showLearnMore: true,
      learnMoreLink: 'https://www.facebook.com/groups/400000239224187'
    },
    {
      id: 'concierge',
      title: t('services.conciergeTitle'),
      description: t('services.conciergeText'),
      icon: Headphones,
      imageUrl: '/assets/images/tiranacliente.jpeg',
      loading: 'lazy'
    }
  ];

  return (
    <section id="il-tuo-viaggio" className="py-20 bg-gradient-to-b from-[#3DB4C0] to-[#2A95A0] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">{t('services.mainTitle')}</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('services.mainDescription')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {t('services.ctaText')}
          </p>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="h-10 px-4 bg-[#FFD700] text-gray-900 font-semibold rounded transition-colors duration-300 flex items-center justify-center hover:bg-white hover:text-[#3DB4C0] mx-auto"
          >
            Pianifica una Chiamata
          </button>
        </motion.div>
      </div>

      <ScheduleCallForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default Services;