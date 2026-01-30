import { motion } from 'framer-motion';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Corporate Law', href: '#' },
      { label: 'Family Law', href: '#' },
      { label: 'Real Estate', href: '#' },
      { label: 'Litigation', href: '#' },
      { label: 'Estate Planning', href: '#' },
      { label: 'Immigration', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News & Insights', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
    support: [
      { label: 'FAQs', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Disclaimer', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                <Scale className="text-primary-dark" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold">Ranaka</h2>
                <p className="text-accent text-xs font-semibold tracking-wider">LEGAL AID TRUST</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
              Providing exceptional legal services with integrity and excellence since 1998. 
              Our experienced team is dedicated to protecting your rights and achieving justice.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+2632421234567" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+263 242 123 4567</span>
              </a>
              <a href="mailto:info@ranakalegal.co.za" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>info@ranakalegal.co.za</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={18} />
                <span>6 Belvedere Road, Harare, Zimbabwe</span>
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif font-bold text-lg mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-serif font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © {currentYear} Ranaka Legal Aid Trust. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-accent hover:text-primary-dark transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Legal Disclaimer */}
            <p className="text-white/40 text-xs text-center md:text-right">
              Attorney Advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

