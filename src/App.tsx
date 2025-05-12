import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TourPackages from './sections/TourPackages';
import Services from './sections/Services';
import Gallery from './components/Gallery';
import BookingProcess from './sections/BookingProcess';
import SocialProof from './sections/SocialProof';
import Testimonials from './sections/Testimonials';
import AboutUs from './sections/AboutUs';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import CallToAction from './components/CallToAction';
import FinalCTA from './sections/FinalCTA';

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = location.pathname === '/en' ? 'en' : 'it';
    i18n.changeLanguage(lang);
  }, [location, i18n]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="absolute top-4 right-4 z-50">
        {i18n.language === 'it' ? (
          <Link to="/en" className="text-white hover:text-[#FFD700] transition-colors">
            English
          </Link>
        ) : (
          <Link to="/" className="text-white hover:text-[#FFD700] transition-colors">
            Italiano
          </Link>
        )}
      </div>
      <Navbar />
      <Hero />
      <Services />
      <TourPackages />
      <Gallery />
      <BookingProcess />
      <SocialProof />
      <Testimonials />
      <CallToAction 
        title="Ready to experience Albania like never before?" 
        subtitle="Join thousands of travelers who have discovered the hidden gem of Europe"
        primaryButton="Start Planning My Trip"
      />
      <AboutUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;