import React, { useState } from 'react';
import ScheduleCallForm from './ScheduleCallForm';

interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButton: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  title, 
  subtitle, 
  primaryButton
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto a vivere l'Albania come mai prima d'ora?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Unisciti a migliaia di viaggiatori che hanno scoperto il gioiello nascosto d'Europa
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="h-10 px-4 bg-[#FFD700] hover:bg-[#3DB4C0] text-gray-900 hover:text-white font-semibold rounded transition-colors duration-300 flex items-center justify-center"
            >
              Inizia a Pianificare il Tuo Viaggio
            </button>
          </div>
        </div>
      </section>

      <ScheduleCallForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default CallToAction;