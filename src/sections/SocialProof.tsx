import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Youtube, MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SocialProof = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const { t } = useTranslation();
  const shareMessage = encodeURIComponent("Ho pensato che ti sarebbe piaciuto vedere questa agenzia che offre tutto per soggiorni brevi o lunghi in Albania con una comunità! Visita www.tuevacanzeinalbania.com");
  const whatsappUrl = `https://wa.me/?text=${shareMessage}`;
  const facebookGroupUrl = "https://www.facebook.com/groups/400000239224187";
  const youtubeChannelUrl = "https://www.youtube.com/channel/UCcfavVUrnrAtz-YqKsL9xvw";
  const instagramUrl = "https://www.instagram.com/vacanze_in_albania_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  useEffect(() => {
    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
    };

    const handleVideoError = () => {
      console.error('Video failed to load');
      setIsVideoLoaded(false);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleVideoLoad);
      videoElement.addEventListener('error', handleVideoError);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleVideoLoad);
        videoElement.removeEventListener('error', handleVideoError);
      }
    };
  }, []);

  const socialPlatforms = [
    {
      icon: Facebook,
      title: "Facebook",
      description: "Unisciti alla nostra community con oltre 14.000 membri attivi",
      buttonText: "✦ Unisciti alla Community ✦",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      stats: "14.000+ Membri",
      link: facebookGroupUrl
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Scopri le nostre avventure giornaliere e vivi l'Albania con noi",
      buttonText: "✦ Segui su Instagram ✦",
      color: "bg-gradient-to-r from-purple-600 to-pink-600",
      hoverColor: "hover:from-purple-700 hover:to-pink-700",
      stats: "1.000+ Post",
      link: instagramUrl
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Guarda i nostri video e scopri la vera Albania in movimento",
      buttonText: "✦ Guarda i Video ✦",
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700",
      stats: "50+ Video",
      link: youtubeChannelUrl
    }
  ];

  return (
    <section id="comunita" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              opacity: isVideoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <source src="/assets/videos/vlora.comunita.mp4" type="video/mp4" />
          </video>

          {!isVideoLoaded && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg)'
              }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Unisciti alla Nostra Comunità
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connettiti con migliaia di viaggiatori e diventa parte della nostra famiglia in crescita
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/20 transform hover:translate-y-[-10px] transition-all duration-300"
            >
              <a 
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <platform.icon className="h-16 w-16 mx-auto mb-6 text-white hover:text-[#FFD700] transition-colors duration-300" />
              </a>
              <h3 className="text-2xl font-semibold text-white mb-2">{platform.title}</h3>
              <p className="text-white/80 mb-4">{platform.description}</p>
              <div className="text-[#FFD700] font-semibold mb-6">{platform.stats}</div>
              <motion.a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-block px-6 py-3 ${platform.color} ${platform.hoverColor} text-white font-medium rounded-lg transition duration-300 w-full`}
              >
                {platform.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-white/90 text-xl mb-8 max-w-2xl text-center">
            Ti è piaciuta la tua esperienza con noi? Condividila con gli amici e aiutali a scoprire la bellezza dell'Albania
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <MessageCircle className="w-6 h-6 mr-2 transition-transform duration-300 group-hover:scale-110" />
            Invita un amico su WhatsApp
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          video {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;