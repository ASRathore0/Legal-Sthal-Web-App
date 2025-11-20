import React from 'react';
import InquiryForm from '../components/InquiryForm';
import AiAssistant from '../components/AiAssistant';
import { ServiceType } from '../types';
import { Check, FileText, Rocket, Award } from 'lucide-react';

const StartupIndia: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Startup India Registration</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Get recognized by DPIIT. Unlock tax exemptions, self-certification compliance, and easier public procurement.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="h-6 w-6 text-blue-900" />
                <h2 className="text-2xl font-bold text-gray-900">Benefits of Startup India</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2"><Award className="h-4 w-4 text-orange-500"/> Tax Exemption</h3>
                    <p className="text-sm text-gray-600">Income Tax exemption for 3 consecutive years out of ten years since incorporation.</p>
                 </div>
                 <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2"><Award className="h-4 w-4 text-orange-500"/> IPR Protection</h3>
                    <p className="text-sm text-gray-600">Fast-tracking of patent applications and up to 80% rebate in filing fees.</p>
                 </div>
                 <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2"><Award className="h-4 w-4 text-orange-500"/> Easy Compliance</h3>
                    <p className="text-sm text-gray-600">Self-certification allowed for 9 labor and environmental laws.</p>
                 </div>
                 <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 flex items-center gap-2"><Award className="h-4 w-4 text-orange-500"/> Funding Support</h3>
                    <p className="text-sm text-gray-600">Access to government funds and easy exit norms.</p>
                 </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              <ul className="space-y-3 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                {[
                  "Company Age: Incorporation less than 10 years.",
                  "Company Type: Pvt Ltd, LLP, or Registered Partnership.",
                  "Annual Turnover: Should not exceed INR 100 Crores for any financial year.",
                  "Original Entity: Entity should not have been formed by splitting up or reconstruction.",
                  "Innovation: Working towards innovation, development or improvement of products/processes."
                ].map((criteria, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-1 mt-0.5">
                        <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-blue-900" />
                <h2 className="text-2xl font-bold text-gray-900">Required Documents</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Incorporation/Registration Certificate",
                  "Director/Partner Details",
                  "Proof of concept (Website/Pitch Deck)",
                  "PAN Card of the Entity",
                  "Authorisation Letter",
                  "Brief Description of Business"
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
              <InquiryForm serviceType={ServiceType.STARTUP_INDIA} title="Apply for Startup India" />
               <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-800">
                  <strong>Note:</strong> DPIIT Recognition is a crucial step for any startup aiming to scale in India.
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <AiAssistant context="Startup India Registration, DPIIT recognition, and benefits" />
    </div>
  );
};

export default StartupIndia;