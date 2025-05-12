import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const FooterItalian = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Chi Siamo</h3>
            <p className="text-gray-400">
              Specialisti in tour personalizzati in Albania, dedicati a creare esperienze di viaggio indimenticabili.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Tour</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tour Costieri</li>
              <li>Avventure in Montagna</li>
              <li>Tour Culturali</li>
              <li>Tour Enogastronomici</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@example.com</li>
              <li>Tel: +355 69 123 4567</li>
              <li>WhatsApp: +355 69 123 4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Albania Travel Experience. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterItalian;