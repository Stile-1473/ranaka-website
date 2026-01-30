import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Home, 
  Users, 
  Scale, 
  FileText, 
  Plane, 
  ArrowRight,
  Shield,
  Building2,
  Gavel
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'Comprehensive legal solutions for businesses including formation, mergers, acquisitions, and corporate governance.',
      features: ['Business Formation', 'Mergers & Acquisitions', 'Corporate Governance', 'Contract Drafting'],
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Expert guidance through property transactions, leasing, zoning laws, and real estate disputes.',
      features: ['Property Transactions', 'Commercial Leasing', 'Zoning & Land Use', 'Real Estate Disputes'],
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Compassionate support for family matters including divorce, custody, adoption, and estate planning.',
      features: ['Divorce & Separation', 'Child Custody', 'Adoption', 'Estate Planning'],
    },
    {
      icon: Gavel,
      title: 'Litigation',
      description: 'Aggressive representation in court proceedings for civil, commercial, and criminal matters.',
      features: ['Civil Litigation', 'Commercial Disputes', 'Criminal Defense', 'Appellate Practice'],
    },
    {
      icon: FileText,
      title: 'Estate Planning',
      description: 'Strategic planning for the future including wills, trusts, probate, and asset protection.',
      features: ['Wills & Trusts', 'Probate Administration', 'Asset Protection', 'Power of Attorney'],
    },
    {
      icon: Plane,
      title: 'Immigration Law',
      description: 'Navigating complex immigration processes for individuals, families, and businesses.',
      features: ['Work Permits', 'Residency Applications', 'Citizenship', 'Deportation Defense'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
            Practice Areas
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of legal services to meet the diverse needs of our clients. Our experienced attorneys specialize in various fields of law.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-bg-light rounded-2xl p-8 hover:bg-gradient-to-br hover:from-primary hover:to-primary-light transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <service.icon className="text-primary-dark group-hover:text-white transition-colors duration-300" size={32} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-primary-dark group-hover:text-white mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-medium group-hover:text-white/80 mb-6 leading-relaxed transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm group-hover:text-white/90 transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                  >
                    <Shield size={14} className="text-accent group-hover:text-accent-light" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Learn More Link */}
              <motion.div
                className="flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span>Learn More</span>
                <ArrowRight size={18} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-3xl p-10 sm:p-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Need Legal Assistance?
              </h3>
              <p className="text-white/80">
                Schedule a free consultation with our expert attorneys today.
              </p>
            </div>
            <motion.button
              className="px-8 py-4 bg-accent text-primary-dark font-semibold rounded-lg shadow-lg whitespace-nowrap"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(201, 162, 39, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              Book Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

