import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Cpu, Phone, CheckCircle } from 'lucide-react';
import HeroInquiry from '../components/HeroInquiry';

const OnePersonCompany: React.FC = () => {
  return (
    <div>
      {/* Hero with right-side form */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">One Person Company Registration</h1>
            <p className="text-3xl md:text-4xl font-semibold mb-3">@ Rs. 1499*</p>
            <p className="text-sm text-blue-200 mb-8">In 15 days · Online Process · Facilitation</p>

            <div className="max-w-3xl mx-auto lg:mx-0 bg-blue-800 border border-white/20 rounded-md overflow-hidden mb-6">
              <div className="bg-white text-blue-900 text-center py-2 font-semibold">Also Get </div>
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

            <p className="text-sm text-blue-200 mt-2 italic">*Facilitation Fees. Government Charges Extra.</p>

            <p className="text-blue-200 mt-6 text-sm">Disclaimer - This is NOT a Government Website. Legal Sthal is a private entity providing process facilitation. Registrations are issued solely by Government authorities.</p>
          </div>

          {/* Right side form card */}
          <aside className="lg:col-span-1">
            <HeroInquiry />
          </aside>
        </div>
      </section>

      {/* Here's how it works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">HERE'S HOW IT WORKS</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-8">Get your OPC Registration in 3 Simple Steps</p>

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

      {/* Guide & Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">GUIDE TO ONE PERSON COMPANY REGISTRATION IN INDIA</h2>
          <p className="text-gray-600 mb-8">In India, the One Person Company (OPC) has emerged as a popular choice for entrepreneurs looking to start their ventures with limited liability and ease of compliance. This guide covers the OPC registration process, fees, benefits, and required documents.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">ONE PERSON COMPANY REGISTRATION PROCESS</h3>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <div className="max-w-3xl mx-auto text-left">
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Fill and Submit: the above GET STARTED form.</li>
              <li>Watch a detailed Video on OPC Incorporation.</li>
              <li>Submit a one page OPC formation questionnaire.</li>
              <li>Legal Sthal expert will clear all your queries.</li>
              <li>Arrange for Founders Id and address proofs.</li>
              <li>Sign incorporation documents.</li>
              <li>Drafting main object and Name application.</li>
              <li>Filing of Incorporation forms with MCA.</li>
              <li>Getting the Incorporation Certificate.</li>
              <li>Your OPC company will also be allotted a PAN and TAN/TDS number.</li>
              <li>Legal Sthal will provide bank account opening documentation support.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Differences */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">DIFFERENCE BETWEEN OPC & PVT. LTD. IN INDIA</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <div className="max-w-3xl mx-auto text-left">
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li><strong>Number of Members:</strong> OPC can have only one member, whereas a private limited company must have a minimum of two members and maximum of 200 members.</li>
              <li><strong>Nominee of Shareholder:</strong> OPCs must nominate a natural person as nominee, while Pvt. Ltd. companies do not have this requirement.</li>
              <li><strong>Conversion:</strong> OPCs have stricter conversion criteria compared to private limited companies.</li>
            </ol>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">DIFFERENCE BETWEEN OPC & LLP IN INDIA</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <div className="max-w-3xl mx-auto text-left">
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li><strong>Ownership Structure:</strong> OPCs are owned by a single individual, whereas LLPs have multiple partners.</li>
              <li><strong>Limited Liability:</strong> Both offer limited liability protection.</li>
              <li><strong>Taxation:</strong> OPCs are taxed at corporate tax rate; LLPs can be taxed differently.</li>
              <li><strong>Compliance Requirements:</strong> OPCs have different compliance rules compared to LLPs.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">BENEFITS OF OPC REGISTRATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Limited Liability Protection to Directors' personal assets</h3>
              <p className="text-gray-600">In a OPC, only investment in business is at risk; personal assets of the owner are generally protected.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Globe className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Better image and credibility in Market</h3>
              <p className="text-gray-600">OPC is a recognized corporate form which lends credibility with customers and vendors.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Cpu className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Easy to raise funds and loans</h3>
              <p className="text-gray-600">OPC companies can access bank loans and other financing options more easily than sole proprietorships.</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Helps for Testing of Business Model and Enables Funding</h3>
              <p className="text-gray-600">OPC helps entrepreneurs test their business model and approach investors when ready.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Globe className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Complete Control of the Company with a Single Owner</h3>
              <p className="text-gray-600">OPC provides decision-making control while allowing appointment of directors for administration.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Cpu className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Easy to Sell OPC</h3>
              <p className="text-gray-600">OPC company is easier to sell with less documentation and lower cost compared to other structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">MINIMUM REQUIREMENTS FOR OPC INCORPORATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Minimum 1 Shareholder</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Minimum 1 Nominee</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Minimum Authorised Share Capital to be Rs. 1 Lac</span></li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Minimum 1 Director.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Only Indian residents can be Shareholder & Nominee</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>DIN for all Directors</span></li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>The director and shareholder can be same person</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Minimum 1 Director must be Indian Resident</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>DSC for 1 Promoter & 1 witness</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">DOCUMENTS REQUIRED FOR OPC REGISTRATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <div className="text-left max-w-3xl mx-auto">
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li><strong>Identity Proof:</strong> PAN card, Aadhaar card, or passport of the proposed director.</li>
              <li><strong>Address Proof:</strong> Utility bill or bank statement showing the residential address.</li>
              <li><strong>Passport-sized Photographs:</strong> photographs of the proposed director.</li>
              <li><strong>Proof of Registered Office:</strong> Rental agreement, utility bill, or property tax receipt for the registered office address.</li>
              <li><strong>No Objection Certificate (NOC):</strong> If rented, NOC from the owner of the registered office premises.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Fees & What you get */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">OPC REGISTRATION FEES, COST & CHARGES</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-6">One Person Company registration costs vary based on the authorised capital and the state of incorporation. Generally it includes:</p>

          <div className="max-w-3xl mx-auto text-left">
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li><strong>DSC Fee:</strong> The cost of obtaining DSC for partners.</li>
              <li><strong>DIN Fee:</strong> Applicable fees for obtaining DIN.</li>
              <li><strong>Name Approval Fee:</strong> Charges for name reservation.</li>
              <li><strong>Registration Fee:</strong> Varies as per authorised capital.</li>
              <li><strong>Professional Charges:</strong> for legal support and facilitation.</li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-4">WHAT ALL YOU GET</h3>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>DIN for 1 Director</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>MOA + AOA</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Customized Incorporation Master File</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Bank Account Opening Support</span></li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Digital Signature Token for 1 Promoter & 1 witness</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Incorporation Certificate</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Company PAN Card</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Web Hosting + 10 emails for 1 Year</span></li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Company Name</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>PF + ESIC + Professional Tax</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Company TAN/TDS</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Web Domain Name for 1 Year</span></li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OnePersonCompany;
