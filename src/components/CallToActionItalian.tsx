import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButton: string;
}

const CallToActionItalian: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  primaryButton
}) => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all">
              {primaryButton}
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all">
              Contattaci
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionItalian;