import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Target, Eye, Heart, Award, Users, BookOpen, 
  Scale, Shield, TrendingUp, CheckCircle
} from 'lucide-react';
import { Calendar } from 'lucide-react';

const AboutPage = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target1 = 25;
            const target2 = 2000;
            const target3 = 1500;
            const target4 = 50;

            const duration = 2000;
            const steps1 = 60;
            const steps2 = 60;
            const steps3 = 60;
            const steps4 = 60;

            let step1 = 0;
            let step2 = 0;
            let step3 = 0;
            let step4 = 0;

            const interval = duration / steps1;

            const timer1 = setInterval(() => {
              step1++;
              setCounter1(Math.floor((target1 / steps1) * step1));
              if (step1 >= steps1) clearInterval(timer1);
            }, interval);

            const timer2 = setInterval(() => {
              step2++;
              setCounter2(Math.floor((target2 / steps2) * step2));
              if (step2 >= steps2) clearInterval(timer2);
            }, interval);

            const timer3 = setInterval(() => {
              step3++;
              setCounter3(Math.floor((target3 / steps3) * step3));
              if (step3 >= steps3) clearInterval(timer3);
            }, interval);

            const timer4 = setInterval(() => {
              step4++;
              setCounter4(Math.floor((target4 / steps4) * step4));
              if (step4 >= steps4) clearInterval(timer4);
            }, interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    const counterSection = document.getElementById('counter-section');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: '1998', title: 'Foundation', description: 'Ranaka Legal Aid Trust was established with a vision to provide accessible legal aid to all.' },
    { year: '2005', title: 'Expansion', description: 'Opened our first branch in Johannesburg and expanded our service offerings.' },
    { year: '2010', title: 'Recognition', description: 'Received the prestigious Legal Excellence Award for our commitment to justice.' },
    { year: '2015', title: 'Growth', description: 'Expanded to include corporate law services and opened additional offices.' },
    { year: '2020', title: 'Innovation', description: 'Launched digital services and expanded our team of specialized attorneys.' },
    { year: '2024', title: 'Today', description: 'Serving thousands of clients annually with a team of 50+ dedicated professionals.' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centered',
      description: 'We put our clients needs at the heart of everything we do, providing personalized attention to each case.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our practice, delivering the highest quality legal services.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on achieving tangible results for our clients, always keeping their best interests in mind.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards and maintain transparency in all our dealings.',
    },
  ];

  const team = [
    {
      name: 'Thabo Ranaka',
      title: 'Managing Partner',
      specialty: 'Corporate Law & M&A',
      experience: '20+ Years',
    },
    {
      name: 'Nomsa Ranaka',
      title: 'Senior Partner',
      specialty: 'Family Law & Estate',
      experience: '18+ Years',
    },
    {
      name: 'Michael Chen',
      title: 'Partner',
      specialty: 'Litigation',
      experience: '15+ Years',
    },
  ];

  const certifications = [
    'ISO 9001 Certified',
    'Law Society of Zimbabwe',
    'Legal Practice Council',
    'Best Law Firm 2023',
  ];

  return (
    <div className="pt-20">
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
            About Us
          </motion.span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            A Legacy of Legal Excellence
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            For over 25 years, Ranaka Legal Aid Trust has been a beacon of hope and justice, 
            providing exceptional legal services to individuals, families, and businesses.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-bg-light rounded-2xl p-8 shadow-lg border-l-4 border-accent"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-dark">Our Mission</h3>
              </div>
              <p className="text-text-medium leading-relaxed">
                To provide exceptional legal services that protect our clients interests and rights 
                while upholding the highest standards of professionalism and ethical conduct. We strive 
                to make quality legal representation accessible to all, regardless of their background 
                or circumstances.
              </p>
            </motion.div>

            <motion.div
              className="bg-bg-light rounded-2xl p-8 shadow-lg border-l-4 border-primary"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-dark">Our Vision</h3>
              </div>
              <p className="text-text-medium leading-relaxed">
                To be the leading law firm recognized for our commitment to justice, innovation in 
                legal solutions, and unwavering dedication to our clients. We aim to set the standard 
                for legal excellence in Zimbabwe and beyond, making justice accessible to everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
              From humble beginnings to becoming one of the most trusted law firms in Zimbabwe.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-primary-light hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-primary-dark mb-2">{item.title}</h3>
                      <p className="text-text-medium text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-accent rounded-full z-10 shadow-lg" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              What We Stand For
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
              Our values guide everything we do and shape how we serve our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-bg-light rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={28} />
                </div>
                <h4 className="text-lg font-semibold text-primary-dark mb-2">{value.title}</h4>
                <p className="text-text-medium text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="counter-section" className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, value: counter1, suffix: '+', label: 'Years of Experience' },
              { icon: Award, value: counter2, suffix: '+', label: 'Cases Won' },
              { icon: Users, value: counter3, suffix: '+', label: 'Happy Clients' },
              { icon: TrendingUp, value: counter4, suffix: '', label: 'Expert Attorneys' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <stat.icon className="text-accent" size={28} />
                  </div>
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Our Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              Meet Our Founding Partners
            </h2>
            <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
              The visionaries behind Ranaka Legal Aid Trusts success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Scale className="text-white/30" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-primary-dark">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-2">{member.title}</p>
                  <p className="text-text-light text-sm mb-3">{member.specialty}</p>
                  <div className="flex items-center gap-2 text-text-medium text-sm">
                    <Calendar size={14} />
                    {member.experience} Experience
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Our Certifications & Affiliations</h3>
              <p className="text-white/70">Recognized and trusted by leading legal bodies</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white font-medium text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-text-medium mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experienced team and let us help you navigate your legal journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-semibold rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
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

export default AboutPage;

