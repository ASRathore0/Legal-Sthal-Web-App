import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { Menu, X, Shield, Scale, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

// quick list removed — desktop/mobile now use left/right company lists directly

const startBusinessCompaniesLeft: NavItem[] = [
  { label: 'Private Limited Company', path: '/private-limited-company' },
  { label: 'One Person Company', path: '/one-person-company' },
  { label: 'Limited Liability Partnership', path: '/limited-liability-partnership' },
  { label: 'Startup India', path: '/startup-india-registration' },
];

const startBusinessCompaniesRight: NavItem[] = [
  { label: 'Sole Proprietorship', path: '/sole-proprietorship' },
  { label: 'Partnership', path: '/partnership-registration' },
  { label: 'Public Limited Company', path: '/public-limited-company' },
];

const topNav = [
  { label: 'Start Business' },
  { label: 'Protect Business', path: '/protect-business' },
  { label: 'Manage Business', path: '/manage-business' },
  { label: 'Grow Business', path: '/grow-business' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const startCloseTimeout = useRef<number | null>(null);
  const startContainerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    return () => {
      if (startCloseTimeout.current) {
        window.clearTimeout(startCloseTimeout.current);
        startCloseTimeout.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                {/* Logo Icon Composite */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-blue-900 absolute" strokeWidth={1.5} />
                  <Scale className="w-5 h-5 text-orange-600 absolute mb-1" strokeWidth={2.5} />
                </div>
                {/* Logo Text */}
                <div className="flex items-baseline">
                  <span className="font-serif font-bold text-2xl text-blue-900 tracking-tight">Legal</span>
                  <span className="font-sans font-bold text-2xl text-orange-600 ml-1.5">स्थल</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div
              className="hidden md:grid items-center px-4 py-2 bg-white rounded-lg"
              style={{ gridAutoFlow: 'column', gridGap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}
            >
              {/* Start Business dropdown with current service links (JS-controlled for stable clicks) */}
              <div
                ref={startContainerRef}
                className="relative"
                onMouseEnter={() => {
                  if (startCloseTimeout.current) {
                    window.clearTimeout(startCloseTimeout.current);
                    startCloseTimeout.current = null;
                  }
                  setIsStartOpen(true);
                }}
                onMouseLeave={() => {
                  if (startCloseTimeout.current) window.clearTimeout(startCloseTimeout.current);
                  startCloseTimeout.current = window.setTimeout(() => setIsStartOpen(false), 180);
                }}
                onFocus={() => {
                  if (startCloseTimeout.current) {
                    window.clearTimeout(startCloseTimeout.current);
                    startCloseTimeout.current = null;
                  }
                  setIsStartOpen(true);
                }}
                onBlur={(e) => {
                  const related = (e as React.FocusEvent).relatedTarget as Node | null;
                  if (startContainerRef.current && related && startContainerRef.current.contains(related)) {
                    return;
                  }
                  if (startCloseTimeout.current) window.clearTimeout(startCloseTimeout.current);
                  startCloseTimeout.current = window.setTimeout(() => setIsStartOpen(false), 180);
                }}
                tabIndex={-1}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={isStartOpen}
                  onClick={() => {
                    if (startCloseTimeout.current) {
                      window.clearTimeout(startCloseTimeout.current);
                      startCloseTimeout.current = null;
                    }
                    setIsStartOpen((s) => !s);
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 transition-colors rounded whitespace-nowrap"
                >
                  <span>Start Business</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                <div
                  className={`absolute left-0 mt-3 w-96 bg-white ring-1 ring-black/5 shadow-lg rounded-md py-3 transition-transform origin-top ${
                    isStartOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                  }`}
                  style={{ transformOrigin: 'top' }}
                >
                  <div className="px-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        {startBusinessCompaniesLeft.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsStartOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className="space-y-1 border-l border-gray-100 pl-4">
                        {startBusinessCompaniesRight.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsStartOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {topNav.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path || '#'}
                  className={`inline-flex items-center px-3 py-2 text-base font-medium transition-colors duration-200 rounded whitespace-nowrap ${
                    item.path && isActive(item.path)
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                className={`inline-flex items-center px-3 py-2 text-base font-medium transition-colors duration-200 rounded whitespace-nowrap ${
                  isActive('/contact')
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-orange-600'
                }`}
              >
                Contact Us
              </Link>

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
              {/* Start Business group for mobile */}
              <div className="px-3">
                <details className="group">
                  <summary className="list-none cursor-pointer py-2 text-base font-medium text-gray-700">Start Business</summary>
                  <div className="mt-1 space-y-1">
                    {/* Company-related items for mobile (left + right lists) */}
                    {[...startBusinessCompaniesLeft, ...startBusinessCompaniesRight].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block pl-6 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>

              {topNav.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path || '#'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium uppercase tracking-wider ${
                    item.path && isActive(item.path)
                      ? 'bg-orange-50 border-orange-500 text-orange-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

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
                 <div className="relative w-6 h-6 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white absolute" strokeWidth={1.5} />
                  <Scale className="w-3 h-3 text-orange-500 absolute mb-0.5" strokeWidth={2.5} />
                </div>
                <div className="flex items-baseline">
                  <span className="font-serif font-bold text-xl text-white">Legal</span>
                  <span className="font-sans font-bold text-xl text-orange-500 ml-1">स्थल</span>
                </div>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Your trusted partner for simple, secure, and fast online business registration services in India. We simplify the legalities so you can focus on your business.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                <ul className="space-y-3">
                  {[...startBusinessCompaniesLeft, ...startBusinessCompaniesRight].map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className="text-blue-100 hover:text-white transition-colors text-sm">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  <li>
                    <Link to="/protect-business" className="text-blue-100 hover:text-white transition-colors text-sm">
                      Protect Business
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-business" className="text-blue-100 hover:text-white transition-colors text-sm">
                      Manage Business
                    </Link>
                  </li>
                  <li>
                    <Link to="/grow-business" className="text-blue-100 hover:text-white transition-colors text-sm">
                      Grow Business
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-blue-100 text-sm">
                  <Phone className="h-4 w-4 text-orange-500" /> +91 6204270990 
                </li>
                <li className="flex items-center gap-3 text-blue-100 text-sm">
                  <Mail className="h-4 w-4 text-orange-500" /> info@legalsthal.in
                </li>
                <li className="flex items-center gap-3 text-blue-100 text-sm">
                  <MapPin className="h-4 w-4 text-orange-500" /> Gurugram, Haryana 122003
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-800 pt-8 text-center">
            <p className="text-blue-300 text-xs">
              &copy; {new Date().getFullYear()} Legal Sthal. All rights reserved. Design & Developed by Gen SkyTech.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Layout;