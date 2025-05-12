import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "L'Albania è sicura per i turisti?",
      answer: "Sì! L'Albania è una delle destinazioni più accoglienti e sicure d'Europa. I tassi di criminalità sono bassi, in particolare contro i turisti, e i locali sono noti per la loro eccezionale ospitalità. Molti viaggiatori riferiscono di sentirsi più sicuri in Albania che in molti paesi dell'Europa occidentale."
    },
    {
      question: "Ho bisogno di un visto per visitare l'Albania?",
      answer: "La maggior parte dei viaggiatori provenienti dall'UE, USA, Regno Unito e molti altri paesi può entrare in Albania senza visto per un massimo di 90 giorni. Verifica sempre le normative vigenti in base alla tua nazionalità."
    },
    {
      question: "Qual è il periodo migliore per visitare l'Albania?",
      answer: "La primavera (aprile-giugno) e l'autunno (settembre-ottobre) sono ideali per un clima piacevole e meno turisti. L'estate è perfetta per gli amanti del mare ma può essere più affollata."
    },
    {
      question: "L'inglese è parlato diffusamente in Albania?",
      answer: "L'inglese è parlato nella maggior parte delle zone turistiche, specialmente dai giovani albanesi. Si sente anche italiano, greco e un po' di tedesco o francese in alcune regioni."
    },
    {
      question: "Che valuta si usa in Albania?",
      answer: "La valuta ufficiale è il Lek albanese (ALL). Molti luoghi accettano euro, ma è meglio avere un po' di valuta locale per taxi, mercati e cittadine più piccole."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Domande Frequenti</h2>
          <p className="text-xl text-gray-600">
            Tutto quello che devi sapere sul viaggio in Albania
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-teal-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              <div className={`px-5 pb-5 transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;