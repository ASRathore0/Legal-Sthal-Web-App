import React from 'react';
import { ClipboardCheck, Building2, Coins, Briefcase, PhoneCall, Mail, CalendarClock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import AiAssistant from '../components/AiAssistant';
import { ServiceType } from '../types';

const ManageBusiness: React.FC = () => {
  const services = [
    {
      title: 'Compliance & Filings',
      desc: 'ROC, GST, and other statutory filings with reminders and on-time submissions.',
      icon: <ClipboardCheck className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Bookkeeping & Accounting',
      desc: 'Clean books, reconciliations, and reports to stay audit-ready.',
      icon: <Coins className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'HR & Policy Support',
      desc: 'Offer letters, NDAs, and policies tailored to your team size and risk level.',
      icon: <Briefcase className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Licenses & Renewals',
      desc: 'Track and renew critical licenses so operations stay uninterrupted.',
      icon: <Building2 className="h-6 w-6 text-blue-900" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Manage Your Business</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Stay compliant, organized, and audit-ready with dependable filings, books, and policies.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-blue-100">
            <span className="bg-white/10 px-3 py-1 rounded-full">ROC & GST filings</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Books & reconciliations</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">HR docs & policies</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">License renewals</span>
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
              <h2 className="text-2xl font-bold text-gray-900">Why it matters</h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>Avoid penalties with proactive compliance tracking and filings.</li>
                <li>Maintain investor-ready books with clear reconciliations and reports.</li>
                <li>Protect your team and company with structured HR documents.</li>
                <li>Keep key licenses valid to ensure business continuity.</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <p className="font-semibold text-blue-900 mb-1">Deadline tracker</p>
                  <p>We calendar due dates and share reminders before every filing window.</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <p className="font-semibold text-blue-900 mb-1">Audit-ready books</p>
                  <p>Periodic reviews ensure reconciliations and workpapers stay clean.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How we work</h2>
              <ol className="space-y-4 text-gray-700 list-decimal list-inside">
                <li><span className="font-semibold text-blue-900">Kickoff:</span> compliance and books health-check; map missing filings.</li>
                <li><span className="font-semibold text-blue-900">Calendar:</span> build a filing and renewal calendar tailored to your business.</li>
                <li><span className="font-semibold text-blue-900">Execution:</span> filings, reconciliations, and HR docs delivered with status updates.</li>
                <li><span className="font-semibold text-blue-900">Review:</span> monthly review with action items and next deadlines.</li>
              </ol>
            </section>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <InquiryForm serviceType={ServiceType.MANAGE_BUSINESS} title="Manage My Compliance" />
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-3 text-sm text-blue-800">
                <h4 className="font-semibold text-blue-900">Need a compliance check?</h4>
                <p>Tell us your current status — we will map deadlines and file the next due items.</p>
                <div className="flex items-center gap-2 text-blue-900 font-semibold">
                  <PhoneCall className="h-4 w-4" /> +91 6204270990 
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-600" /> info@legalsthal.in
                </div>
                <div className="flex items-center gap-2 text-blue-900 font-semibold">
                  <CalendarClock className="h-4 w-4" /> Request a 15-min calendar slot
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 text-sm text-gray-700 shadow-sm">
                <p className="font-semibold text-blue-900 mb-2">Ongoing support</p>
                <p>We share a simple tracker so you always know what’s filed, what’s pending, and who owns it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AiAssistant context="Help users with compliance, filings, bookkeeping, HR policies, and renewals" />
    </div>
  );
};

export default ManageBusiness;
