import React from 'react';
import { Rocket, Presentation, Globe2, Users, PhoneCall, Mail, Target } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import AiAssistant from '../components/AiAssistant';
import { ServiceType } from '../types';

const GrowBusiness: React.FC = () => {
  const services = [
    {
      title: 'Fundraise Readiness',
      desc: 'Pitch deck reviews, data-room prep, and cap table hygiene before investor meetings.',
      icon: <Presentation className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Market Expansion',
      desc: 'Evaluate new states/regions, registrations, and local compliance to expand smoothly.',
      icon: <Globe2 className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Partnerships & Alliances',
      desc: 'MoUs, JV terms, and partner frameworks that keep incentives aligned.',
      icon: <Users className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Growth Strategy Clinic',
      desc: 'Structured sessions to prioritize growth bets and the legal/ops needed to support them.',
      icon: <Rocket className="h-6 w-6 text-blue-900" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Plan for funding, partnerships, and expansion with the legal and operational backing you need.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
            <span className="bg-white/10 px-3 py-1 rounded-full">Fundraise readiness</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Partnership frameworks</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Market expansion</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Growth clinics</span>
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
              <h2 className="text-2xl font-bold text-gray-900">How we support growth</h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>Investor-ready documentation and data-room checklists.</li>
                <li>Expansion playbooks covering entity, tax, and local licensing needs.</li>
                <li>Partner frameworks that clarify roles, contributions, and exits.</li>
                <li>Strategy sessions to align legal, finance, and ops for scaling.</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <p className="font-semibold text-blue-900 mb-1">Investor pack</p>
                  <p>Deck review, diligence checklist, and data-room essentials mapped for you.</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <p className="font-semibold text-blue-900 mb-1">Expansion kit</p>
                  <p>Entity/branch options, tax and registration requirements per target region.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Growth sprint plan</h2>
              <ol className="space-y-4 text-gray-700 list-decimal list-inside">
                <li><span className="font-semibold text-blue-900">Define the bet:</span> funding, expansion, or partnership goal with timelines.</li>
                <li><span className="font-semibold text-blue-900">Map enablers:</span> legal docs, compliance, and operational steps needed.</li>
                <li><span className="font-semibold text-blue-900">Execute:</span> we prepare drafts, filings, and partner paperwork with clear owners.</li>
                <li><span className="font-semibold text-blue-900">Review & adjust:</span> fortnightly check-ins to unblock and keep momentum.</li>
              </ol>
            </section>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <InquiryForm serviceType={ServiceType.GROW_BUSINESS} title="Plan My Growth" />
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-3 text-sm text-blue-800">
                <h4 className="font-semibold text-blue-900">Need a growth plan?</h4>
                <p>Share your next move — funding, expansion, or partnerships — and we will map the essentials.</p>
                <div className="flex items-center gap-2 text-blue-900 font-semibold">
                  <PhoneCall className="h-4 w-4" /> +91 6204270990 
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" /> info@legalsthal.in
                </div>
                <div className="flex items-center gap-2 text-blue-900 font-semibold">
                  <Target className="h-4 w-4" /> Book a 20-min growth huddle
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-sm text-gray-700 shadow-sm">
                <p className="font-semibold text-blue-900 mb-2">Founder-first support</p>
                <p>We coordinate between legal, finance, and ops so you have a single point of contact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AiAssistant context="Help users with fundraising prep, expansion, partnerships, and growth strategy" />
    </div>
  );
};

export default GrowBusiness;
