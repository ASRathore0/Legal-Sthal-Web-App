import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { submitToGoogleSheet, submitToCRM, FormSubmissionData } from '../services/formService';
import { Loader2, CheckCircle } from 'lucide-react';
import { InquiryData } from '../types';

interface InquiryFormProps {
  serviceType: string;
  title?: React.ReactNode;
  isHero?: boolean;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ serviceType, title, isHero = false }) => {
  const { globalContent } = useCMS();
  // Generate service options dynamically
  const dynamicServices = globalContent?.our_services?.map(s => s.title);
  const serviceOptions = dynamicServices && dynamicServices.length > 0 ? dynamicServices : [
    'Sole Proprietorship',
    'Partnership Firm', 
    'LLP Registration',
    'Private Limited Company',
    'One Person Company',
    'GST Registration',
    'Startup India Registration',
    'Trademark Registration'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: serviceType || '', 
    message: '',
    city: 'Gurugram',
    title: 'Mr.'
  });
  
  const [whatsapp, setWhatsapp] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Sync prop changes to form state
  React.useEffect(() => {
    if (serviceType) {
      setFormData(prev => ({ ...prev, serviceType: serviceType }));
    }
  }, [serviceType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const submissionData: FormSubmissionData = {
            name: formData.title + ' ' + formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message || 'Quick Inquiry from ' + (isHero ? 'Hero Form' : 'Page Form'), 
            serviceType: formData.serviceType || 'General Inquiry',
            title: formData.title,
            city: formData.city,
            whatsapp: whatsapp,
            submittedAt: new Date().toISOString(),
            source: isHero ? 'HeroInquiry' : (title ? 'ContactForm' : 'GeneralInquiry')
        };

        // Submit to both CRM and Google Sheet in parallel
        await Promise.all([
          submitToCRM(submissionData),
          submitToGoogleSheet(submissionData)
        ]);

        setSubmitStatus('success');
        setFormData({
            name: '',
            email: '',
            phone: '',
            serviceType: serviceType || '',
            message: '',
            city: 'Gurugram',
            title: 'Mr.'
        });
    } catch (error) {
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 text-center h-full flex flex-col items-center justify-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">We have received your inquiry. Our team will contact you shortly.</p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="text-orange-600 font-semibold hover:text-orange-700 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-xl p-5 ${isHero ? 'border-t-4 border-orange-500' : 'border border-gray-100'}`}>
      <div className="text-center mb-4">
        {title ? (
            <div className="text-xl font-bold text-gray-900 leading-tight">{title}</div>
        ) : (
            <>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Get Quote Instantly in a Minute</h3>
                <div className="h-1 w-12 bg-orange-500 mx-auto mt-2 rounded-full"></div>
            </>
        )}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {submitStatus === 'error' && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-100">
                Something went wrong. Please try again or call us directly.
            </div>
        )}
        <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-2 py-2.5 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-sm bg-gray-50 text-gray-900"
                  style={{ backgroundImage: 'none', textAlign: 'center' }} 
                >
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                </select>
            </div>
            <div className="col-span-3">
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500 text-gray-900 text-sm font-medium"
              />
            </div>
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail Id"
          required
          className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500 text-gray-900 text-sm font-medium"
        />

        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
            className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500 text-gray-900 text-sm font-medium"
          />
        </div>

        <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-gray-500 text-gray-900 text-sm font-medium"
        />

        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-900 bg-white text-sm font-medium"
        >
          <option value="" disabled className="text-gray-400">Looking For*</option>
          {serviceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2 py-0.5">
            <div className="relative inline-block w-9 h-5 align-middle select-none transition duration-200 ease-in flex-shrink-0">
                <input 
                    type="checkbox" 
                    name="whatsapp" 
                    id="whatsapp-toggle" 
                    checked={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.checked)}
                    className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer translate-x-0 checked:translate-x-4 checked:border-green-500 transition-transform duration-200 ease-in-out shadow-sm z-10"
                />
                <label htmlFor="whatsapp-toggle" className={`toggle-label block overflow-hidden h-5 rounded-full cursor-pointer ${whatsapp ? 'bg-green-500' : 'bg-gray-300'}`}></label>
            </div>
            <label htmlFor="whatsapp-toggle" className="text-sm font-medium text-gray-800 cursor-pointer">
                Get updates through Whatsapp
            </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors uppercase shadow-md mt-1 text-sm"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin h-4 w-4" /> Processing...
            </span>
          ) : (
            "GET STARTED NOW"
          )}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;