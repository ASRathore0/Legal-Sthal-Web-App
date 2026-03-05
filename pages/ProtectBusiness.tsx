import React from 'react';
import { ShieldCheck, FileText, Scale, Eye, PhoneCall, Mail } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import AiAssistant from '../components/AiAssistant';
import { ServiceType } from '../types';

const ProtectBusiness: React.FC = () => {
  const services = [
    {
      title: 'Trademark Registration',
      desc: 'Secure your brand name, logo, or tagline with end-to-end filing support and follow-ups.',
      icon: <ShieldCheck className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Brand Monitoring & Enforcement',
      desc: 'Watchlists, notices, and takedowns to stop misuse of your brand and trademarks.',
      icon: <Eye className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Contracts & Legal Drafting',
      desc: 'Well-structured agreements for vendors, partners, and employees to avoid disputes.',
      icon: <FileText className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Dispute Strategy Guidance',
      desc: 'Early risk review, notices, and referrals to the right counsel when needed.',
      icon: <Scale className="h-6 w-6 text-blue-900" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Business</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Safeguard your brand, filings, and contracts with precise, on-time legal protection and clear escalation paths.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
            <span className="bg-white/10 px-3 py-1 rounded-full">Trademark search & filing</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Contracts & policies</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Enforcement & notices</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-100 text-orange-700 rounded-md p-2">{s.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">What we do</h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>Searches, filings, and responses for trademarks with proactive status tracking.</li>
                <li>Clean, enforceable contracts (vendor, employee, partner, NDA, MSA, SLA) tailored to risk.</li>
                <li>Compliance reminders so renewals and deadlines are never missed.</li>
                <li>Enforcement playbooks: notices, takedowns, and escalation paths with counsel referrals.</li>
              </ul>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <p className="font-semibold text-blue-900 mb-1">Fast response desk</p>
                  <p>Share evidence/screenshots; we draft and send the first notice quickly.</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <p className="font-semibold text-blue-900 mb-1">Renewal watch</p>
                  <p>We track your renewal calendar and remind you before deadlines.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How we work</h2>
              <ol className="space-y-4 text-gray-700 list-decimal list-inside">
                <li><span className="font-semibold text-blue-900">Discovery call:</span> understand what needs protection and urgency.</li>
                <li><span className="font-semibold text-blue-900">Document review:</span> review marks, agreements, and evidence if any.</li>
                <li><span className="font-semibold text-blue-900">Plan & pricing:</span> share a scoped action plan with clear timelines.</li>
                <li><span className="font-semibold text-blue-900">Execute & track:</span> filings, notices, and status updates delivered to you.</li>
              </ol>
            </section>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <InquiryForm serviceType={ServiceType.PROTECT_BUSINESS} title="Protect My Business" />
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-3 text-sm text-blue-800">
                <h4 className="font-semibold text-blue-900">Need quick guidance?</h4>
                <p>Tell us what you need to protect — we will suggest the fastest route and paperwork required.</p>
                <div className="flex items-center gap-2 text-blue-900 font-semibold">
                  <PhoneCall className="h-4 w-4" /> +91 6204270990 
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" /> info@legalsthal.in
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-sm text-gray-700 shadow-sm">
                <p className="font-semibold text-blue-900 mb-2">Prefer a call-back?</p>
                <p>Leave a two-line brief and a slot; we’ll call within the hour during business times.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AiAssistant context="Help users with trademark protection, contracts, enforcement, renewals, and business protection steps" />
    </div>
  );
};

export default ProtectBusiness;
