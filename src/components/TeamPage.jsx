import { motion } from 'framer-motion';
import { 
  Scale, Linkedin, Twitter, Mail, Phone, 
  Award, Clock, Star, MapPin, Calendar,
  GraduationCap, Briefcase, Shield, CheckCircle
} from 'lucide-react';

const TeamPage = () => {
  const attorneys = [
    {
      name: 'Thabo Ranaka',
      title: 'Managing Partner',
      specialty: 'Corporate Law & M&A',
      image: '/api/placeholder/400/400',
      bio: 'Thabo is the visionary founder of Ranaka Legal Aid Trust with over 20 years of experience in corporate law. He has successfully handled numerous high-profile mergers and acquisitions, helping businesses grow and thrive.',
      education: [
        'LLB, University of Cape Town',
        'MBA, University of Johannesburg',
        'Advanced Corporate Law, Harvard',
      ],
      experience: '20+ Years',
      rating: 4.9,
      cases: '500+ Cases',
      languages: ['English', 'Zulu', 'Sotho'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Mergers & Acquisitions', 'Corporate Governance', 'Business Formation', 'Commercial Contracts'],
    },
    {
      name: 'Nomsa Ranaka',
      title: 'Senior Partner',
      specialty: 'Family Law & Estate Planning',
      image: '/api/placeholder/400/400',
      bio: 'Nomsa is known for her compassionate approach to family law matters. She has helped hundreds of families navigate difficult transitions with dignity and respect.',
      education: [
        'LLB, Stellenbosch University',
        'Family Law Certificate, UNISA',
        'Mediation Training, ADR SA',
      ],
      experience: '18+ Years',
      rating: 4.9,
      cases: '800+ Cases',
      languages: ['English', 'Xhosa', 'Zulu'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Divorce & Separation', 'Child Custody', 'Adoption', 'Estate Planning'],
    },
    {
      name: 'Michael Chen',
      title: 'Partner',
      specialty: 'Litigation & Dispute Resolution',
      image: '/api/placeholder/400/400',
      bio: 'Michael is a fierce advocate in the courtroom with a proven track record of winning complex litigation cases. His strategic approach has saved clients millions.',
      education: [
        'LLB, University of the Witwatersrand',
        'Litigation Certificate, Law Society',
        ' arbitration Training, CIArb',
      ],
      experience: '15+ Years',
      rating: 4.8,
      cases: '600+ Cases',
      languages: ['English', 'Mandarin', 'Cantonese'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Civil Litigation', 'Commercial Disputes', 'Contract Breaches', 'Appellate Practice'],
    },
    {
      name: 'Sarah Johnson',
      title: 'Senior Associate',
      specialty: 'Real Estate Law',
      image: '/api/placeholder/400/400',
      bio: 'Sarah specializes in commercial and residential real estate transactions. Her meticulous attention to detail ensures smooth property deals.',
      education: [
        'LLB, University of Pretoria',
        'Property Law Certificate, UJ',
      ],
      experience: '10+ Years',
      rating: 4.7,
      cases: '400+ Cases',
      languages: ['English', 'Afrikaans'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Property Transactions', 'Commercial Leasing', 'Zoning', 'Development'],
    },
    {
      name: 'James Mthembu',
      title: 'Associate Attorney',
      specialty: 'Criminal Defense',
      image: '/api/placeholder/400/400',
      bio: 'James is dedicated to protecting the rights of the accused. His courtroom presence and thorough preparation have led to numerous acquittals.',
      education: [
        'LLB, University of KwaZulu-Natal',
        'Criminal Procedure Certificate',
      ],
      experience: '8+ Years',
      rating: 4.8,
      cases: '300+ Cases',
      languages: ['English', 'Zulu', 'Sotho'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Criminal Defense', 'Bail Applications', 'Appeals', 'Legal Advice'],
    },
    {
      name: 'Emily van der Merwe',
      title: 'Associate Attorney',
      specialty: 'Immigration Law',
      image: '/api/placeholder/400/400',
      bio: 'Emily helps individuals and families navigate complex immigration processes. She has helped hundreds obtain legal status in Zimbabwe.',
      education: [
        'LLB, University of Johannesburg',
        'Immigration Law Specialist',
      ],
      experience: '7+ Years',
      rating: 4.9,
      cases: '500+ Cases',
      languages: ['English', 'Afrikaans', 'German'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Work Permits', 'Residency', 'Citizenship', 'Deportation Defense'],
    },
    {
      name: 'David Kim',
      title: 'Associate Attorney',
      specialty: 'Corporate Law',
      image: '/api/placeholder/400/400',
      bio: 'David provides comprehensive corporate legal services to businesses. His expertise in contract law makes him invaluable to our corporate clients.',
      education: [
        'LLB, University of Cape Town',
        'Commercial Law Certificate',
      ],
      experience: '6+ Years',
      rating: 4.6,
      cases: '250+ Cases',
      languages: ['English', 'Korean'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Contracts', 'Corporate Compliance', 'Employment Law', 'Regulatory Affairs'],
    },
    {
      name: 'Maria Rodriguez',
      title: 'Junior Associate',
      specialty: 'Family Law',
      image: '/api/placeholder/400/400',
      bio: 'Maria brings fresh perspectives to family law cases. She is passionate about helping families find amicable resolutions.',
      education: [
        'LLB, University of the Western Cape',
        'Psychology Minor',
      ],
      experience: '3+ Years',
      rating: 4.7,
      cases: '100+ Cases',
      languages: ['English', 'Spanish', 'Portuguese'],
      social: { linkedin: '#', twitter: '#', email: '#' },
      specializations: ['Maintenance', 'Custody', 'Mediation', 'Domestic Violence'],
    },
  ];

  const supportStaff = [
    { name: 'Linda Williams', role: 'Office Manager', department: 'Administration' },
    { name: 'Peter Botha', role: 'Legal Secretary', department: 'Litigation' },
    { name: 'Amy Naidoo', role: 'Paralegal', department: 'Corporate' },
    { name: 'John Smith', role: 'Research Assistant', department: 'Research' },
  ];

  const stats = [
    { value: '50+', label: 'Team Members' },
    { value: '25+', label: 'Years Experience' },
    { value: '2000+', label: 'Cases Handled' },
    { value: '98%', label: 'Client Satisfaction' },
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
            Our Team
          </motion.span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Meet Our Attorneys
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced attorneys is dedicated to providing exceptional legal services 
            with integrity, professionalism, and compassion.
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

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent-dark rounded-full text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              Founding Partners
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
              The visionaries behind Ranaka Legal Aid Trusts success and commitment to justice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {attorneys.slice(0, 3).map((attorney, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-72 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Scale className="text-white/20" size={80} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={attorney.social.linkedin}
                      className="p-3 bg-white rounded-full text-primary hover:bg-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={attorney.social.twitter}
                      className="p-3 bg-white rounded-full text-primary hover:bg-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a
                      href={attorney.social.email}
                      className="p-3 bg-white rounded-full text-primary hover:bg-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary-dark group-hover:text-accent transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{attorney.title}</p>
                  <p className="text-text-light text-sm mb-4">{attorney.specialty}</p>
                  
                  {/* Quick Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="text-accent" size={14} fill="currentColor" />
                      <span className="font-semibold">{attorney.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-text-light">
                      <Briefcase size={14} />
                      <span>{attorney.experience}</span>
                    </div>
                  </div>

                  <p className="text-text-medium text-sm line-clamp-2">{attorney.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Attorneys */}
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
              Our Attorneys
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              Full Legal Team
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
              Meet our dedicated team of attorneys ready to handle your legal needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attorneys.map((attorney, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Scale className="text-white/30" size={48} />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-primary-dark group-hover:text-accent transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-1">{attorney.title}</p>
                  <p className="text-text-light text-xs mb-3">{attorney.specialty}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {attorney.languages.map((lang, langIndex) => (
                      <span key={langIndex} className="px-2 py-0.5 bg-bg-light text-text-medium text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-text-light">
                    <span className="flex items-center gap-1">
                      <Star className="text-accent" size={12} fill="currentColor" />
                      {attorney.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={12} />
                      {attorney.cases}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent-dark rounded-full text-sm font-medium mb-4">
              Support Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              Our Support Staff
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
              The dedicated professionals who keep our firm running smoothly.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportStaff.map((staff, index) => (
              <motion.div
                key={index}
                className="bg-bg-light rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl">
                    {staff.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-primary-dark">{staff.name}</h3>
                <p className="text-accent text-sm font-medium">{staff.role}</p>
                <p className="text-text-light text-xs mt-1">{staff.department}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We are always looking for talented attorneys and legal professionals to join our growing firm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-accent text-primary-dark font-semibold rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Careers
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact HR
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;

