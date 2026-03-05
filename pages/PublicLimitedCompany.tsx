import React from 'react';
import { Shield, Globe, Cpu, CheckCircle } from 'lucide-react';
import HeroInquiry from '../components/HeroInquiry';

const PublicLimitedCompany: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Public Limited Registration</h1>
            <p className="text-3xl md:text-4xl font-semibold mb-3">@ Rs. 13,999 *</p>
            <p className="text-gray-200 mb-6">In 15 days · Online Process · Facilitation</p>

            <div className="max-w-3xl mx-auto bg-blue-800 border border-white/20 rounded-md overflow-hidden">
                                     <div className="bg-white text-blue-900 text-center py-2 font-semibold">Also Get</div>
                                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 text-center">
                                       <div className="flex flex-col items-center">
                                         <div className="bg-white p-3 rounded-full mb-2">
                                           <Shield className="text-blue-900" />
                                         </div>
                                         <div className="text-sm">Company PAN & TAN</div>
                                       </div>
                                       <div className="flex flex-col items-center">
                                         <div className="bg-white p-3 rounded-full mb-2">
                                           <Cpu className="text-blue-900" />
                                         </div>
                                         <div className="text-sm">PF + ESIC + Professional Tax</div>
                                       </div>
                                       <div className="flex flex-col items-center">
                                         <div className="bg-white p-3 rounded-full mb-2">
                                           <Globe className="text-blue-900" />
                                         </div>
                                         <div className="text-sm">Web Domain Name + Web Hosting + 10 emails for 1 Year</div>
                                       </div>
                                       <div className="flex flex-col items-center">
                                         <div className="bg-white p-3 rounded-full mb-2">
                                           <Shield className="text-blue-900" />
                                         </div>
                                         <div className="text-sm">Professional Website + ERP/CRM Built to Scale Your Business</div>
                                       </div>
                                     </div>
                                   </div>

            <p className="text-sm mt-8">Disclaimer - This is NOT a Government Website. Legal Sthal is a private entity providing process facilitation. Registrations are issued solely by Government authorities.</p>
          </div>

          {/* Right side form card */}
          <aside className="lg:col-span-1">
            <HeroInquiry />
          </aside>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">HERE'S HOW IT WORKS</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-8">Get your Public Limited Registration in 3 Simple Steps</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-6 mb-4">
                <Cpu className="text-blue-600" />
              </div>
              <h3 className="font-semibold">1. Fill Form</h3>
              <p className="text-gray-600">Simply fill the above form to get started.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-6 mb-4">
                <Globe className="text-blue-600" />
              </div>
              <h3 className="font-semibold">2. Call to discuss</h3>
              <p className="text-gray-600">Our Business Consultant will connect & facilitate.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-6 mb-4">
                <Shield className="text-blue-600" />
              </div>
              <h3 className="font-semibold">3. Get Incorporation</h3>
              <p className="text-gray-600">Get your Company Incorporation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">BENEFITS OF PUBLIC LIMITED INCORPORATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Limited Liability Protection to Directors</h3>
              <p className="text-gray-600">Many times business need to borrow money and take high investment decisions. Public Ltd. Company is the best option for entrepreneurs with larger investment requirements.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Globe className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Better image and credibility in Market</h3>
              <p className="text-gray-600">Public Limited company is popular and well known business structure. Corporate Customers, Vendors and Govt. Agencies prefer to deal with Public Limited Company instead of proprietorship or normal partnerships.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Cpu className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Easy to raise funds and loans</h3>
              <p className="text-gray-600">Public Limited company can list itself in various stock exchanges in India and raise capital from stock market. Limited company also enjoys wide options to raise funds through bank loans, general public and Institutional investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* More benefits rows */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Favorite Business structure for Investors</h3>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Easy Transfer of shares</h3>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Most Suitable for Heavy Investment</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & What you get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">MINIMUM REQUIREMENTS FOR PUBLIC LIMITED INCORPORATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <ul className="space-y-3">
              <li>Minimum 7 Shareholders</li>
              <li>One of the Directors must be Indian Resident</li>
              <li>DSC (Digital Signature Certificate) for two of the Directors</li>
            </ul>

            <ul className="space-y-3">
              <li>Minimum 3 Directors</li>
              <li>Minimum Authorised Share Capital Rs. 500,000 (INR Five Lac)</li>
              <li>DIN (Director Identification Number) for all Directors</li>
            </ul>

            <ul className="space-y-3">
              <li>The directors and shareholders can be same person</li>
              <li>Registered office address proof</li>
              <li>MOA & AOA drafting and filing</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-4">WHAT ALL YOU GET</h3>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <ul className="space-y-2">
              <li>DIN for 2 Directors</li>
              <li>MOA + AOA</li>
              <li>Customized Incorporation Master File</li>
              <li>Bank Account Opening Support</li>
            </ul>

            <ul className="space-y-2">
              <li>Digital Signature for 1 Director</li>
              <li>Incorporation Certificate</li>
              <li>Company PAN Card</li>
              <li>Web Hosting + 10 emails for 1 Year</li>
            </ul>

            <ul className="space-y-2">
              <li>Company Name</li>
              <li>New Incorporation Kit</li>
              <li>Company TAN/TDS</li>
              <li>Web Domain Name for 1 Year</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicLimitedCompany;
