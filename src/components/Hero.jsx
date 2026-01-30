import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Shield, value: '2000+', label: 'Cases Won' },
    { icon: Users, value: '1500+', label: 'Happy Clients' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="200" height="200" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Gold Accent Circle */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Second Gold Accent */}
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="text-accent" size={18} />
              <span className="text-white/90 text-sm font-medium">Trusted Legal Excellence Since 1998</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Defending Your Rights with{' '}
              <span className="text-accent">Integrity</span> and{' '}
              <span className="text-accent">Excellence</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
At Ranaka Legal Aid Trust, we provide world-class legal solutions tailored to your needs.
              Our experienced team of attorneys is committed to protecting your interests and achieving justice.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact">
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(201, 162, 39, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Consultation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Services
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <stat.icon className="text-accent" size={20} />
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Card */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden"
              initial={{ rotate: 3, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Decorative Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-primary-dark font-serif font-bold text-lg">Legal Protection</h3>
                  <p className="text-accent text-sm font-medium">100% Success Rate</p>
                </div>
              </div>

              {/* Placeholder Image Area */}
              <div className="bg-gradient-to-br from-cream to-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center h-40 bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="text-white" size={40} />
                    </div>
                    <p className="text-primary-dark font-serif font-semibold">Excellence in Every Case</p>
                  </div>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-3">
                {[
                  'Expert Legal Advice',
                  'Personalized Approach',
                  'Competitive Rates',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-text-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Gold Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Award className="text-primary-dark" size={24} />
              </div>
              <div>
                <p className="text-primary-dark font-bold">Top Rated</p>
                <p className="text-text-light text-sm">Law Firm 2024</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-dark font-semibold text-sm mt-1">500+ Reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-white/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

