import React from 'react';
import { Users, Globe, Heart, Languages } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-white px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Chi Siamo</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Siamo un team di viaggi appassionato con sede a Valona, Albania, con oltre 5 anni di esperienza. Originari dell'Italia, abbiamo vissuto in tutta Europa e nel Medio Oriente. Con oltre 1.000 clienti soddisfatti e 14.000 membri su Facebook, creiamo esperienze di viaggio che cambiano la vita grazie a un servizio personalizzato di alto livello, supporto multilingue (inglese, italiano, francese, spagnolo) e una profonda conoscenza del territorio.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <Users className="h-8 w-8 text-teal-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">1.000+ Clienti</h3>
                <p className="text-gray-600">Viaggiatori soddisfatti che hanno scoperto l'Albania con noi</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Globe className="h-8 w-8 text-teal-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">14.000+ Membri nella Community</h3>
                <p className="text-gray-600">Membri attivi nel nostro gruppo Facebook di viaggi</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Heart className="h-8 w-8 text-teal-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Servizio Personalizzato</h3>
                <p className="text-gray-600">Esperienze su misura con attenzione di alta qualità</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Languages className="h-8 w-8 text-teal-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Supporto Multilingue</h3>
                <p className="text-gray-600">Parliamo inglese, italiano, francese e spagnolo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;