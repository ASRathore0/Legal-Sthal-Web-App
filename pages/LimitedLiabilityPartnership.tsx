import React from 'react';
import { Shield, Globe, Cpu, CheckCircle } from 'lucide-react';
import HeroInquiry from '../components/HeroInquiry';

const LimitedLiabilityPartnership: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LLP Registration</h1>
            <p className="text-3xl md:text-4xl font-semibold mb-3">@ Rs. 1499 *</p>
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
          <p className="text-gray-600 mb-8">Get your LLP Registration in 3 Simple Steps</p>

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
              <p className="text-gray-600">Get your LLP Incorporation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step by step guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">LLP REGISTRATION : STEP BY STEP GUIDE</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-8">Limited Liability Partnership (LLP) is one of the preferred form of business structure among entrepreneurs due to its compliance flexibility. Legal Sthal takes you through the process of registering an LLP, covering key steps, required documents, costs, benefits, and handling all your frequently asked questions.</p>

          <div className="max-w-3xl mx-auto text-left">
            <h3 className="text-xl font-semibold mb-3">How to register an LLP in India?</h3>
            <p className="text-gray-700 mb-6">Prior to initiating the LLP registration procedure it is crucial to comprehend the benefits that an LLP offers to its partners. An LLP merges the features of a partnership and a company granting its partners the benefits of limited liability along with the flexibility of a partnership structure.</p>

            <h3 className="text-xl font-semibold mb-3">Steps for online LLP registration</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Fill and Submit: the above GET STARTED form.</li>
              <li>Watch a detailed Video on LLP formation.</li>
              <li>Submit a one page LLP registration questionnaire.</li>
              <li>Legal Sthal expert will clear your queries.</li>
              <li>Arrange for Partner Id and address proofs.</li>
              <li>Sign incorporation documents.</li>
              <li>Drafting main object and Name application.</li>
              <li>Filing of Incorporation forms with MCA.</li>
              <li>Getting the Incorporation Certificate.</li>
              <li>Filing of LLP Agreement.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">BENEFITS OF LLP INCORPORATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-8">Registering an LLP offers many advantages:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Limited Liability Protection to Partner's personal assets</h3>
              <p className="text-gray-600">Many times startups need to borrow money and take things on credit. In case of normal Partnerships, Partners personal savings and property would be at risk if business is not able to repay its loans. In an LLP, only investment to start a business is lost, personal assets of the Partners are safe.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Globe className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Better image and credibility in Market</h3>
              <p className="text-gray-600">Limited Liability Partnership (LLP) is a popular and well known business structure in the world. Corporate Customers, Vendors and Govt. Agencies prefer to deal with LLP instead of proprietorship or normal partnerships.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Cpu className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">No Audit Requirement & Minimal Compliances</h3>
              <p className="text-gray-600">LLP is easy to manage and statutory audit is not required for Limited Liability Partnership. LLP is most ideal for small enterprises. Tax Audit is also not required for LLPs with capital less than Rs. 25 lac and turnover not exceeding Rs. 40 lac.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Continuity of Business</h3>
              <p className="text-gray-600">LLP continues to exist beyond the existence of its Partners. This is not possible in traditional partnership firms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum requirements & Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">MINIMUM REQUIREMENTS FOR LLP REGISTRATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="max-w-3xl mx-auto text-left">
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Minimum 2 Partners</li>
              <li>DIN (Director Identification Number) for all the Designated Partners</li>
              <li>If a body corporate is a Partner, it has to nominate a natural person as its Nominee</li>
              <li>DSC (Digital Signature Certificate) for all the Designated Partners</li>
              <li>There is no concept of share capital, but each Partner has to contribute towards capital of LLP</li>
              <li>Address proof for office of LLP</li>
            </ol>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">DOCUMENTS REQUIRED FOR LLP REGISTRATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <div className="max-w-3xl mx-auto text-left">
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Partner's PAN Card: For identity verification.</li>
              <li>Address Proof of Partners: Aadhar Card, Voter ID, etc.</li>
              <li>Registered Office Proof: Electricity bill/water bill of the proposed registered office.</li>
              <li>No Objection Certificate (NOC): If rented, NOC from the owner of the registered office premises.</li>
              <li>Passport-size Photographs of the partners</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Fees & What you get */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">LLP REGISTRATION FEES, COST & CHARGES</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-6">LLP registration costs vary based on capital contribution and the state of incorporation. Generally, it includes:</p>

          <div className="max-w-3xl mx-auto text-left">
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>DSC Fee: The cost of obtaining DSC for partners.</li>
              <li>DIN Fee: Applicable fees for obtaining DIN.</li>
              <li>Name Approval Fee: Charges for name reservation.</li>
              <li>Registration Fee: Varies as per capital contribution.</li>
              <li>Professional Charges: for legal support and facilitation.</li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-4">WHAT ALL YOU GET</h3>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <ul className="space-y-2">
              <li>DIN for 2 Partners</li>
              <li>Digital Signature for 1 Partner</li>
              <li>Incorporation Certificate</li>
              <li>LLP PAN Card</li>
              <li>LLP TAN/TDS</li>
            </ul>

            <ul className="space-y-2">
              <li>Web Hosting + 10 emails for 1 Year</li>
              <li>Bank A/C Opening Support</li>
              <li>Master File of all docs filed for Incorporation</li>
              <li>Web Domain Name for 1 Year</li>
              <li>LLP Agreement</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LimitedLiabilityPartnership;
