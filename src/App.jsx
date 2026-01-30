import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import './App.css';

// Page Components
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import LegalServices from './components/pages/LegalServices';
import GetLegalHelp from './components/pages/GetLegalHelp';
import OurTeam from './components/pages/OurTeam';
import Resources from './components/pages/Resources';
import ContactUs from './components/pages/ContactUs';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * App Component - Main routing and layout wrapper
 * Ranaka Legal Aid Trust Website
 * 
 * Professional, responsive law firm website with:
 * - React Router for page navigation
 * - Tailwind CSS for styling
 * - Responsive design (mobile-first)
 * - Accessible components
 * - SEO-optimized structure
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<LegalServices />} />
            <Route path="/get-help" element={<GetLegalHelp />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
