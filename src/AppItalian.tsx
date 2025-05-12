import React from 'react';
import { Link } from 'react-router-dom';
import NavbarItalian from './components/NavbarItalian';
import HeroItalian from './sections/HeroItalian';
import TourPackagesItalian from './sections/TourPackagesItalian';
import ServicesItalian from './sections/ServicesItalian';
import BookingProcessItalian from './sections/BookingProcessItalian';
import SocialProofItalian from './sections/SocialProofItalian';
import TestimonialsItalian from './sections/TestimonialsItalian';
import AboutUsItalian from './sections/AboutUsItalian';
import FAQItalian from './sections/FAQItalian';
import FooterItalian from './sections/FooterItalian';
import CallToActionItalian from './components/CallToActionItalian';
import FinalCTAItalian from './sections/FinalCTAItalian';

function AppItalian() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="absolute top-4 right-4 z-50">
        <Link to="/" className="text-white hover:text-[#FFD700] transition-colors">
          English
        </Link>
      </div>
      <NavbarItalian />
      <HeroItalian />
      <ServicesItalian />
      <TourPackagesItalian />
      <BookingProcessItalian />
      <SocialProofItalian />
      <TestimonialsItalian />
      <CallToActionItalian 
        title="Pronto a vivere l'Albania come mai prima d'ora?" 
        subtitle="Unisciti alle migliaia di viaggiatori che hanno scoperto il gioiello nascosto d'Europa"
        primaryButton="Pianifica il Mio Viaggio"
      />
      <AboutUsItalian />
      <FAQItalian />
      <FinalCTAItalian />
      <FooterItalian />
    </div>
  );
}

export default AppItalian;