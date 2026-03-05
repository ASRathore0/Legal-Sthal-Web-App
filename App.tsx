import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SoleProprietorship from './pages/SoleProprietorship';
import Partnership from './pages/Partnership';
import StartupIndia from './pages/StartupIndia';
import StartBusiness from './pages/StartBusiness';
import PrivateLimitedCompany from './pages/PrivateLimitedCompany';
import OnePersonCompany from './pages/OnePersonCompany';
import LimitedLiabilityPartnership from './pages/LimitedLiabilityPartnership';
import PublicLimitedCompany from './pages/PublicLimitedCompany';
import ProtectBusiness from './pages/ProtectBusiness';
import ManageBusiness from './pages/ManageBusiness';
import GrowBusiness from './pages/GrowBusiness';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sole-proprietorship" element={<SoleProprietorship />} />
          <Route path="/partnership-registration" element={<Partnership />} />
          <Route path="/startup-india-registration" element={<StartupIndia />} />
          <Route path="/private-limited-company" element={<PrivateLimitedCompany />} />
          <Route path="/limited-liability-partnership" element={<LimitedLiabilityPartnership />} />
          <Route path="/public-limited-company" element={<PublicLimitedCompany />} />
          <Route path="/one-person-company" element={<OnePersonCompany />} />
          <Route path="/start-business" element={<StartBusiness />} />
          <Route path="/protect-business" element={<ProtectBusiness />} />
          <Route path="/manage-business" element={<ManageBusiness />} />
          <Route path="/grow-business" element={<GrowBusiness />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;