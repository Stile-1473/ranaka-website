import { motion } from 'framer-motion';
import { Shield, Clock, TrendingUp, Heart, Award, Users, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: 'Over 25 years of experience with a 98% success rate across all practice areas.',
      stat: '98%',
      statLabel: 'Success Rate',
    },
    {
      icon: Clock,
      title: 'Prompt Response',
      description: 'We understand time is crucial. Our team responds within 24 hours.',
      stat: '24h',
      statLabel: 'Response Time',
    },
    {
      icon: TrendingUp,
      title: 'Cost-Effective',
      description: 'Transparent pricing with flexible payment options to suit your budget.',
      stat: '100%',
      statLabel: 'Transparent',
    },
  ];

  const benefits = [
    'Free Initial Consultation',
    'No Win, No Fee Options',
    '24/7 Emergency Support',
    'Multi-Lingual Team',
    'Modern Technology',
    'Client-Focused Approach',
  ];

  const certifications = [
    { name: 'ISO 9001 Certified', icon: Award },
    { name: 'Law Society Member', icon: Shield },
    { name: 'Best Law Firm 2023', icon: Star },
  ];

  return (
    <section className="py-20 bg-white">
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
            className="inline-block px-4 py-1 bg-accent/10 text-accent-dark rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
            The Ranaka Difference
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
            We combine experience, expertise, and dedication to deliver exceptional legal solutions tailored to your unique needs.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-bg-light rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-text-medium leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="text-3xl font-bold text-accent">{feature.stat}</div>
              <div className="text-text-light text-sm">{feature.statLabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-primary-dark mb-6">
              What Sets Us Apart
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <span className="text-text-dark">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-white">
              <h3 className="text-xl font-serif font-bold mb-6">Our Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <cert.icon className="text-primary-dark" size={24} />
                    </div>
                    <span className="font-medium">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="bg-bg-light rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '1500+', label: 'Happy Clients' },
              { icon: Award, value: '2000+', label: 'Cases Won' },
              { icon: Heart, value: '500+', label: '5-Star Reviews' },
              { icon: Shield, value: '25+', label: 'Years Experience' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white rounded-xl shadow-md">
                    <item.icon className="text-primary" size={24} />
                  </div>
                </div>
                <p className="text-3xl font-bold text-primary-dark mb-1">{item.value}</p>
                <p className="text-text-light text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

