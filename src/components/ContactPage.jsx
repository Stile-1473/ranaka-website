import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  Facebook, Twitter, Linkedin, Instagram,
  MessageCircle, FileText, ArrowRight, CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: '6 Belvedere Road, Harare, Zimbabwe',
      href: 'https://maps.google.com/maps?q=-17.8368992%2C31.039239&z=17&hl=en',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+263 242 123 4567',
      href: 'tel:+2632421234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@ranakalegal.co.za',
      href: 'mailto:info@ranakalegal.co.za',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Fri: 8:00 AM - 5:00 PM',
      href: '#',
    },
  ];

  const services = [
    'Corporate Law',
    'Family Law',
    'Real Estate',
    'Litigation',
    'Estate Planning',
    'Immigration Law',
    'Criminal Defense',
    'Other',
  ];

  const faqs = [
    {
      question: 'What should I bring to my first consultation?',
      answer: 'Please bring any relevant documents related to your case, such as contracts, court papers, identification, and any correspondence.',
    },
    {
      question: 'How much does a consultation cost?',
      answer: 'We offer a free 30-minute initial consultation for most matters. Please contact us to schedule your appointment.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we understand that legal fees can be challenging. We offer flexible payment plans and transparent fee structures.',
    },
    {
      question: 'How long will my case take?',
      answer: 'The duration varies depending on the complexity of your matter. We will provide you with a timeline during your initial consultation.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="200" height="200" fill="url(#grid)" />
          </svg>
        </div>
        
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Contact Us
          </motion.span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're here to help. Contact us today for a free consultation and let us guide you through your legal journey.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-bg-light -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="text-white" size={24} />
                </div>
                <p className="text-text-light text-sm mb-1">{info.label}</p>
                <p className="text-primary-dark font-semibold">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-dark mb-2">
                Send Us a Message
              </h2>
              <p className="text-text-medium mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="+263 77 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Service Required *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your legal matter..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-dark mb-2">
                Visit Our Office
              </h2>
              <p className="text-text-medium mb-8">
                Come see us at our office in Harare. We're conveniently located and ready to assist you.
              </p>

              {/* Map */}
              <div className="bg-bg-light rounded-2xl overflow-hidden mb-8 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.5!2d31.0392!3d-17.8369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ1JzE2LjAiUyAzMcKwMDInMjEuOCJF!5e0!3m2!1sen!2szw!4v1699900000000!5m2!1sen!2szw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Quick Contact Options */}
              <div className="bg-bg-light rounded-2xl p-6">
                <h3 className="font-serif font-bold text-primary-dark mb-4">Other Ways to Reach Us</h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="https://wa.me/2632421234567"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-dark">WhatsApp</p>
                      <p className="text-text-light text-sm">Chat with us directly</p>
                    </div>
                    <ArrowRight className="ml-auto text-accent" size={20} />
                  </motion.a>

                  <motion.a
                    href="tel:+2632421234567"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-dark">Emergency Line</p>
                      <p className="text-text-light text-sm">24/7 legal support</p>
                    </div>
                    <ArrowRight className="ml-auto text-accent" size={20} />
                  </motion.a>

                  <motion.a
                    href="mailto:info@ranakalegal.co.za"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <FileText className="text-primary-dark" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-dark">Document Review</p>
                      <p className="text-text-light text-sm">Send us your documents</p>
                    </div>
                    <ArrowRight className="ml-auto text-accent" size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h3 className="font-serif font-bold text-primary-dark mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, href: '#', color: 'bg-blue-600' },
                    { icon: Twitter, href: '#', color: 'bg-sky-500' },
                    { icon: Linkedin, href: '#', color: 'bg-blue-700' },
                    { icon: Instagram, href: '#', color: 'bg-pink-600' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-medium leading-relaxed">
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <h3 className="font-serif font-bold text-primary-dark mb-2 flex items-center gap-2">
                  <MessageCircle className="text-accent" size={20} />
                  {faq.question}
                </h3>
                <p className="text-text-medium leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today. Our team is ready to help you navigate your legal challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-accent text-primary-dark font-semibold rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Now: +263 242 123 4567
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

