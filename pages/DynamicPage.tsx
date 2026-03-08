import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCustomPageData } from '../services/cmsService';
import { CustomPageData } from '../types';
import InquiryForm from '../components/InquiryForm';
import { Check, FileText, Info, Loader2, ArrowLeft, Shield, Globe, Cpu, User, MapPin, Receipt, Star, CheckCircle2 } from 'lucide-react';

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pageData, setPageData] = useState<CustomPageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      try {
        const data = await getCustomPageData(slug);
        if (data) {
          setPageData(data);
        } else {
          setError('Page not found');
        }
      } catch (err) {
        setError('Failed to load page content');
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin h-8 w-8 text-orange-600" />
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{error || "Page Not Found"}</h2>
        <Link to="/" className="text-orange-600 hover:text-orange-800 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    );
  }

  // Helper to render icons based on text content or random assignment if strictly needed
  const getBenefitIcon = (index: number) => {
    const icons = [Shield, Globe, Cpu, Shield, Globe, Cpu];
    const Icon = icons[index % icons.length];
    return <Icon className="h-6 w-6 text-blue-600" />;
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] text-white pt-10 pb-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            {/* Left Content */}
            <div className="lg:w-[58%] pt-2 w-full">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">{pageData.hero_title}</h1>
              {pageData.hero_price && (
                <p className="text-3xl md:text-[42px] font-bold mb-6 text-white tracking-wide">
                 @ {pageData.hero_price} <span className="text-xl align-top relative top-2">*</span>
                </p>
              )}
              
              <div className="flex flex-wrap gap-2 text-sm md:text-[15px] font-medium text-white mb-10 items-center">
                <span>In 15 days</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white mx-1"></span>
                <span>Online Process</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white mx-1"></span>
                <span>Facilitation</span>
              </div>

               {/* "Also Get" Box inside Left Content */}
               <div className="bg-white/5 border border-blue-400/30 rounded-xl overflow-hidden backdrop-blur-sm max-w-3xl"> 
                  <div className="bg-white py-2 px-6">
                      <h4 className="text-center md:text-left text-[#1e3a8a] font-bold uppercase tracking-wide text-sm">Also Get</h4>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {pageData.also_get && pageData.also_get.length > 0 ? (
                            pageData.also_get.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-3">
                                    <div className="bg-white p-2.5 rounded-full w-12 h-12 flex items-center justify-center text-[#1e3a8a] shadow-lg">
                                    {idx === 0 ? <Receipt size={22} strokeWidth={2} /> : idx === 1 ? <User size={22} strokeWidth={2} /> : idx === 2 ? <Globe size={22} strokeWidth={2} /> : <Cpu size={22} strokeWidth={2} />}
                                    </div>
                                    <span className="text-white text-[11px] md:text-xs font-semibold leading-snug max-w-[120px]">{item}</span>
                                </div>
                            ))
                        ) : (
                            ['Company PAN & TAN', 'PF + ESIC + Professional Tax', 'Web Domain Name + Hosting', 'Professional Website + ERP'].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center gap-3">
                                    <div className="bg-white p-2.5 rounded-full w-12 h-12 flex items-center justify-center text-[#1e3a8a] shadow-lg">
                                    <Star size={22} strokeWidth={2} />
                                    </div>
                                    <span className="text-white text-[11px] md:text-xs font-semibold leading-snug max-w-[120px]">{item}</span>
                                </div>
                            ))
                        )}
                    </div>
                  </div>
               </div>
              
               <div className="text-[10px] md:text-xs text-blue-200/80 italic mt-6 font-light tracking-wide">
                *Facilitation Fees. Government Charges Extra.
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:w-[38%] w-full relative z-20">
               <InquiryForm 
                  serviceType={pageData.title} 
                  isHero={true} 
                  title={
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                        Get Quote Instantly in a <br />
                        <span className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-orange-500 after:rounded-full">Minute</span>
                      </h3>
                    </>
                  }
               />
            </div>
          </div>
          
           <div className="text-[11px] text-blue-200/60 mt-8 md:mt-16 text-center lg:text-left border-t border-blue-800/50 pt-4">
            Disclaimer - This is NOT a Government Website. Legal Sthal is a private entity providing process facilitation. Registrations are issued solely by Government authorities.
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* How It Works */}
        {pageData.how_it_works && pageData.how_it_works.length > 0 && (
          <section className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 uppercase">Here's How It Works</h2>
             <div className="h-1 w-16 bg-orange-500 mx-auto mt-2 mb-4 rounded-full"></div>
            <p className="text-gray-600 mb-12">Get your {pageData.title} in {pageData.how_it_works.length} Simple Steps</p>
            
            <div className="grid md:grid-cols-3 gap-8">
               {pageData.how_it_works.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                     <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                        {idx === 0 ? <FileText className="h-8 w-8 text-blue-600" /> : idx === 1 ? <Phone className="h-8 w-8 text-blue-600" /> : <Shield className="h-8 w-8 text-blue-600" />}
                     </div>
                     <h4 className="text-lg font-bold text-gray-900 mb-2">{idx + 1}. Step {idx + 1}</h4>
                     <p className="text-gray-600 max-w-xs">{step}</p>
                  </div>
               ))}
            </div>
          </section>
        )}

        {/* Dynamic Description / Guide */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase">Guide to {pageData.title}</h2>
             <div className="h-1 w-16 bg-orange-500 mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="prose prose-blue max-w-4xl mx-auto text-gray-700 leading-relaxed text-justify">
             {/* If description is mapped from API, use it. Otherwise placeholder */}
             {pageData.description ? (
                <div dangerouslySetInnerHTML={{ __html: pageData.description }} />
             ) : (
                <p>
                  In India, the {pageData.title} has emerged as a popular choice for entrepreneurs looking to start their ventures with limited liability and ease of compliance. This guide covers the registration process, fees, benefits, and required documents.
                </p>
             )}
          </div>
        </section>

        {/* Benefits Section */}
         {pageData.benefits && pageData.benefits.length > 0 && (
          <section>
             <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase">Benefits of {pageData.title}</h2>
                <div className="h-1 w-16 bg-orange-500 mx-auto mt-2 rounded-full"></div>
             </div>
             <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                {pageData.benefits.map((benefit, idx) => (
                   <div key={idx} className="text-center px-4">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                         {getBenefitIcon(idx)}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit}</h4> {/* Assuming benefit is string, if object adjust */}
                      {/* <p className="text-sm text-gray-600 leading-relaxed">
                         Enjoy full control and limited liability protection with {pageData.title}.
                      </p> */}
                   </div>
                ))}
             </div>
          </section>
        )}

        {/* Minimum Requirements */}
         {pageData.requirements && pageData.requirements.length > 0 && (
          <section className="bg-white py-8 md:py-12">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d1b2a] uppercase tracking-wide">
                    Minimum Requirements for {pageData.title}
                </h2>
                <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded-full"></div>
             </div>
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                 <ul className="grid md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8">
                    {pageData.requirements.map((req, idx) => (
                       <li key={idx} className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                          <span className="text-[#1b263b] text-[17px] font-medium leading-relaxed">{req}</span>
                       </li>
                    ))}
                 </ul>
             </div>
          </section>
        )}

        {/* Documents Required */}
        {pageData.documents && pageData.documents.length > 0 && (
           <section>
             <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase">Documents Required</h2>
                <div className="h-1 w-16 bg-orange-500 mx-auto mt-2 rounded-full"></div>
             </div>
             <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl border border-gray-100">
                <ul className="space-y-4">
                   {pageData.documents.map((doc, idx) => (
                      <li key={idx} className="flex gap-4">
                         <span className="font-bold text-gray-400">{idx + 1}.</span>
                         <span className="text-gray-800 font-medium">{doc}</span>
                      </li>
                   ))}
                </ul>
             </div>
           </section>
        )}

        {/* What You Get */}
        {pageData.what_you_get && pageData.what_you_get.length > 0 && (
           <section className="bg-white py-8 md:py-12">
             <div className="text-center mb-10 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d1b2a] uppercase tracking-wide">
                    What All You Get in {pageData.title}
                </h2>
                <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded-full"></div>
             </div>
             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="grid md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-8">
                   {pageData.what_you_get.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                          <span className="text-[#1b263b] text-[17px] font-medium leading-relaxed">{item}</span>
                      </li>
                   ))}
                </ul>
             </div>
           </section>
        )}

      </div>
      
      {/* Disclaimer Footer */}
      <div className="bg-[#172554] text-gray-400 py-6 text-xs text-center px-4">
        Disclaimer - This is NOT a Government Website. Legal Sthal is a private entity providing process facilitation. Registrations are issued solely by Government authorities.
      </div>
    </div>
  );
};
// Helper Component for Icons
const Phone = ({className}: {className?:string}) => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default DynamicPage;
