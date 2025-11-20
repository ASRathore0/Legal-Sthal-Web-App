import React from 'react';
import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';
import AiAssistant from '../components/AiAssistant';
import { ServiceType } from '../types';
import { Briefcase, Users, Rocket } from 'lucide-react';

const StartBusiness: React.FC = () => {
  const cards = [
    {
      title: 'Sole Proprietorship',
      path: '/sole-proprietorship',
      desc: 'Fast and simple for single-owner businesses.',
      icon: <Briefcase className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Partnership',
      path: '/partnership-registration',
      desc: 'Register a partnership firm with a clear deed.',
      icon: <Users className="h-6 w-6 text-blue-900" />,
    },
    {
      title: 'Startup India',
      path: '/startup-india-registration',
      desc: 'Support and registration tailored for startups.',
      icon: <Rocket className="h-6 w-6 text-blue-900" />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Start Your Business</h1>
          <p className="text-blue-100 text-lg max-w-3xl">Choose the right business structure and get started quickly with our guided registration services.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c) => (
                <Link key={c.path} to={c.path} className="block bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-orange-100 text-orange-700 rounded-md p-2">{c.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </Link>
              ))}
            </section>

            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How it works</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Choose the business structure that fits your needs.</li>
                <li>Fill basic details and upload required documents.</li>
                <li>We prepare and file forms, and assist until completion.</li>
              </ol>
            </section>
          </div>

          <div>
            <div className="sticky top-24 space-y-6">
              <InquiryForm serviceType={ServiceType.GENERAL} title="Get Started" />
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-2">Need help deciding?</h4>
                <p className="text-sm text-blue-800">Use our AI assistant to get a quick recommendation on the best structure for your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AiAssistant context="Help user choose a business structure (sole, partnership, startup)" />
    </div>
  );
};

export default StartBusiness;
