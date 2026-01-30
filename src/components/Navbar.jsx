import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale, Phone, Mail, Clock } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About' },
    { id: '/services', label: 'Services' },
    { id: '/team', label: 'Our Team' },
    { id: '/testimonials', label: 'Testimonials' },
    { id: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className={`hidden md:block bg-primary-dark text-white text-sm transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2">
                <Phone size={14} />
                +263 242 123 4567
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} />
                info@ranakalegal.co.za
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.div 
                className="bg-gradient-to-br from-primary to-primary-light p-2 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <Scale className="text-white" size={28} />
              </motion.div>
              <div>
                <h1 className="text-xl font-serif font-bold text-primary-dark">Ranaka</h1>
                <p className="text-xs text-accent font-semibold tracking-wider">LEGAL AID TRUST</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.id}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.id
                        ? 'text-primary bg-cream'
                        : 'text-text-medium hover:text-primary hover:bg-cream/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact">
                <motion.button
                  className="ml-4 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(201, 162, 39, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Consultation
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      location.pathname === item.id
                        ? 'text-primary bg-cream'
                        : 'text-text-medium hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-semibold rounded-lg text-center"
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;

