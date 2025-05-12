import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Il Tuo Viaggio', sectionId: 'il-tuo-viaggio' },
    { label: 'Galleria', sectionId: 'gallery' },
    { label: 'Comunità', sectionId: 'comunita' },
    { label: 'Chi Siamo', sectionId: 'chi-siamo' },
    { label: 'Contatti', sectionId: 'footer' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#3DB4C0]/95 shadow-md' : 'bg-transparent'
    } py-2`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center"
          >
            <img 
              src="/assets/images/logo.transparent.letuevacanze.png"
              alt="Le Tue Vacanze Logo"
              className="h-auto w-[150px] md:w-[200px] object-contain"
              loading="eager"
              fetchpriority="high"
            />
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button 
                key={index}
                onClick={() => scrollToSection(item.sectionId)}
                className={`font-display text-lg ${
                  isScrolled ? 'text-[#FFD700]' : 'text-white'
                } hover:text-[#FFD700] relative group transition-all duration-300`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </button>
            ))}

            <a 
              href="https://wa.me/393270543762"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold rounded transition-colors duration-300 flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="font-display">Scrivici Ora</span>
            </a>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://wa.me/393270543762"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 bg-[#25D366] hover:bg-[#22c55e] text-white rounded transition-colors duration-300 flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <button 
              type="button" 
              className={`${
                isScrolled ? 'text-[#FFD700]' : 'text-white'
              } hover:text-[#FFD700] focus:outline-none transition-all duration-300`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      } overflow-hidden bg-white/95`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <button 
              key={index}
              onClick={() => scrollToSection(item.sectionId)}
              className="block w-full text-left px-4 py-2 text-base font-display text-gray-800 hover:text-[#3DB4C0] hover:bg-gray-100 rounded-md transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;