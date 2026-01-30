import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * Navigation component with responsive mobile menu
 * Features: Logo, navigation links, CTA button, mobile hamburger menu
 */
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Legal Services' },
    { to: '/team', label: 'Our Team' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={closeMenu}
          >
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl" style={{ color: '#1E6F5C' }}>
                Ranaka
              </span>
              <span className="text-xs text-gray-600 leading-none">Legal Aid Trust</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-green-700 transition-colors text-sm font-medium"
                style={{ ':hover': { color: '#1E6F5C' } }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/get-help"
              className="px-6 py-2 rounded-lg font-medium text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: '#1E6F5C' }}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Get Legal Help
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} color="#1E6F5C" />
            ) : (
              <Menu size={24} color="#1E6F5C" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-green-700 font-medium transition-colors px-2"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/get-help"
                className="px-4 py-2 rounded-lg font-medium text-white text-center transition-all"
                style={{ backgroundColor: '#1E6F5C' }}
                onClick={closeMenu}
              >
                Get Legal Help
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
