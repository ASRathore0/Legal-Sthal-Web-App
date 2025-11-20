import React from 'react';
import InquiryForm from '../components/InquiryForm';
import AiAssistant from '../components/AiAssistant';
import { ServiceType } from '../types';
import { Check, FileText, Briefcase, Users } from 'lucide-react';

const Partnership: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Partnership Firm Registration</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Collaborate and grow. Register your partnership firm with a proper deed to ensure clarity and legal protection.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-blue-900" />
                <h2 className="text-2xl font-bold text-gray-900">What is a Partnership Firm?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A partnership firm is a popular form of business constitution for businesses that are owned, managed, and controlled by an Association of People for profit. Partnership firms are relatively easy to start and are prevalent among small and medium-sized businesses in the unorganized sectors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Process</h2>
              <div className="space-y-4">
                {[
                  { title: "Step 1: Choose a Name", desc: "Select a unique name for your partnership firm." },
                  { title: "Step 2: Draft Partnership Deed", desc: "Create a deed detailing rights, duties, and profit sharing." },
                  { title: "Step 3: Apply for PAN", desc: "Obtain a PAN card in the name of the partnership firm." },
                  { title: "Step 4: Register with RoF", desc: "File application with Registrar of Firms (Optional but recommended)." },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="bg-orange-100 text-orange-700 font-bold h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                    </div>
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
                  "Partnership Deed (Drafted)",
                  "PAN Card of all Partners",
                  "Address Proof of Partners",
                  "Photos of Partners",
                  "Business Address Proof",
                  "Rent Agreement + NOC",
                  "Affidavit certifying details"
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
              <InquiryForm serviceType={ServiceType.PARTNERSHIP} title="Start Partnership Registration" />
              
               <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-900" />
                    <h4 className="font-semibold text-blue-900">Partner Support</h4>
                </div>
                <p className="text-sm text-blue-800">
                    We help draft clear and legally sound partnership deeds to prevent future disputes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AiAssistant context="Partnership Firm Registration and Deed drafting" />
    </div>
  );
};

export default Partnership;