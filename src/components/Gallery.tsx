import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      type: 'image',
      url: '/assets/images/bellydancing.localcommunity.event.jpeg',
      title: 'Danza del Ventre',
      description: 'Eventi culturali nella comunità locale',
      loading: 'eager',
      fetchPriority: 'high'
    },
    {
      type: 'image',
      url: '/assets/images/beratcastlephoto.jpg',
      title: 'Castello di Berat',
      description: 'Il maestoso castello di Berat, patrimonio UNESCO',
      loading: 'eager',
      fetchPriority: 'high'
    },
    {
      type: 'image',
      url: '/assets/images/blueeye.jpeg',
      title: 'Occhio Blu',
      description: 'La sorgente naturale dalle acque cristalline'
    },
    {
      type: 'image',
      url: '/assets/images/blueeyebridge.jpeg',
      title: 'Ponte dell\'Occhio Blu',
      description: 'Il ponte panoramico sulla sorgente'
    },
    {
      type: 'image',
      url: '/assets/images/blueeyeclientphoto.jpeg',
      title: 'Visitatori all\'Occhio Blu',
      description: 'Momenti indimenticabili nella natura'
    },
    {
      type: 'image',
      url: '/assets/images/blueeyefamily.jpeg',
      title: 'Famiglia all\'Occhio Blu',
      description: 'Ricordi di famiglia in un luogo magico'
    },
    {
      type: 'image',
      url: '/assets/images/blueeyesaranda.jpeg',
      title: 'Vista su Saranda',
      description: 'Panorama mozzafiato dalla città costiera'
    },
    {
      type: 'image',
      url: '/assets/images/blueeyesign.jpeg',
      title: 'Indicazioni Occhio Blu',
      description: 'Segnaletica verso la sorgente'
    },
    {
      type: 'image',
      url: '/assets/images/borsh.jpeg',
      title: 'Spiaggia di Borsh',
      description: 'Una delle spiagge più lunghe della Riviera Albanese'
    },
    {
      type: 'image',
      url: '/assets/images/bunkart2.jpeg',
      title: 'Bunker Art 2',
      description: 'Museo storico nei bunker di Tirana'
    },
    {
      type: 'image',
      url: '/assets/images/bunkartnumber2.jpeg',
      title: 'Interno Bunker Art',
      description: 'Arte e storia si incontrano'
    },
    {
      type: 'image',
      url: '/assets/images/cascatediborsh.jpeg',
      title: 'Cascate di Borsh',
      description: 'Spettacolare cascata naturale'
    },
    {
      type: 'image',
      url: '/assets/images/castelloditirana.jpeg',
      title: 'Castello di Tirana',
      description: 'Fortezza storica della capitale'
    },
    {
      type: 'image',
      url: '/assets/images/coupleinradhime.jpeg',
      title: 'Coppia a Radhimë',
      description: 'Momenti romantici sulla costa'
    },
    {
      type: 'image',
      url: '/assets/images/family.tirana.kids.jpeg',
      title: 'Famiglia a Tirana',
      description: 'Divertimento per grandi e piccini'
    },
    {
      type: 'image',
      url: '/assets/images/familyintirana.jpeg',
      title: 'Esplorando Tirana',
      description: 'Avventure familiari nella capitale'
    },
    {
      type: 'image',
      url: '/assets/images/gjirokaster.family.photo.jpeg',
      title: 'Famiglia a Gjirokaster',
      description: 'Ricordi nella città di pietra'
    },
    {
      type: 'image',
      url: '/assets/images/gjirokastertirane.jpeg',
      title: 'Vista su Gjirokaster',
      description: 'Panorama della città UNESCO'
    },
    {
      type: 'image',
      url: '/assets/images/grandemoscheaditirana.jpeg',
      title: 'Grande Moschea di Tirana',
      description: 'Il più grande edificio religioso dei Balcani'
    },
    {
      type: 'image',
      url: '/assets/images/grandemoscheaditiranafuori.jpeg',
      title: 'Esterno della Moschea',
      description: 'Architettura moderna e tradizione'
    },
    {
      type: 'image',
      url: '/assets/images/greencoastbeach.jpeg',
      title: 'Green Coast',
      description: 'Spiaggia incontaminata'
    },
    {
      type: 'image',
      url: '/assets/images/houseofeqerembeyvlora.jpeg',
      title: 'Casa di Eqerem Bey',
      description: 'Storia e cultura a Valona'
    },
    {
      type: 'image',
      url: '/assets/images/ksamilbeach.view.jpeg',
      title: 'Vista su Ksamil',
      description: 'Le acque turchesi di Ksamil'
    },
    {
      type: 'image',
      url: '/assets/images/ksamilbeachphoto.jpeg',
      title: 'Spiaggia di Ksamil',
      description: 'Paradiso balneare'
    },
    {
      type: 'image',
      url: '/assets/images/ksamilview.jpeg',
      title: 'Panorama di Ksamil',
      description: 'Vista aerea delle isole'
    },
    {
      type: 'image',
      url: '/assets/images/lapiazzaavalona.jpeg',
      title: 'Piazza di Valona',
      description: 'Centro storico della città'
    },
    {
      type: 'image',
      url: '/assets/images/monosterozvernic.jpeg',
      title: 'Monastero di Zvernic',
      description: 'Isola della spiritualità'
    },
    {
      type: 'image',
      url: '/assets/images/parcoarcheologicodiapllonia.jpeg',
      title: 'Parco Archeologico di Apollonia',
      description: 'Antica città greca'
    },
    {
      type: 'image',
      url: '/assets/images/monica.mati.jpeg',
      title: 'Incontri Locali',
      description: 'Ospitalità albanese'
    },
    {
      type: 'image',
      url: '/assets/images/podabeachksamil.jpeg',
      title: 'Spiaggia di Poda',
      description: 'Relax a Ksamil'
    },
    {
      type: 'image',
      url: '/assets/images/radhimë.jpeg',
      title: 'Radhimë',
      description: 'Villaggio costiero'
    },
    {
      type: 'image',
      url: '/assets/images/radhime.outside.jpeg',
      title: 'Vista su Radhimë',
      description: 'Panorama costiero'
    },
    {
      type: 'image',
      url: '/assets/images/sarandarestaurantview.jpeg',
      title: 'Ristorante a Saranda',
      description: 'Cucina con vista mare'
    },
    {
      type: 'image',
      url: '/assets/images/sitoarchelogicodiapolloniadentro.jpeg',
      title: 'Interno di Apollonia',
      description: 'Dettagli archeologici'
    },
    {
      type: 'image',
      url: '/assets/images/skytoweroftirana.jpeg',
      title: 'Sky Tower',
      description: 'Grattacielo di Tirana'
    },
    {
      type: 'image',
      url: '/assets/images/tirana.cliente.jpeg',
      title: 'Clienti a Tirana',
      description: 'Esperienze autentiche'
    },
    {
      type: 'image',
      url: '/assets/images/tiranacastle.jpeg',
      title: 'Castello di Tirana',
      description: 'Storia della capitale'
    },
    {
      type: 'image',
      url: '/assets/images/tiranamosqueatnight.jpeg',
      title: 'Moschea di Notte',
      description: 'Tirana illuminata'
    },
    {
      type: 'image',
      url: '/assets/images/tiranaskytoweratnight.jpeg',
      title: 'Sky Tower di Notte',
      description: 'Luci della città'
    },
    {
      type: 'image',
      url: '/assets/images/tiranastadium.jpeg',
      title: 'Stadio di Tirana',
      description: 'Arena sportiva'
    },
    {
      type: 'image',
      url: '/assets/images/wineryintirana.jpeg',
      title: 'Cantina di Tirana',
      description: 'Degustazione vini'
    },
    {
      type: 'video',
      url: '/assets/videos/beach.video.party.mp4',
      title: 'Festa in Spiaggia',
      description: 'Divertimento sulla costa albanese'
    },
    {
      type: 'video',
      url: '/assets/videos/bellydancing.local.events.valona.mp4',
      title: 'Danza del Ventre',
      description: 'Eventi culturali a Valona'
    },
    {
      type: 'video',
      url: '/assets/videos/blueeyevideo.mp4',
      title: 'Occhio Blu',
      description: 'La magia della sorgente'
    },
    {
      type: 'video',
      url: '/assets/videos/dhermi.video.beach.mp4',
      title: 'Spiaggia di Dhërmi',
      description: 'Paradiso sulla Riviera'
    },
    {
      type: 'video',
      url: '/assets/videos/family.trip.mp4',
      title: 'Viaggio in Famiglia',
      description: 'Avventure per tutti'
    },
    {
      type: 'video',
      url: '/assets/videos/infinitypool.view.sunset.mp4',
      title: 'Piscina Infinity',
      description: 'Tramonto mozzafiato'
    },
    {
      type: 'video',
      url: '/assets/videos/kid.video.mp4',
      title: 'Bambini in Vacanza',
      description: 'Gioia e divertimento'
    },
    {
      type: 'video',
      url: '/assets/videos/ocean.sunset.mp4',
      title: 'Tramonto sul Mare',
      description: 'Momenti magici'
    },
    {
      type: 'video',
      url: '/assets/videos/pirateboatvlora.mp4',
      title: 'Barca dei Pirati',
      description: 'Avventura in mare'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  }, [galleryItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const preloadImage = (url: string) => {
      const img = new Image();
      img.src = url;
    };

    const preloadVideo = (url: string) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = url;
    };

    const nextIndex = (currentIndex + 1) % galleryItems.length;
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    [nextIndex, prevIndex].forEach(index => {
      const item = galleryItems[index];
      if (item.type === 'image') {
        preloadImage(item.url);
      } else {
        preloadVideo(item.url);
      }
    });
  }, [currentIndex, galleryItems]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMediaLoad = () => {
    setIsLoading(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="gallery" className="py-16 bg-[#3DB4C0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display text-white text-center mb-12">
          Galleria
        </h2>
        
        <div 
          className="relative max-h-[80vh] overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video"
            >
              {galleryItems[currentIndex].type === 'video' ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                    onLoadedData={handleMediaLoad}
                  >
                    <source src={galleryItems[currentIndex].url} type="video/mp4" />
                  </video>
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-20 right-8 z-10 p-3 rounded-full bg-black/20 text-white hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300"
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6" />
                    ) : (
                      <Volume2 className="w-6 h-6" />
                    )}
                  </button>
                </>
              ) : (
                <picture>
                  <source
                    media="(min-width: 1920px)"
                    srcSet={`${galleryItems[currentIndex].url}?w=1920 1x, ${galleryItems[currentIndex].url}?w=3840 2x`}
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 1280px)"
                    srcSet={`${galleryItems[currentIndex].url}?w=1280 1x, ${galleryItems[currentIndex].url}?w=2560 2x`}
                    type="image/webp"
                  />
                  <img
                    src={galleryItems[currentIndex].url}
                    alt={galleryItems[currentIndex].title}
                    className="w-full h-full object-cover"
                    loading={galleryItems[currentIndex].loading || 'lazy'}
                    fetchPriority={galleryItems[currentIndex].fetchPriority || 'auto'}
                    onLoad={handleMediaLoad}
                  />
                </picture>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-display mb-2">
                    {galleryItems[currentIndex].title}
                  </h3>
                  <p className="text-white/80">
                    {galleryItems[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-[#FFD700] hover:bg-[#FFD700] hover:text-blue-600 transition-all duration-300 opacity-80 hover:opacity-100"
            aria-label="Immagine precedente"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-[#FFD700] hover:bg-[#FFD700] hover:text-blue-600 transition-all duration-300 opacity-80 hover:opacity-100"
            aria-label="Immagine successiva"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#FFD700] w-8'
                    : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Vai all'immagine ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;