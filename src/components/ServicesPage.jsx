import { motion } from 'framer-motion';
import { 
  Briefcase, Home, Users, Scale, FileText, Plane,
  ArrowRight, CheckCircle, Clock, Shield, TrendingUp,
  Building2, Gavel, Heart, DollarSign
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Law',
      subtitle: 'Business & Commercial Legal Solutions',
      description: 'Comprehensive legal services for businesses of all sizes, from startups to established corporations. We help you navigate complex commercial landscapes.',
      features: [
        'Business Formation & Registration',
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Contract Drafting & Review',
        'Shareholder Agreements',
        'Commercial Disputes',
      ],
      benefits: [
        'Protect your business interests',
        'Ensure regulatory compliance',
        'Minimize legal risks',
        'Maximize growth opportunities',
      ],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Home,
      title: 'Real Estate Law',
      subtitle: 'Property & Land Legal Services',
      description: 'Expert guidance through all aspects of property transactions, leasing, and real estate disputes. We protect your property investments.',
      features: [
        'Property Transactions',
        'Commercial & Residential Leasing',
        'Zoning & Land Use',
        'Real Estate Disputes',
        'Title Searches & Due Diligence',
        'Property Development',
      ],
      benefits: [
        'Secure property transactions',
        'Clear title ownership',
        'Dispute resolution',
        'Compliance with regulations',
      ],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Users,
      title: 'Family Law',
      subtitle: 'Family & Domestic Legal Matters',
      description: 'Compassionate support for sensitive family matters. We handle cases with care and discretion, prioritizing your family wellbeing.',
      features: [
        'Divorce & Separation',
        'Child Custody & Access',
        'Maintenance & Alimony',
        'Adoption Proceedings',
        'Domestic Violence Protection',
        'Mediation Services',
      ],
      benefits: [
        'Child-focused solutions',
        'Amicable resolutions',
        'Protective orders',
        'Emotional support',
      ],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Gavel,
      title: 'Litigation',
      subtitle: 'Dispute Resolution & Court Representation',
      description: 'Aggressive and strategic representation in court proceedings. We fight for your rights and interests in civil and commercial matters.',
      features: [
        'Civil Litigation',
        'Commercial Disputes',
        'Contract Breaches',
        'Tort Claims',
        'Appellate Practice',
        'Alternative Dispute Resolution',
      ],
      benefits: [
        'Strong courtroom presence',
        'Strategic case management',
        'Cost-effective solutions',
        'Timely resolutions',
      ],
      image: '/api/placeholder/400/300',
    },
    {
      icon: FileText,
      title: 'Estate Planning',
      subtitle: 'Wills, Trusts & Asset Protection',
      description: 'Strategic planning for the future. We help protect your assets and ensure your wishes are honored for generations to come.',
      features: [
        'Wills & Testaments',
        'Trust Creation & Administration',
        'Probate Proceedings',
        'Asset Protection Planning',
        'Succession Planning',
        'Power of Attorney',
      ],
      benefits: [
        'Protect family wealth',
        'Minimize estate taxes',
        'Ensure wishes honored',
        'Peace of mind',
      ],
      image: '/api/placeholder/400/300',
    },
    {
      icon: Plane,
      title: 'Immigration Law',
      subtitle: 'Visa & Citizenship Services',
      description: 'Navigating complex immigration processes for individuals, families, and businesses. We make the journey to legal status clear.',
      features: [
        'Work Permits & Visas',
        'Permanent Residency',
        'Citizenship Applications',
        'Deportation Defense',
        'Business Immigration',
        'Family Sponsorship',
      ],
      benefits: [
        'Legal pathway to status',
        'Family reunification',
        'Work authorization',
        'Protection from detention',
      ],
      image: '/api/placeholder/400/300',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Free 30-minute consultation to discuss your legal needs and assess your case.',
      icon: Clock,
    },
    {
      number: '02',
      title: 'Case Assessment',
      description: 'Our team analyzes your situation and develops a tailored legal strategy.',
      icon: Shield,
    },
    {
      number: '03',
      title: 'Strategy Implementation',
      description: 'We execute the plan with dedication, keeping you informed every step of the way.',
      icon: TrendingUp,
    },
    {
      number: '04',
      title: 'Resolution & Support',
      description: 'We achieve the best possible outcome and provide ongoing support when needed.',
      icon: CheckCircle,
    },
  ];

  const stats = [
    { value: '98%', label: 'Success Rate' },
    { value: '2000+', label: 'Cases Won' },
    { value: '25+', label: 'Years Experience' },
    { value: '1500+', label: 'Happy Clients' },
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
            Our Expertise
          </motion.span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Legal Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal solutions tailored to your needs. Our experienced attorneys 
            specialize in various fields of law to protect your interests and achieve justice.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-text-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary-dark">{service.title}</h3>
                    <p className="text-accent text-sm font-medium">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-text-medium leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-text-dark text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-bg-light rounded-xl p-4 mb-6">
                  <p className="font-semibold text-primary-dark mb-2 text-sm">Key Benefits:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More About {service.title}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1 mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="text-white" size={48} />
                    </div>
                    <p className="text-primary-dark font-serif font-semibold">{service.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              How We Work
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
              Our streamlined process ensures efficient and effective legal representation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-4 -left-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <step.icon className="text-primary-dark" size={24} />
                </div>
                <p className="text-4xl font-bold text-primary/20 mb-4">{step.number}</p>
                <h3 className="text-lg font-serif font-bold text-primary-dark mb-2">{step.title}</h3>
                <p className="text-text-medium text-sm">{step.description}</p>
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
              Need Legal Assistance?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our expert attorneys today. We are here to help you navigate your legal challenges.
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
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

