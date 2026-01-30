import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer component with contact info, links, and legal disclaimer
 * Includes: Company info, contact details, quick links, social media, legal disclaimer
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Ranaka Legal Aid Trust</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Providing access to justice and professional legal support for all members of our community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Our Team', to: '/team' },
                { label: 'Resources', to: '/resources' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services#family" className="text-gray-400 hover:text-white transition-colors">Family Law</a></li>
              <li><a href="/services#criminal" className="text-gray-400 hover:text-white transition-colors">Criminal Defense</a></li>
              <li><a href="/services#labor" className="text-gray-400 hover:text-white transition-colors">Labor & Employment</a></li>
              <li><a href="/services#property" className="text-gray-400 hover:text-white transition-colors">Property Disputes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="flex-shrink-0 mt-1" size={16} style={{ color: '#C9A227' }} />
                <p className="text-gray-400">123 Justice Avenue, Capital City, 10001</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="flex-shrink-0" size={16} style={{ color: '#C9A227' }} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="flex-shrink-0" size={16} style={{ color: '#C9A227' }} />
                <a href="mailto:info@ranakalegal.org" className="text-gray-400 hover:text-white transition-colors">
                  info@ranakalegal.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Social Media & Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-right">
            &copy; {currentYear} Ranaka Legal Aid Trust. All rights reserved.
          </p>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-gray-950 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 leading-relaxed text-justify">
            <strong>Legal Disclaimer:</strong> This website is provided for informational purposes only and does not constitute legal advice. 
            The information contained herein is not a substitute for professional legal counsel. Ranaka Legal Aid Trust does not create a 
            solicitor-client relationship by providing this information. Users should consult with a qualified attorney for legal advice 
            specific to their situation. Ranaka Legal Aid Trust is a registered non-profit organization providing pro bono and subsidized 
            legal services to eligible individuals. Eligibility criteria apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
