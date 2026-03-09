import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Rocket, CheckCircle2, Loader2, PlayCircle, MapPin } from 'lucide-react';
import { useCMS } from '../context/CMSContext'; // Import context
import { getStorageUrl } from '../services/cmsService';
import InquiryForm from '../components/InquiryForm';
import Testimonials from '../components/Testimonials';
import TrustStrip from '../components/TrustStrip';

const Home: React.FC = () => {
  const { globalContent, loading, error } = useCMS();

  if (loading && !globalContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="animate-spin h-8 w-8 text-orange-600" />
            <p className="text-gray-500 text-sm">Loading content...</p>
          </div>
      </div>
    );
  }

  if (error && error.includes('VITE_API_BASE_URL is missing')) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-yellow-50 p-6 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Configuration Required</h2>
          <p className="text-gray-700 text-lg mb-4">
            {error}
          </p>
          <p className="text-gray-500">
            Please rename your <code className="bg-gray-100 px-1 py-0.5 rounded">.env.example</code> to <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> and set the <code className="bg-gray-100 px-1 py-0.5 rounded">VITE_API_BASE_URL</code> variable.
          </p>
        </div>
      </div>
    );
  }

  // Fallback defaults if content is missing
  const heroTitle = globalContent?.hero_title || 'Legal Sthal – Your Trusted Online Business Registration Partner';
  const heroSubtitle = globalContent?.hero_subtitle || 'Legal Sthal combines legal expertise and technology to deliver secure, hassle-free business compliance solutions. From launching your venture to scaling up, we handle registrations, licenses, filings, and certifications—keeping your business legally strong.';
  const heroImage = getStorageUrl(globalContent?.hero_image);
  const services = globalContent?.our_services || [];
  const whyChooseUs = globalContent?.why_choose_us || [];
  const whyChooseImage = getStorageUrl(globalContent?.why_choose_image);
  const partners = globalContent?.trusted_partners || [];
  const testimonials = globalContent?.testimonials || [];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${heroImage || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"}')` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="md:flex md:items-start md:gap-10">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {heroTitle}
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl leading-relaxed">
                {heroSubtitle}
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
               {/* Pass a generic service type or default */}
              <InquiryForm serviceType="General Inquiry" isHero={true} />
            </div>
          </div>
        </div>
        <TrustStrip />
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-blue-900">Our Services</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">We provide end-to-end legal and compliance services to help your business grow securely and quickly.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {services.length > 0 ? (
                  services.map((s, i) => (
                    <Link to={s.link || '#'} key={i} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 group border border-gray-100 h-full flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                           {/* Icon handling - simplistic for now, relying on generic icons if URL not provided */}
                           {s.icon ? (
                               <img src={s.icon} alt="" className="h-8 w-8 object-contain" />
                           ) : (
                               <Briefcase className="h-6 w-6 text-orange-600" />
                           )}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">{s.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                      {/* <div className="flex items-center justify-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform mt-auto">
                        Learn more <ArrowRight className="h-4 w-4 ml-1" />
                      </div> */}
                    </Link>
                  ))
              ) : (
                 <div className="col-span-full text-center py-10 text-gray-500">No services loaded.</div>
              )}
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-orange-100 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
                <img 
                  src={whyChooseImage || "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"}
                  alt="Why Choose Us" 
                  className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
                />
                <div className="absolute bottom-8 -right-8 bg-blue-900 text-white p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                       <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">100%</p>
                      <p className="text-sm text-blue-200">Compliance Rate</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Legal Sthal?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">Expertise You Can Trust,<br/>Solutions You Can Count On</h2>
              <p className="text-gray-600 mb-8 text-lg">We simplify complex legal processes so you can focus on building your business.</p>
              
              <div className="space-y-6">
                {whyChooseUs.length > 0 ? (
                    whyChooseUs.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                          <CheckCircle2 className="h-6 w-6 text-blue-600 group-hover:text-orange-600 transition-colors" />
                        </div>
                        <div>
                            {feature.title && <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>}
                            <p className="text-gray-600 leading-relaxed">{feature.point || feature.description}</p>
                        </div>
                      </div>
                    ))
                ) : (
                    <p className="text-gray-600">Loading features...</p>
                )}
              </div>
              
              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl">
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3 block">PARTNERS</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">Trusted by leading banks and platforms</h3>
            <p className="text-gray-600 text-base">
              We collaborate with financial, workspace, and tech partners so your registrations, filings, and brand protection stay seamless.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            {/* Partners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {partners.length > 0 ? (
                    partners.map((partner, idx) => (
                      <div
                        key={idx}
                        className="h-20 flex items-center justify-center p-3 rounded-lg border border-gray-100 bg-white hover:shadow-md transition-all duration-300 group"
                      >
                        {partner.logo ? (
                            <img 
                              src={getStorageUrl(partner.logo)} 
                              alt={partner.name} 
                              className="max-h-10 max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                            />
                        ) : (
                            <span className="text-sm md:text-base font-bold text-blue-900 text-center">{partner.name}</span>
                        )}
                      </div>
                    ))
                ) : (
                  <div className="col-span-full text-center py-8 text-gray-400">Loading partners...</div>
                )}
            </div>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">COVERAGE</span>
                <h4 className="text-lg font-bold text-blue-900 mb-2">Pan-India filings</h4>
                <p className="text-blue-800/80 text-sm leading-relaxed">
                  Registrations, licenses, and renewals across major states with centralized tracking.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <span className="text-orange-600 font-bold text-xs uppercase tracking-wider mb-2 block">RELIABILITY</span>
                <h4 className="text-lg font-bold text-blue-900 mb-2">Bank-grade process</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Checklist-driven execution aligned with SLAs and transparent updates.
                </p>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2 block">SUPPORT</span>
                <h4 className="text-lg font-bold text-blue-900 mb-2">Dedicated desk</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Single point of contact for filings, follow-ups, and escalations.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-100 gap-4">
              <p className="text-gray-700 font-medium text-base">
                Want to explore a partnership model for your customers or network?
              </p>
              <Link 
                to="/contact" 
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-lg transition-colors whitespace-nowrap text-sm"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials data={testimonials} />

      {/* Contact Info Section - Placed distinctly above footer */}
      <section className="py-20 bg-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
            <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] rounded-[40%] bg-gradient-to-tr from-blue-100 to-transparent rotate-12 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
            <div className="flex flex-col md:flex-row">
              {/* Text Content */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2 block">Find Us</span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Visit Our Office</h3>
                
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 bg-blue-50 rounded-lg shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Corporate Headquarters</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{globalContent?.footer_address || '4th Floor, Plot 93, Sector 44, Gurugram, Haryana 122003'}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20"
                  >
                    Contact Sales
                  </Link>
                  <a
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-base font-bold rounded-xl text-gray-700 hover:border-orange-500 hover:text-orange-600 transition-colors bg-white"
                    href="https://www.google.com/maps/search/?api=1&query=4th+Floor,+Plot+93,+Sector+44,+Gurugram,+Haryana+122003"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="md:w-1/2 w-full h-[400px] md:h-auto bg-gray-100 relative">
                <iframe
                  title="LegalSthal Office - Gurugram"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.840733593256!2d77.0734!3d28.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d58288888b%3A0xc395027581788753!2sSector%2044%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709663784534!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm text-xs font-semibold text-gray-600 border border-white">
                    Tap map to interact
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
