import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Rocket, CheckCircle2 } from 'lucide-react';
import { ServiceType } from '../types';
// import AiAssistant from '../components/AiAssistant';
import ServiceCard from '../components/ServiceCard';
import TrustStrip from '../components/TrustStrip';
import HeroInquiry from '../components/HeroInquiry';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-15">
          <div className="md:flex md:items-start md:gap-10">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          <span>Legal</span> <span className="text-orange-500">स्थल</span> – Your Trusted Online Business Registration Partner
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
          Legal Sthal combines legal expertise and technology to deliver secure, hassle-free business compliance solutions. From launching your venture to scaling up, we handle registrations, licenses, filings, and certifications—keeping your business legally strong.
              </p>
              <div className="flex flex-wrap gap-4">
          <Link to="/sole-proprietorship" className="bg-orange-600 text-white hover:bg-orange-700 font-bold py-3.5 px-8 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-orange-900/20">
            Get Started <ArrowRight className="h-5 w-5" />
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-lg transition-colors">
            Contact Us
          </Link>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/3 md:self-end md:translate-y-6 md:relative md:z-20">
              <HeroInquiry />
            </div>
          </div>
        </div>
        <TrustStrip />
            </section>

            {/* Services Section - Styled like provided design */}
            <section className="relative">
        <div className="relative">
          <div className="h-56 sm:h-64 md:h-72 lg:h-80 w-full bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1900&q=80')] bg-center bg-cover"></div>
          <div className="absolute inset-0 bg-blue-900/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Our Services</h2>
              <p className="mt-3 text-white/90 max-w-2xl mx-auto">We provide end-to-end legal and compliance services to help your business grow securely and quickly.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
              {[
                { title: 'Startup Registration', desc: 'Company & LLP incorporations, startup setup.', icon: <Rocket className="h-6 w-6 text-orange-500" /> },
                { title: 'Trademark & IPR', desc: 'Trademark filing, IP protection & strategy.', icon: <Briefcase className="h-6 w-6 text-orange-500" /> },
                { title: 'ROC Filing', desc: 'Annual filings, ROC compliance & records.', icon: <Users className="h-6 w-6 text-orange-500" /> },
                { title: 'GST Filings', desc: 'GST registration & returns filing support.', icon: <CheckCircle2 className="h-6 w-6 text-orange-500" /> },
                { title: 'Startup India & MSME', desc: 'Recognition and MSME registrations.', icon: <Rocket className="h-6 w-6 text-orange-500" /> },
                { title: 'ISO Services', desc: 'ISO certification consulting and documentation support.', icon: <CheckCircle2 className="h-6 w-6 text-orange-500" /> },
                { title: 'Compliances Services', desc: 'Ensuring. your business meets all legal and regulatory requirements.', icon: <Briefcase className="h-6 w-6 text-orange-500" /> },
                { title: ServiceType.SOLE_PROPRIETORSHIP, desc: 'Low-compliance option for solo entrepreneurs.', icon: <Briefcase className="h-6 w-6 text-orange-500" /> }
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto w-20 h-20 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center shadow-md transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                      {s.icon}
                    </div>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h4>
                  <p className="mt-2 text-sm text-gray-600 max-w-xs mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-orange-100 rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80" 
                  alt="Team Meeting" 
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Legal <span className="text-orange-600 font-sans">स्थल</span>?</h2>
              <div className="space-y-4">
                {[
                  "100% Online Process - No physical visits needed",
                  "Transparent Pricing - No hidden charges",
                  "Expert Assistance - CA/CS support",
                  "Data Security - Secure document handling",
                  "Fast Turnaround - Get registered quickly"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="relative bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-xs font-semibold tracking-[0.25em] text-orange-600 uppercase">Partners</p>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">Trusted by leading banks and platforms</h3>
            <p className="text-gray-600 mt-3">We collaborate with financial, workspace, and tech partners so your registrations, filings, and brand protection stay seamless.</p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-xl shadow-blue-900/5 p-6 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {[ 'Myhq', 'ICICI Bank', 'Axis Bank', 'ZOHO', 'Pantasign', 'HDFC Bank', 'Canva', 'Gen SkyTech' ].map((partner) => (
                <div
                  key={partner}
                  className="h-20 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center text-sm md:text-base font-semibold text-blue-900 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
                >
                  {partner}
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm text-gray-700">
              <div className="p-5 rounded-xl border border-gray-100 bg-blue-50">
                <p className="text-xs uppercase tracking-wide text-blue-800 font-semibold">Coverage</p>
                <p className="mt-2 text-blue-900 font-bold text-lg">Pan-India filings</p>
                <p className="mt-1">Registrations, licenses, and renewals across major states with centralized tracking.</p>
              </div>
              <div className="p-5 rounded-xl border border-gray-100 bg-orange-50">
                <p className="text-xs uppercase tracking-wide text-orange-700 font-semibold">Reliability</p>
                <p className="mt-2 text-blue-900 font-bold text-lg">Bank-grade process</p>
                <p className="mt-1">Checklist-driven execution aligned with SLAs and transparent updates.</p>
              </div>
              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold">Support</p>
                <p className="mt-2 text-blue-900 font-bold text-lg">Dedicated desk</p>
                <p className="mt-1">Single point of contact for filings, follow-ups, and escalations.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-700 text-base">Want to explore a partnership model for your customers or network?</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors">Partner with us</Link>
                {/* <a href="tel:+916204270990 " className="text-sm font-semibold text-blue-900 hover:text-orange-600">+91 6204270990 </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Visit Us / Contact Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="md:flex md:items-start md:gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Visit Our Office</h3>
                <p className="text-gray-700 mb-4">4th Floor, Plot 93, Sector 44, Gurugram, Haryana 122003</p>
                <p className="text-sm text-gray-500 mb-4">Open Mon–Sat, 9am–6pm</p>
                <a
                  className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700"
                  href="/contact"
                >
                  Get in touch
                </a>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/2">
                <div className="w-full h-48 rounded-md overflow-hidden border border-gray-100">
                  <iframe
                    title="LegalSthal Office - Gurugram"
                    src="https://www.google.com/maps?q=4th+Floor,+Plot+93,+Sector+44,+Gurugram,+Haryana+122003&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-2">
                  <a
                    className="text-sm text-blue-700 hover:underline"
                    href="https://www.google.com/maps/search/?api=1&query=4th+Floor,+Plot+93,+Sector+44,+Gurugram,+Haryana+122003"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <AiAssistant context="General Business Registration queries" /> */}
    </div>
  );
};

export default Home;