import React from 'react';
import InquiryForm from '../components/InquiryForm';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';
import AdminAuth from '../components/AdminAuth';
import { ServiceType } from '../types';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center gap-4">
            <p className="text-blue-100 text-lg max-w-3xl">We are here to help you with all your business registration and legal compliance needs.</p>
            <AdminAuth />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">+91 6204270990 </p>
                    <p className="text-xs text-gray-400 mt-1">Mon-Sat 9am to 7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <p className="text-gray-600">info@legalsthal.in</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600">
                      4th Floor, Plot 93, Sector 44,<br />
                      Gurugram, Haryana 122003
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Open Mon-Sat 9am–6pm</p>
                    <div className="mt-4 w-full h-48 rounded-md overflow-hidden border border-gray-100">
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
                    <a
                      className="text-sm text-blue-700 hover:underline mt-2 inline-block"
                      href="https://www.google.com/maps/search/?api=1&query=4th+Floor,+Plot+93,+Sector+44,+Gurugram,+Haryana+122003"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </section>

             <section className="bg-blue-900 p-8 rounded-xl shadow-sm text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-orange-500" /> Trusted Support
                    </h2>
                    <p className="text-blue-100 text-sm leading-relaxed">
                        Our team of experienced CAs, CSs, and lawyers is ready to assist you. We ensure your queries are resolved within 24 hours.
                    </p>
                </div>
                 <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
                    <Shield className="h-32 w-32" />
                </div>
            </section>
          </div>

          {/* Contact Form */}
          <div>
            <InquiryForm serviceType={ServiceType.GENERAL} title="Send us a Message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;