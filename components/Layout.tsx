import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Scale, Phone, Mail, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { getStorageUrl } from '../services/cmsService';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { globalContent, loading } = useCMS();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<number | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileSubMenu = (index: number) => {
      setOpenMobileSubMenu(openMobileSubMenu === index ? null : index);
  };

  if (loading && !globalContent) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
      );
  }

  const navItems = globalContent?.header_nav || [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                {/* Logo Icon Composite */}
                {globalContent?.header_logo ? (
                     <img src={getStorageUrl(globalContent.header_logo)} alt="Logo" className="h-10 w-auto" />
                ) : (
                    <div className="relative w-10 h-10 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-blue-900 absolute" strokeWidth={1.5} />
                    <Scale className="w-5 h-5 text-orange-600 absolute mb-1" strokeWidth={2.5} />
                    </div>
                )}
                {/* Logo Text */}
                {!globalContent?.header_logo && (
                    <div className="flex items-baseline">
                    <span className="font-serif font-bold text-2xl text-blue-900 tracking-tight">Legal</span>
                    <span className="font-sans font-bold text-2xl text-orange-600 ml-1.5">स्थल</span>
                    </div>
                )}
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const hasSubNav = item.subNav && item.subNav.length > 0;
                // Check if current page is this link or any of its sublinks
                const isGroupActive = isActive(item.link) || (hasSubNav && item.subNav?.some(sub => isActive(sub.link)));

                return (
                  <div key={index} className="relative group h-full flex items-center">
                    {hasSubNav ? (
                      <>
                        <button
                          className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 h-full ${
                             isGroupActive
                              ? 'border-orange-500 text-gray-900'
                              : 'border-transparent text-gray-500 group-hover:text-orange-600 group-hover:border-gray-300'
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 w-60 bg-white rounded-b-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 border-t-2 border-orange-500">
                          {item.subNav?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.link}
                              className={`block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                                isActive(subItem.link) ? 'bg-orange-50 text-orange-600 font-semibold' : ''
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.link}
                        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 h-full ${
                          isActive(item.link)
                            ? 'border-orange-500 text-gray-900'
                            : 'border-transparent text-gray-500 hover:text-orange-600 hover:border-gray-300'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-colors shadow-sm">
                Consult Expert
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => {
                const hasSubNav = item.subNav && item.subNav.length > 0;
                const isSubMenuOpen = openMobileSubMenu === index;

                return (
                  <div key={index}>
                    {hasSubNav ? (
                      <>
                        <button
                          onClick={() => toggleMobileSubMenu(index)}
                          className={`w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors ${
                            isActive(item.link) || isSubMenuOpen
                              ? 'bg-orange-50 border-orange-500 text-orange-700'
                              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                          }`}
                        >
                          {item.label}
                          {isSubMenuOpen ? (
                            <ChevronDown className="h-5 w-5" />
                          ) : (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </button>
                        
                        {isSubMenuOpen && (
                          <div className="bg-gray-50 py-1">
                            {item.subNav?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block pl-8 pr-4 py-2 text-sm font-medium ${
                                  isActive(subItem.link)
                                    ? 'text-orange-600 bg-orange-100/50'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                          isActive(item.link)
                            ? 'bg-orange-50 border-orange-500 text-orange-700'
                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-orange-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {globalContent?.header_logo ? (
                     <div className="h-10 md:h-12 bg-white rounded flex items-center justify-center p-1">
                        <img 
                          src={getStorageUrl(globalContent.header_logo)} 
                          alt="Legal Sthal" 
                          className="h-full w-auto object-contain" 
                        />
                     </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white absolute" strokeWidth={1.5} />
                            <Scale className="w-3 h-3 text-orange-500 absolute mb-0.5" strokeWidth={2.5} />
                        </div>
                        <div className="flex items-baseline">
                            <span className="font-serif font-bold text-xl text-white">Legal</span>
                            <span className="font-sans font-bold text-xl text-orange-500 ml-1">स्थल</span>
                        </div>
                    </div>
                )}
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                {globalContent?.footer_about || 'Your trusted partner for simple, secure, and fast online business registration services in India. We simplify the legalities so you can focus on your business.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                  {globalContent?.header_nav?.map((navItem, idx) => (
                    <li key={idx}>
                      <Link to={navItem.link || '#'} className="text-blue-100 hover:text-white transition-colors text-sm">
                        {navItem.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-blue-100">
                {(globalContent?.footer_address || globalContent?.footer_phone || globalContent?.footer_email) ? (
                    <>
                    {globalContent?.footer_address && (
                      <li className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          <span>{globalContent.footer_address}</span>
                      </li>
                    )}
                    {globalContent?.footer_phone && (
                      <li className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          <a href={`tel:${globalContent.footer_phone}`} className="hover:text-white transition-colors">{globalContent.footer_phone}</a>
                      </li>
                    )}
                    {globalContent?.footer_email && (
                      <li className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          <a href={`mailto:${globalContent.footer_email}`} className="hover:text-white transition-colors">{globalContent.footer_email}</a>
                      </li>
                    )}
                    </>
                ) : null}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm text-blue-300">
            &copy; {new Date().getFullYear()} Legal Sthal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Layout;