import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';

const CTA = () => {
  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+263 242 123 4567', href: 'tel:+2632421234567' },
    { icon: Mail, label: 'Email', value: 'info@ranakalegal.co.za', href: 'mailto:info@ranakalegal.co.za' },
    { icon: MapPin, label: 'Address', value: '6 Belvedere Road, Harare, Zimbabwe', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Fri: 8:00 AM - 5:00 PM', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
            Get in Touch Today
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your legal matter? Reach out to us for a free initial consultation. We're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+263 77 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Legal Matter Type *
                </label>
                <select className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option value="">Select a service...</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="family">Family Law</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="litigation">Litigation</option>
                  <option value="estate">Estate Planning</option>
                  <option value="immigration">Immigration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Please describe your legal matter..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-primary-dark" size={24} />
                  </div>
                  <div>
                    <p className="text-text-light text-sm">{item.label}</p>
                    <p className="text-primary-dark font-semibold">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-dark" size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg">Emergency Legal Aid</h4>
                  <p className="text-white/70 text-sm">Available 24/7 for urgent matters</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Facing an urgent legal situation? Our emergency legal team is available around the clock to provide immediate assistance.
              </p>
              <motion.button
                className="w-full py-3 bg-accent text-primary-dark font-semibold rounded-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={18} />
                Call Emergency Line
              </motion.button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <h4 className="font-serif font-bold text-primary-dark mb-4">Find Our Office</h4>
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-text-medium text-sm">6 Belvedere Road</p>
                  <p className="text-text-light text-xs">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

