import { Link } from 'react-router-dom';
// icons migrated to lucide-react
import Button from '../ui/Button';
import Card from '../ui/Card';
import Section from '../ui/Section';
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  Scale,
  HelpCircle,
  Phone,
} from 'lucide-react';

/**
 * Home Page - Landing page with hero, services overview, impact sections
 */
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32 relative overflow-hidden" style={{ backgroundColor: '#1E6F5C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Access to Justice for All
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ranaka Legal Aid Trust provides professional, compassionate legal support to individuals and families who need it most. 
              Our mission is to bridge the gap between justice and those who cannot afford it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/get-help">
                <Button size="lg" variant="accent">
                  Get Legal Help
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="secondary">
                  Learn More <ArrowRight className="ml-2 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: '#C9A227' }}
        ></div>
      </section>

      {/* Quick Facts Section */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: '#1E6F5C' }}>2000+</div>
            <p className="text-gray-600 mt-2">Cases Resolved</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: '#C9A227' }}>15+</div>
            <p className="text-gray-600 mt-2">Years of Service</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: '#1E6F5C' }}>95%</div>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Legal Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive legal support across multiple practice areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div 
                className="p-3 rounded-lg mr-4"
                style={{ backgroundColor: '#E6F5F2' }}
              >
                <Scale size={28} color="#1E6F5C" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Family Law</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Divorce, custody, maintenance, and family dispute resolution with compassionate guidance.
            </p>
            <Link to="/services#family" className="text-green-700 font-medium hover:text-green-900 flex items-center">
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </Card>

          {/* Service Card 2 */}
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div 
                className="p-3 rounded-lg mr-4"
                style={{ backgroundColor: '#E6F5F2' }}
              >
                <Shield size={28} color="#1E6F5C" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Criminal Defense</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Expert representation and support throughout the criminal justice process.
            </p>
            <Link to="/services#criminal" className="text-green-700 font-medium hover:text-green-900 flex items-center">
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </Card>

          {/* Service Card 3 */}
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div 
                className="p-3 rounded-lg mr-4"
                style={{ backgroundColor: '#E6F5F2' }}
              >
                <Users size={28} color="#1E6F5C" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Labor & Employment</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Protection against workplace discrimination, unfair dismissal, and labor violations.
            </p>
            <Link to="/services#labor" className="text-green-700 font-medium hover:text-green-900 flex items-center">
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </Card>

          {/* Service Card 4 */}
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div 
                className="p-3 rounded-lg mr-4"
                style={{ backgroundColor: '#E6F5F2' }}
              >
                <Award size={28} color="#1E6F5C" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Property Disputes</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Land and property dispute resolution with expertise in real estate law.
            </p>
            <Link to="/services#property" className="text-green-700 font-medium hover:text-green-900 flex items-center">
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </Card>

          {/* Service Card 5 */}
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div 
                className="p-3 rounded-lg mr-4"
                style={{ backgroundColor: '#E6F5F2' }}
              >
                <HelpCircle size={28} color="#1E6F5C" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">GBV Support</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Dedicated support for gender-based violence victims with trauma-informed care.
            </p>
            <Link to="/services#gbv" className="text-green-700 font-medium hover:text-green-900 flex items-center">
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </Card>

          {/* Service Card 6 */}
          <Card className="p-6">
            <div className="flex items-start mb-4">
              <div 
                className="p-3 rounded-lg mr-4"
                style={{ backgroundColor: '#E6F5F2' }}
              >
                <Scale size={28} color="#1E6F5C" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Human Rights</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Advocacy for fundamental rights and constitutional protection.
            </p>
            <Link to="/services#rights" className="text-green-700 font-medium hover:text-green-900 flex items-center">
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="primary">
              View All Services
            </Button>
          </Link>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section className="bg-gray-50">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ranaka Legal Aid Trust is committed to serving those who face barriers to accessing justice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div 
                className="flex items-center justify-center h-12 w-12 rounded-lg"
                style={{ backgroundColor: '#C9A227', color: 'white' }}
              >
                <FiUsers size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Low-Income Individuals</h3>
              <p className="text-gray-600">
                We provide affordable and pro bono services to those who cannot afford private legal counsel.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div 
                className="flex items-center justify-center h-12 w-12 rounded-lg"
                style={{ backgroundColor: '#C9A227', color: 'white' }}
              >
                <FiShield size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vulnerable Communities</h3>
              <p className="text-gray-600">
                Special focus on marginalized groups including GBV survivors and persons with disabilities.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div 
                className="flex items-center justify-center h-12 w-12 rounded-lg"
                style={{ backgroundColor: '#C9A227', color: 'white' }}
              >
                <FiAward size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Businesses</h3>
              <p className="text-gray-600">
                Supporting small enterprises and cooperatives with business and regulatory advice.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div 
                className="flex items-center justify-center h-12 w-12 rounded-lg"
                style={{ backgroundColor: '#C9A227', color: 'white' }}
              >
                <Scale size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Human Rights Advocates</h3>
              <p className="text-gray-600">
                Legal support for civil society organizations working for social justice and rights protection.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Ranaka Legal Aid Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Expert Lawyers', desc: 'Highly qualified legal professionals with extensive experience' },
            { title: 'Affordable Access', desc: 'Pro bono and subsidized services for those in need' },
            { title: 'Confidential', desc: 'Complete confidentiality and professional attorney-client privilege' },
            { title: 'Community-Focused', desc: 'Deeply committed to serving our community and advancing justice' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        className="text-white text-center"
        style={{ backgroundColor: '#1E6F5C' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Legal Help?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Contact us today to schedule a consultation. Our team is ready to assist you with your legal needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/get-help">
            <Button size="lg" variant="accent">
              Start Application
            </Button>
          </Link>
          <a href="tel:+1234567890">
            <Button size="lg" variant="secondary">
              <FiPhone className="inline mr-2" /> Call Us
            </Button>
          </a>
        </div>
      </Section>
    </main>
  );
}
