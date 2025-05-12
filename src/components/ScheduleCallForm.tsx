import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ScheduleCallFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: 'tour' | 'accommodation' | 'transport';
}

const ScheduleCallForm: React.FC<ScheduleCallFormProps> = ({ 
  isOpen, 
  onClose,
  formType = 'tour'
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    accommodationType: '',
    transportType: '',
    message: ''
  });

  const tourPackages = [
    'Grand Sud Albania',
    'Valona e Dintorni',
    'Avventura sulla Nave Pirata',
    'Tour delle Città Storiche',
    'Avventura in Montagna',
    'Relax sulla Spiaggia',
    'Tour Privato'
  ];

  const accommodationTypes = [
    'Affitto breve termine',
    'Affitto lungo termine',
    'Hotel',
    'Villa'
  ];

  const transportTypes = [
    'Noleggio Auto',
    'Trasferimento Aeroporto',
    'Trasporto Locale',
    'Guida Turistica Privata',
    'Viaggio Intercittà'
  ];

  const validatePhoneNumber = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    if (!/^\+?\d{10,15}$/.test(cleanPhone)) {
      return 'Inserisci un numero di telefono valido con prefisso internazionale (es. +1234567890)';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const error = validatePhoneNumber(value);
      setPhoneError(error);
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsAppMessage = () => {
    let serviceType = '';
    let selectedOption = '';

    switch (formType) {
      case 'tour':
        serviceType = 'Pacchetto';
        selectedOption = formData.package;
        break;
      case 'accommodation':
        serviceType = 'Tipo di Alloggio';
        selectedOption = formData.accommodationType;
        break;
      case 'transport':
        serviceType = 'Tipo di Servizio';
        selectedOption = formData.transportType;
        break;
    }
    
    const message = `Nuova richiesta di contatto\n\nNome: ${formData.name}\nTelefono: ${formData.phone}\nEmail: ${formData.email}\n${serviceType}: ${selectedOption}\nMessaggio: ${formData.message}`;
    window.location.href = `https://wa.me/00393270543762?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneError = validatePhoneNumber(formData.phone);
    if (phoneError) {
      setPhoneError(phoneError);
      return;
    }
    
    setIsSubmitting(true);

    try {
      setStep(4);
      setTimeout(() => {
        sendWhatsAppMessage();
      }, 2000);
    } catch (error) {
      console.error('Error sending form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case 'tour':
        return 'Prenota il Tuo Tour';
      case 'accommodation':
        return 'Richiedi un Alloggio';
      case 'transport':
        return 'Richiedi il Trasporto';
      default:
        return 'Prenota Ora';
    }
  };

  const getSelectOptions = () => {
    switch (formType) {
      case 'tour':
        return {
          name: 'package',
          label: 'Seleziona un pacchetto',
          options: tourPackages,
          placeholder: 'Seleziona un pacchetto'
        };
      case 'accommodation':
        return {
          name: 'accommodationType',
          label: 'Tipo di Alloggio',
          options: accommodationTypes,
          placeholder: 'Seleziona tipo di alloggio'
        };
      case 'transport':
        return {
          name: 'transportType',
          label: 'Tipo di Servizio',
          options: transportTypes,
          placeholder: 'Seleziona tipo di servizio'
        };
      default:
        return {
          name: 'package',
          label: 'Seleziona un pacchetto',
          options: tourPackages,
          placeholder: 'Seleziona un pacchetto'
        };
    }
  };

  if (!isOpen) return null;

  const selectConfig = getSelectOptions();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gradient-to-br from-[#3DB4C0] to-[#2A95A0] rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/20"
      >
        <div className="p-6">
          {isSubmitting ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FFD700] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3DB4C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Richiesta Ricevuta!</h3>
              <p className="text-white/90 text-sm">
                Reindirizzamento a WhatsApp...
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display font-bold text-white">
                  {getFormTitle()}
                </h2>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                    Numero di Telefono (con prefisso internazionale)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-white/10 border rounded-lg transition-all duration-300 text-white placeholder-white/50 ${
                      phoneError 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/50 focus:border-red-500' 
                        : 'border-white/30 focus:ring-2 focus:ring-white/50 focus:border-white'
                    }`}
                    placeholder="+1234567890"
                  />
                  {phoneError && (
                    <p className="mt-1 text-sm text-red-400">{phoneError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 text-white placeholder-white/50"
                    placeholder="La tua email"
                  />
                </div>

                <div>
                  <label 
                    htmlFor={selectConfig.name}
                    className="block text-sm font-medium text-white/80 mb-1"
                  >
                    {selectConfig.label}
                  </label>
                  <select
                    id={selectConfig.name}
                    name={selectConfig.name}
                    required
                    value={formData[selectConfig.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 text-white"
                  >
                    <option value="" className="bg-[#3DB4C0] text-white">
                      {selectConfig.placeholder}
                    </option>
                    {selectConfig.options.map((option) => (
                      <option key={option} value={option} className="bg-[#3DB4C0] text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Dicci cosa ti interessa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Parlaci dei tuoi piani di viaggio e di come possiamo aiutarti..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !!phoneError}
                  className="w-full px-6 py-3 bg-[#FFD700] text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Prenota Ora'}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ScheduleCallForm;