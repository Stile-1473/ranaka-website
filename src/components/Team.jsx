import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Award, Scale } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Thabo Ranaka',
      title: 'Managing Partner',
      specialty: 'Corporate Law & M&A',
      image: '/api/placeholder/300/300',
      bio: 'Over 20 years of experience in corporate law, having handled numerous high-profile mergers and acquisitions.',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
    {
      name: 'Nomsa Ranaka',
      title: 'Senior Partner',
      specialty: 'Family Law & Estate Planning',
      image: '/api/placeholder/300/300',
      bio: 'Known for her compassionate approach to family law matters and comprehensive estate planning solutions.',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
    {
      name: 'Michael Chen',
      title: 'Partner',
      specialty: 'Litigation & Dispute Resolution',
      image: '/api/placeholder/300/300',
      bio: 'A fierce advocate in the courtroom with a proven track record of winning complex litigation cases.',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
    {
      name: 'Sarah Johnson',
      title: 'Associate Attorney',
      specialty: 'Real Estate Law',
      image: '/api/placeholder/300/300',
      bio: 'Specializes in commercial and residential real estate transactions with attention to detail.',
      social: { linkedin: '#', twitter: '#', email: '#' },
    },
  ];

  return (
    <section id="team" className="py-20 bg-bg-light">
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
            Our Team
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
            Meet Our Attorneys
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
            Our team of experienced attorneys is dedicated to providing exceptional legal services with integrity and professionalism.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                {/* Placeholder for member image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <Scale className="text-white/60" size={48} />
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links - Show on Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  {[
                    { icon: Linkedin, href: member.social.linkedin },
                    { icon: Twitter, href: member.social.twitter },
                    { icon: Mail, href: member.social.email },
                  ].map((social, socialIndex) => (
                    <motion.a
                      key={socialIndex}
                      href={social.href}
                      className="p-2 bg-white rounded-full text-primary hover:bg-accent hover:text-primary-dark transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-primary-dark mb-1 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-2">{member.title}</p>
                <p className="text-text-light text-xs mb-3 flex items-center gap-1">
                  <Award size={12} />
                  {member.specialty}
                </p>
                <p className="text-text-medium text-sm leading-relaxed line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Team Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Attorneys
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

