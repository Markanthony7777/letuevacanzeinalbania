import React from 'react';
import { motion } from 'framer-motion';

const FAQItalian = () => {
  const faqs = [
    {
      question: "Quanto tempo prima devo prenotare il mio tour?",
      answer: "Consigliamo di prenotare almeno 2-3 mesi prima per garantire la disponibilità e ottenere le migliori tariffe."
    },
    {
      question: "I tour sono personalizzabili?",
      answer: "Sì, tutti i nostri tour possono essere personalizzati in base alle tue preferenze e interessi."
    },
    {
      question: "Che lingue parlano le vostre guide?",
      answer: "Le nostre guide parlano fluentemente italiano, inglese e albanese."
    },
    {
      question: "Come posso pagare?",
      answer: "Accettiamo pagamenti con carta di credito, bonifico bancario e PayPal."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Domande Frequenti</h2>
          <p className="text-xl text-gray-600">Trova le risposte alle domande più comuni</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQItalian;