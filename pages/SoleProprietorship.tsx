import React from 'react';
import InquiryForm from '../components/InquiryForm';
import AiAssistant from '../components/AiAssistant';
import { ServiceType } from '../types';
import { Check, FileText, Info } from 'lucide-react';

const SoleProprietorship: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sole Proprietorship Registration</h1>
          <p className="text-blue-100 text-lg max-w-3xl">The simplest form of business entity in India. Ideal for small businesses, freelancers, and shop owners.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Info className="h-6 w-6 text-blue-900" />
                <h2 className="text-2xl font-bold text-gray-900">What is Sole Proprietorship?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A Sole Proprietorship is a business that is owned and managed by a single person. There is no legal distinction between the owner and the business entity. It is the most common form of business organization in India for unorganized sectors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Easy to Start", desc: "Minimal compliance and registration formalities." },
                  { title: "Cost Effective", desc: "Lowest registration cost compared to other entities." },
                  { title: "Complete Control", desc: "Owner has full control over decision making." },
                  { title: "Tax Benefits", desc: "Income is taxed as personal income of the owner." },
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-blue-900" />
                <h2 className="text-2xl font-bold text-gray-900">Required Documents</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "PAN Card of the Proprietor",
                  "Aadhar Card / Voter ID / Passport",
                  "Passport Size Photograph",
                  "Bank Statement / Cancelled Cheque",
                  "Electricity Bill / Water Bill (Business Address)",
                  "Rent Agreement (if rented premise)",
                  "NOC from Landlord"
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Right Sidebar - Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <InquiryForm serviceType={ServiceType.SOLE_PROPRIETORSHIP} title="Register Sole Proprietorship" />
              
              <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-2">Why register with us?</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" /> Expert CA/CS support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" /> GST Registration included
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-orange-500" /> MSME Registration assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AiAssistant context="Sole Proprietorship Registration in India" />
    </div>
  );
};

export default SoleProprietorship;