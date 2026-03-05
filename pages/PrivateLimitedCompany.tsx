import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Cpu, CheckCircle } from 'lucide-react';

const PrivateLimitedCompany: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pvt. Ltd. Company Registration</h1>
          <p className="text-3xl md:text-4xl font-semibold mb-3">@ Rs. 1499*</p>
          <p className="text-sm text-blue-200 mb-8">In 15 days · Online Process · Facilitation</p>

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

          <p className="text-sm text-blue-200 mt-6 italic">*Facilitation Fees. Government Charges Extra.</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">HERE'S HOW IT WORKS</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-8">Get your Company Registration in 3 steps</p>

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

      {/* Content sections (guide) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">PVT LTD COMPANY REGISTRATION: STEP BY STEP GUIDE</h2>
          <p className="text-gray-600 mb-8">Registering a private limited company is a popular choice for entrepreneurs in India due to its legal acceptability, limited liability protection for directors, market credibility, and trust factor.</p>

          <div className="text-left">
            <ol className="space-y-4 list-decimal pl-6 text-gray-700">
              <li><strong>Filling a Questionnaire:</strong> Once you submit the above GET STARTED form, you may need to fill a simple one page Questionnaire to start the Company incorporation process.</li>
              <li><strong>Arranging of Founders or Directors Documents:</strong> The directors and shareholders need to arrange for simple proof documents.</li>
              <li><strong>Preparation of Signing Documents:</strong> The legal team will check the documents and prepare incorporation documents for signature.</li>
              <li><strong>Digital Signature Certificate (DSC):</strong> The first step is obtaining DSCs for the proposed Directors of the company.</li>
              <li><strong>Name Application & Approval:</strong> The company's proposed name must be unique and can be verified and applied for through MCA.</li>
              <li><strong>Memorandum of Association (MoA) & Articles of Association (AoA):</strong> Drafting and submitting the MoA and AoA.</li>
              <li><strong>Incorporation Application:</strong> File the incorporation application (SPICe Form) along with the necessary documents to the MCA.</li>
              <li><strong>Approval and Incorporation Certificate:</strong> After verification, the Registrar of Companies will issue the Certificate of Incorporation.</li>
              <li><strong>Director Identification Number (DIN):</strong> Every Director must have a DIN.</li>
              <li><strong>PAN & TAN number:</strong> Along with the company incorporation certificate you will be allotted a Company PAN and TAN/TDS number.</li>
              <li><strong>Bank Account:</strong> Open a bank account in the name of the company to start operations.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-600">Want us to handle the registration? <Link to="/contact" className="text-blue-600 font-semibold">Contact us</Link> and our team will assist you.</p>
        </div>
      </section>
      
      {/* Documents Required */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">DOCUMENTS REQUIRED FOR COMPANY REGISTRATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-6">The following documents are needed for registering a Pvt Ltd company in India:</p>

          <div className="text-left max-w-3xl mx-auto">
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Passport-sized Photographs of the directors.</li>
              <li>Identity Proof of Directors and Shareholders: PAN card for Indian nationals and passport for foreign nationals.</li>
              <li>Address Proof: Aadhar card, voter ID, passport, or driving license.</li>
              <li>Residential Proof: Recent utility bills or bank statements.</li>
              <li>Registered Office Proof: Rent agreement and NOC from the landlord if rented, or ownership documents if owned.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Fees & Charges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">COMPANY REGISTRATION FEES, COST, & CHARGES</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-6">The cost of registering a Pvt Ltd company in India varies based on several factors such as the number of directors, share capital, and professional fees.</p>

          <div className="text-left max-w-3xl mx-auto">
            <p className="text-gray-700 mb-3">The basic government fees include:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>DSC Token: Fee per DSC application.</li>
              <li>Name Reservation: Fee for reserving the company name.</li>
              <li>Form Filing Fees: Fees for filing incorporation forms.</li>
              <li>Stamp Duty: Varies based on the state of incorporation.</li>
            </ol>
            <p className="text-gray-700 mt-4">Additional costs include professional fees for legal documentation.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">BENEFITS OF COMPANY REGISTRATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-gray-600 mb-8">Registering a Pvt Ltd company offers many advantages:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Limited Liability Protection to Directors' personal assets</h3>
              <p className="text-gray-600">In a private limited company, only investment in business is at risk; personal assets of the directors are generally protected.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Globe className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Better image and credibility in Market</h3>
              <p className="text-gray-600">Corporate customers, vendors and government agencies prefer to deal with Private Limited companies for credibility and trust.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Cpu className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Easy to raise funds and loans</h3>
              <p className="text-gray-600">Pvt. Ltd. companies have wider options to raise funds through bank loans, angel investors and venture capitalists.</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Shield className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Favorite Business structure for Investors</h3>
              <p className="text-gray-600">Investors prefer Private Limited companies as they are well structured and make exits easier.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Globe className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Easy to attract Employees</h3>
              <p className="text-gray-600">It's easier to hire and retain talent with corporate designations and stock options.</p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gray-100 rounded-full p-6">
                  <Cpu className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-center mb-2">Easy to Sell</h3>
              <p className="text-gray-600">Private Ltd is easy to sell — less documentation and costs are involved in transfer compared to other structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">MINIMUM REQUIREMENTS FOR PVT. LTD. REGISTRATION</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Minimum 2 Shareholders</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>One of the Directors must be Indian Resident</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>DSC for 2 Promoters & 1 witness</span></li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Minimum 2 Directors</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Suggested Authorised Share Capital 20,000 (INR Twenty Thousand)</span></li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>The directors and shareholders can be same person</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>DIN (Director Identification Number) for all Directors</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* What all you get */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">WHAT ALL YOU GET</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>DIN for 2 Directors</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>MOA + AOA</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Customized Incorporation Master File</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Bank Account Opening Support</span></li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="text-blue-600 mt-1" /> <span>Digital Signature Token for 2 Promoters & 1 witness</span></li>
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

export default PrivateLimitedCompany;
