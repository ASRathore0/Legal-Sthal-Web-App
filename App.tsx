import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SoleProprietorship from './pages/SoleProprietorship';
import Partnership from './pages/Partnership';
import StartupIndia from './pages/StartupIndia';
import StartBusiness from './pages/StartBusiness';
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
          <Route path="/start-business" element={<StartBusiness />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;