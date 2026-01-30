import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

const About = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
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

  const values = [
    {
      icon: Heart,
      title: 'Client-Centered',
      description: 'We put our clients\' needs at the heart of everything we do, providing personalized attention to each case.',
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
  ];

  return (
    <section id="about" className="py-20 bg-bg-light">
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
            About Us
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-dark mb-4">
            A Legacy of Legal Excellence
          </h2>
          <p className="text-text-medium max-w-2xl mx-auto leading-relaxed">
For over 25 years, Ranaka Legal Aid Trust has been a beacon of hope and justice for countless individuals and businesses.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent"
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
              To provide exceptional legal services that protect our clients\' interests and rights while upholding the highest standards of professionalism and ethical conduct. We strive to make quality legal representation accessible to all.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary"
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
To be the leading law firm recognized for our commitment to justice, innovation in legal solutions, and unwavering dedication to our clients. We aim to set the standard for legal excellence in Zimbabwe and beyond.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-serif font-bold text-primary-dark text-center mb-10">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
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
        </motion.div>

        {/* Stats Counter */}
        <div id="counter-section" className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, value: counter1, suffix: '+', label: 'Years of Experience' },
              { icon: Award, value: counter2, suffix: '+', label: 'Cases Won' },
              { icon: Users, value: counter3, suffix: '+', label: 'Happy Clients' },
              { icon: Target, value: counter4, suffix: '', label: 'Expert Attorneys' },
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
      </div>
    </section>
  );
};

export default About;

