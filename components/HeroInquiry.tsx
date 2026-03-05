import React, { useState } from 'react';
import { InquiryData } from '../types';
import { submitToGoogleSheet } from '../services/formService';
import { Send, Loader2, CheckCircle } from 'lucide-react';

const serviceOptions = [
  'One Person Company Registration',
  'Pvt. Ltd. Registration',
  'LLP Registration',
  'Trademark Registration',
  'GST Registration',
  'MSME Registration',
  'ISO Certification',
  'Other Services',
];

const HeroInquiry: React.FC = () => {
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'Looking For*',
  });
  const [title, setTitle] = useState('Mr.');
  const [city, setCity] = useState('Gurugram');
  const [whatsapp, setWhatsapp] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { 
      ...formData, 
      title, 
      city, 
      whatsapp,
      submittedAt: new Date().toISOString(),
      source: 'HeroInquiry' as const
    };

    const success = await submitToGoogleSheet(payload);

    setIsSubmitting(false);
    
    if (success) {
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', serviceType: 'Looking For*' });
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h4 className="text-lg font-bold text-gray-900">Submitted</h4>
        <p className="text-sm text-gray-600">Thanks! Our team will contact you shortly.</p>
        <button onClick={() => setIsSuccess(false)} className="mt-4 text-orange-600 font-bold">Send another</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200 max-w-md w-full mx-auto">
      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 text-center leading-snug">Get Quote Instantly in a Minute</h3>
      <div className="w-24 mx-auto mt-2">
        <div className="h-1 w-16 bg-orange-400 rounded-full mx-auto"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2 mt-3">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="sm:w-20 w-full h-10 bg-white rounded-md px-2 border border-gray-200 shadow-sm text-xs text-gray-800"
          >
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="sm:flex-1 w-full bg-white rounded-md px-3 h-10 border border-gray-200 shadow-sm text-xs text-gray-700 placeholder-gray-400 placeholder:text-xs"
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail Id"
          className="w-full bg-white rounded-md px-3 h-10 border border-gray-200 shadow-sm text-xs text-gray-700 placeholder-gray-400 placeholder:text-xs"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Mobile"
          className="w-full bg-white rounded-md px-3 h-10 border border-gray-200 shadow-sm text-xs text-gray-700 placeholder-gray-400 placeholder:text-xs"
        />

        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ghaziabad"
          className="w-full bg-white rounded-md px-3 h-10 border border-gray-200 shadow-sm text-xs text-gray-700 placeholder-gray-400 placeholder:text-xs"
        />

        <div className="relative">
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full bg-white rounded-md px-3 h-10 border border-gray-200 shadow-sm text-xs text-gray-700 appearance-none"
          >
            <option value="Looking For*">Looking For*</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.24 4a.75.75 0 01-1.04 0l-4.24-4a.75.75 0 01-.02-1.06z" clipRule="evenodd" /></svg>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <label className="relative inline-flex items-center cursor-pointer"> 
            <input type="checkbox" checked={whatsapp} onChange={() => setWhatsapp(!whatsapp)} className="sr-only" />
            <span className={whatsapp ? 'w-10 h-5 bg-green-500 rounded-full relative inline-block transition-colors' : 'w-10 h-5 bg-gray-300 rounded-full relative inline-block transition-colors'}>
              <span className={whatsapp ? 'absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow transform translate-x-4' : 'absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow'}></span>
            </span>
          </label>
          <span className="text-sm text-gray-700">Get updates through Whatsapp</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md shadow-sm mt-1 border-b-4 border-orange-600"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin inline-block mr-2" /> Submitting...
            </>
          ) : (
            'GET STARTED NOW'
          )}
        </button>
      </form>
    </div>
  );
};

export default HeroInquiry;
