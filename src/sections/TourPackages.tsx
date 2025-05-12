import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TourPackageCard from '../components/TourPackageCard';

const TourPackages = () => {
  const { t } = useTranslation();
  
  const packages = [
    {
      title: "Grand Sud Albania",
      subtitle: "Esperienza Completa in Un Giorno",
      description: "Viaggio attraverso la splendida rotta meridionale dell'Albania, visitando Tepelena, il Castello di Gjirokaster, l'Occhio Blu, Ksamil, Saranda e il Castello — tutto in un giorno.",
      duration: "12 ore (08:00 - 20:00)",
      locations: [
        "Tepelena",
        "Castello di Gjirokaster",
        "Occhio Blu",
        "Ksamil",
        "Saranda"
      ],
      imageUrl: "/assets/images/sarandadaypicture.jpg",
      includes: [
        "Guida professionale",
        "Trasporto",
        "Sosta pranzo opzionale",
        "Biglietti d'ingresso",
        "Acqua e snack",
        "Soste fotografiche"
      ],
      loading: 'eager',
      fetchPriority: 'high'
    },
    {
      title: "Valona e Dintorni",
      subtitle: "Tour Culturale di Mezza Giornata",
      description: "Scopri il ricco patrimonio culturale di Valona, partendo dal sereno Monastero di Zvernec. Visita il centro storico di Muradie e antiche moschee e monumenti. Perfetta introduzione di mezza giornata alla storia di Valona.",
      duration: "6 ore (08:00 - 14:00)",
      locations: [
        "Monastero di Zvernec",
        "Centro Muradie",
        "Centro Storico di Valona"
      ],
      imageUrl: "/assets/images/valonaatnight.jpeg",
      includes: [
        "Guida esperta",
        "Biglietti d'ingresso",
        "Acqua e rinfreschi",
        "Trasporto",
        "Organizzazione pranzo opzionale"
      ],
      loading: 'eager',
      fetchPriority: 'high'
    },
    {
      title: "Avventura sulla Nave Pirata",
      subtitle: "Esplorazione del Mare Ionio",
      description: "Salpa lungo la penisola di Karaburun e la misteriosa isola di Sazan. Esplora la leggendaria Grotta dei Pirati (Haxhi Ali). Scegli tra pranzo a bordo o sosta su una spiaggia nascosta.",
      duration: "8 ore (10:00 - 18:00)",
      locations: [
        "Penisola di Karaburun",
        "Isola di Sazan",
        "Grotta di Haxhi Ali"
      ],
      imageUrl: "/assets/images/pirateboatvlorasailing.jpeg",
      includes: [
        "Giro in barca",
        "Pranzo a bordo opzionale",
        "Equipaggio professionale",
        "Attrezzatura di sicurezza",
        "Soste per nuotare",
        "Acqua e rinfreschi"
      ],
      loading: 'lazy'
    },
    {
      title: "Tour delle Città Storiche",
      subtitle: "Scopri Berat e Gjirokastër",
      description: "Esplora le affascinanti città storiche di Berat e Gjirokastër, entrambe Patrimonio dell'Umanità UNESCO. Passeggia tra le strade acciottolate, visita castelli antichi e immergiti nella cultura albanese.",
      duration: "10 ore (08:00 - 18:00)",
      locations: [
        "Castello di Berat",
        "Centro Storico di Gjirokastër",
        "Quartiere Mangalem"
      ],
      imageUrl: "/assets/images/beratcastlephoto.jpg",
      includes: [
        "Tour guidato",
        "Ingressi ai musei",
        "Trasporto andata e ritorno",
        "Acqua e snack"
      ],
      loading: 'lazy'
    },
    {
      title: "Avventura in Montagna",
      subtitle: "Escursione nelle Alpi Albanesi",
      description: "Partecipa a un'escursione guidata nelle spettacolari Alpi Albanesi. Goditi panorami mozzafiato, aria fresca di montagna e scopri la flora e fauna locali.",
      duration: "12 ore (07:00 - 19:00)",
      locations: [
        "Parco Nazionale di Theth",
        "Valle di Valbona",
        "Occhio Blu di Theth"
      ],
      imageUrl: "/assets/images/blueeyesfamilybridgesite.jpeg",
      includes: [
        "Guida escursionistica",
        "Trasporto 4x4",
        "Pranzo al sacco",
        "Acqua e rinfreschi"
      ],
      loading: 'lazy'
    },
    {
      title: "Relax sulla Spiaggia",
      subtitle: "Giornata a Ksamil",
      description: "Trascorri una giornata rilassante sulle spiagge di sabbia bianca di Ksamil. Nuota nelle acque cristalline, prendi il sole e assapora la cucina locale nei ristoranti sul mare.",
      duration: "8 ore (09:00 - 17:00)",
      locations: [
        "Spiaggia di Ksamil",
        "Isole di Ksamil",
        "Spiaggia Mirror"
      ],
      imageUrl: "/assets/images/ksamilblue.jpg",
      includes: [
        "Telo mare",
        "Lettino e ombrellone",
        "Cocktail di benvenuto",
        "Acqua e snack"
      ],
      loading: 'lazy'
    }
  ];

  return (
    <section id="tour-packages" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
            Pacchetti Tour Curati
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri le destinazioni più belle dell'Albania con i nostri pacchetti turistici curati nei minimi dettagli, progettati per offrire ricordi indimenticabili.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TourPackageCard {...pkg} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;