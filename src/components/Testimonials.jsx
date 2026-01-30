import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'James Mthembu',
      company: 'Mthembu Enterprises',
      rating: 5,
      text: 'Ranaka Legal Aid Trust provided exceptional service during our company merger. Their attention to detail and professional approach made the entire process smooth and successful.',
      case: 'Corporate Merger',
    },
    {
      name: 'Emily van der Merwe',
      rating: 5,
      text: 'During a difficult divorce, Nomsa Ranaka was my rock. She handled everything with such compassion and professionalism. I cannot thank her enough for fighting for my rights.',
      case: 'Family Law',
    },
    {
      name: 'David Chen',
      company: 'Chen Properties',
      rating: 5,
      text: 'The team at Ranaka Legal Aid Trust helped me navigate complex real estate transactions. Their expertise and dedication are unmatched in the industry.',
      case: 'Real Estate',
    },
    {
      name: 'Maria Rodriguez',
      rating: 5,
      text: 'After facing deportation threats, the immigration team at Ranaka Legal Aid Trust fought tirelessly and won my case. They gave me my life back.',
      case: 'Immigration',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Testimonials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience with Ranaka Legal Aid Trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-bg-light rounded-2xl p-8 relative hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-6 right-6">
                <Quote className="text-accent/20" size={40} />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + starIndex * 0.1 }}
                  >
                    <Star className="text-accent fill-current" size={20} />
                  </motion.div>
                ))}
              </div>

              <p className="text-text-medium leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-dark">{testimonial.name}</h4>
                  <p className="text-text-light text-sm">
                    {testimonial.company && `${testimonial.company} • `}
                    {testimonial.case}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-serif font-bold text-white mb-2">
              Trusted by Businesses and Individuals Alike
            </h3>
            <p className="text-white/70">
              Our commitment to excellence has earned us recognition across industries
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16">
            {['5-Star Rating', '500+ Reviews', '98% Success Rate', '24/7 Support'].map((badge, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-2">
                  <Star className="text-accent" size={24} fill="currentColor" />
                </div>
                <p className="text-white font-semibold">{badge}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

