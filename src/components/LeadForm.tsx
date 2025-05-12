import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: ''
  });

  const services = [
    'Tour Packages',
    'Private Custom Tours',
    'Airport and Port Transfers',
    'Apartment Rentals',
    'Visa & Residency Permit Consultancy',
    'Car Rentals',
    'Flight & Boat Ticket Booking',
    'Hotel & B&B Partnerships',
    'Weekly Expat & Tourist Events'
  ];

  const validatePhoneNumber = (phone: string) => {
    // Remove any non-digit characters except +
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    
    // Check if it starts with + and has 10-15 digits
    if (!/^\+?\d{10,15}$/.test(cleanPhone)) {
      return 'Please enter a valid phone number with country code (e.g., +1234567890)';
    }
    
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'contact') {
      const error = validatePhoneNumber(value);
      setPhoneError(error);
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsAppMessage = () => {
    const message = `New potential client inquiry\n\nName: ${formData.name}\nContact: ${formData.contact}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.location.href = `https://wa.me/00393270543762?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneError = validatePhoneNumber(formData.contact);
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

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <section id="contact" className="relative py-16 px-4">
      <div 
        role="img"
        aria-label="Beautiful Kamay Beach in Ksamil with crystal clear waters and white sand"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/src/Assets/Kamaybeachksamil.jpeg)',
          backgroundPosition: '50% 30%',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="container mx-auto max-w-lg relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Your Custom Travel Plan</h2>
          <p className="text-lg text-white/90">
            Tell us what you're interested in
          </p>
        </motion.div>
        
        <div className="bg-gradient-to-br from-[#3DB4C0] to-[#2A95A0] rounded-xl shadow-2xl overflow-hidden border border-[#3DB4C0]/20">
          <div className="bg-black/30 backdrop-blur-sm py-3 px-4">
            <div className="flex justify-between">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center mb-1 text-sm border-2 transition-all duration-300 ${
                    step >= i 
                      ? 'bg-gradient-to-r from-[#3DB4C0] via-[#2A95A0] to-[#3DB4C0] border-transparent text-white' 
                      : 'bg-white/10 border-[#3DB4C0]/30 text-white/70'
                  }`}>
                    {i}
                  </div>
                  <div className={`text-xs ${step >= i ? 'text-[#FFD700]' : 'text-white/70'}`}>
                    {i === 1 ? 'Details' : i === 2 ? 'Service' : 'Info'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 h-1 bg-[#3DB4C0]/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#3DB4C0] via-[#2A95A0] to-[#3DB4C0] transition-all duration-300" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-[#3DB4C0]/30 rounded-lg focus:ring-2 focus:ring-[#3DB4C0]/50 focus:border-[#3DB4C0] transition-all duration-300 text-white placeholder-white/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm text-white/80 mb-1">Phone Number (with country code)</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 bg-white/10 border rounded-lg transition-all duration-300 text-white placeholder-white/50 ${
                      phoneError 
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/50 focus:border-red-500' 
                        : 'border-[#3DB4C0]/30 focus:ring-2 focus:ring-[#3DB4C0]/50 focus:border-[#3DB4C0]'
                    }`}
                    placeholder="+1234567890"
                  />
                  {phoneError && (
                    <p className="mt-1 text-sm text-red-400">{phoneError}</p>
                  )}
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!!phoneError}
                    className="px-6 py-2 bg-gradient-to-r from-[#3DB4C0] via-[#2A95A0] to-[#3DB4C0] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(61,180,192,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="service" className="block text-sm text-white/80 mb-1">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-[#3DB4C0]/30 rounded-lg focus:ring-2 focus:ring-[#3DB4C0]/50 focus:border-[#3DB4C0] transition-all duration-300 text-white"
                  >
                    <option value="" className="bg-[#3DB4C0]">Choose a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-[#3DB4C0]">{service}</option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-white/10 border border-[#3DB4C0]/30 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/20"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-gradient-to-r from-[#3DB4C0] via-[#2A95A0] to-[#3DB4C0] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(61,180,192,0.3)]"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="message" className="block text-sm text-white/80 mb-1">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 bg-white/10 border border-[#3DB4C0]/30 rounded-lg focus:ring-2 focus:ring-[#3DB4C0]/50 focus:border-[#3DB4C0] transition-all duration-300 text-white placeholder-white/50"
                    placeholder="Tell us about your travel preferences..."
                  ></textarea>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-white/10 border border-[#3DB4C0]/30 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/20"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-gradient-to-r from-[#3DB4C0] via-[#2A95A0] to-[#3DB4C0] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(61,180,192,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            )}
            
            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3DB4C0] via-[#2A95A0] to-[#3DB4C0] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-white/90 text-sm">
                    Redirecting you to WhatsApp...
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;