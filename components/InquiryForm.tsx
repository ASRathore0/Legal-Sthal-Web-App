import React, { useState } from 'react';
import { InquiryData } from '../types';
import { submitToGoogleSheet } from '../services/formService';
import { Send, Loader2, CheckCircle } from 'lucide-react';

interface InquiryFormProps {
  serviceType: string;
  title?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ serviceType, title = "Get a Free Consultation" }) => {
  const [formData, setFormData] = useState<InquiryData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: serviceType,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'GeneralInquiry' as const
    };

    const success = await submitToGoogleSheet(payload);
    
    setIsSubmitting(false);

    if (success) {
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        serviceType: serviceType,
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Inquiry Received!</h3>
        <p className="mt-2 text-sm text-gray-500">
          Thank you for contacting us. Our legal expert will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-orange-600 hover:text-orange-700 text-sm font-bold"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-blue-50">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">Fill out the form below to get expert assistance for {serviceType}.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2.5"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2.5"
            placeholder="+91 6204270990 "
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2.5"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Business Details (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm border p-2.5"
            placeholder="Tell us briefly about your business..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="-ml-1 mr-2 h-4 w-4" />
              Submit Inquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;