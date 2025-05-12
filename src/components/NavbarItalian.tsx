import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const NavbarItalian = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ['Home', 'Servizi', 'Comunità', 'Chi Siamo', 'Contatti'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#3DB4C0]/95 shadow-md' : 'bg-transparent'
    } py-2`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="/assets/images/transparent.logo.png" 
              alt="Le Tue Vacanze In Albania" 
              className="h-20 md:h-28 w-auto object-contain transition-all duration-300"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item === 'Servizi' ? (
                <div key={index} className="relative group">
                  <button 
                    className={`font-display text-lg ${
                      isScrolled ? 'text-[#FFD700]' : 'text-white'
                    } hover:text-[#FFD700] flex items-center relative transition-all duration-300`}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    {item}
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </button>
                  <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white/95 ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${
                    isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    <div className="py-1">
                      {['Pacchetti Tour', 'Tour Privati', 'Transfer Aeroporto e Porto', 'Affitto Appartamenti', 
                        'Visti & Residenza', 'Noleggio Auto', 'Biglietti Aerei & Navi', 'Hotel & B&B', 'Eventi Settimanali']
                        .map((subItem, subIndex) => (
                          <a 
                            key={subIndex}
                            href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="block px-4 py-2 text-base font-display text-gray-800 hover:text-[#3DB4C0] hover:bg-gray-100 transition-all duration-300"
                          >
                            {subItem}
                          </a>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ) : (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className={`font-display text-lg ${
                    isScrolled ? 'text-[#FFD700]' : 'text-white'
                  } hover:text-[#FFD700] relative group transition-all duration-300`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                </a>
              )
            ))}

            <a 
              href="https://wa.me/393270543762" 
              className="h-10 px-4 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold rounded transition-colors duration-300 flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="font-display">Scrivici Ora</span>
            </a>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://wa.me/393270543762" 
              className="h-10 px-4 bg-[#25D366] hover:bg-[#22c55e] text-white rounded transition-colors duration-300 flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button 
              type="button" 
              className={`${
                isScrolled ? 'text-[#FFD700]' : 'text-white'
              } hover:text-[#FFD700] focus:outline-none transition-all duration-300`}
              onClick={toggleMobileMenu}
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
            <a 
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="block px-4 py-2 text-base font-display text-gray-800 hover:text-[#3DB4C0] hover:bg-gray-100 rounded-md transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarItalian;