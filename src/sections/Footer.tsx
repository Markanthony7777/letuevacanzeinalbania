import React from 'react';
import { Mail, MapPin, Facebook, Youtube, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { label: 'Home', onClick: scrollToTop },
    { label: 'Il Tuo Viaggio', onClick: () => handleScrollTo('il-tuo-viaggio') },
    { label: 'Galleria', onClick: () => handleScrollTo('gallery') },
    { label: 'Comunità', onClick: () => handleScrollTo('comunita') },
    { label: 'Chi Siamo', onClick: () => handleScrollTo('chi-siamo') },
    { label: 'Contatti', onClick: () => handleScrollTo('footer') }
  ];

  return (
    <footer id="footer" className="bg-[#3DB4C0] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <motion.svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#D4AF37"
            fillOpacity="0.2"
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M321.39,76.44c58-15.79,114.16-40.13,172-51.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,41,906.67,82,985.66,102.83c70.05,18.48,146.53,26.09,214.34,3V0H0V47.35A600.21,600.21,0,0,0,321.39,76.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/images/logo.transparent.letuevacanze.png"
                alt="Le Tue Vacanze Logo"
                className="h-auto w-[200px] object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-white/90 mb-6 font-light">
              Servizi turistici premium con attenzione esclusiva in Albania. Viaggia in modo intelligente. Rimani più a lungo. Sentiti a casa.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/groups/400000239224187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/vacanze_in_albania_/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/channel/UCcfavVUrnrAtz-YqKsL9xvw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD700] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-[#D4AF37]">Collegamenti Rapidi</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={item.onClick}
                    className="text-white/90 hover:text-[#D4AF37] transition-colors duration-300 font-light text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-[#D4AF37]">Contattaci</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#D4AF37] mr-3 mt-1" />
                <span className="text-white/90 font-light">Valona, Albania</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 text-[#D4AF37] mr-3" />
                <a href="https://wa.me/393270543762" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#D4AF37] transition-colors duration-300 font-light">
                  +39 327-0543762
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#D4AF37] mr-3" />
                <span className="text-white/90 font-light">info@tuevacanzeinalbania.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm font-light">
            © {new Date().getFullYear()} Le Tue Vacanze In Albania. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;