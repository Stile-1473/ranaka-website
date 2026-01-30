import { Link } from 'react-router-dom';
import { Scale, Shield, Users, Home, HeartHandshake, Gavel } from 'lucide-react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Button from '../ui/Button';

/**
 * Legal Services Page - Detailed service offerings with descriptions and eligibility
 */
export default function LegalServices() {
  const services = [
    {
      id: 'family',
      icon: Scale,
      title: 'Family Law',
      shortDesc: 'Comprehensive family legal support',
      fullDesc: 'Our family law services encompass all aspects of domestic relations including divorce, custody disputes, maintenance, spousal support, property division, adoption, and family mediation.',
      areas: [
        'Divorce and marriage dissolution',
        'Child custody and guardianship',
        'Maintenance and support agreements',
        'Property distribution',
        'Family mediation and reconciliation',
        'Adoption and guardianship proceedings',
      ],
      eligibility: 'Individuals with family disputes seeking legal resolution. Income eligibility applies for pro bono services.',
      process: 'Initial consultation → Assessment → Case strategy → Representation → Resolution',
    },
    {
      id: 'criminal',
      icon: Shield,
      title: 'Criminal Defense',
      shortDesc: 'Expert legal representation in criminal matters',
      fullDesc: 'We provide comprehensive criminal defense services for individuals facing criminal charges at all levels, from investigation through trial and appeal.',
      areas: [
        'Pre-trial investigation and strategy',
        'Bail and release hearings',
        'Plea negotiations',
        'Trial representation',
        'Appeals and post-conviction relief',
        'Victim advocacy and protection',
      ],
      eligibility: 'Any individual facing criminal charges who meets our means test or qualifies for subsidized services.',
      process: 'Immediate legal intervention → Bail application → Case investigation → Trial → Appeal if needed',
    },
    {
      id: 'labor',
      icon: Users,
      title: 'Labor & Employment Law',
      shortDesc: 'Protection against workplace injustices',
      fullDesc: 'Our labor and employment team assists workers with workplace disputes, wrongful termination, discrimination, harassment, and wage-related issues.',
      areas: [
        'Wrongful termination cases',
        'Workplace discrimination (race, gender, disability, age)',
        'Sexual harassment and misconduct',
        'Wage and benefits disputes',
        'Health and safety violations',
        'Union and collective bargaining issues',
      ],
      eligibility: 'Employees experiencing workplace issues or violations. Covers individual workers and worker groups.',
      process: 'Workplace assessment → Documentation review → Negotiation → Mediation → Litigation if necessary',
    },
    {
      id: 'property',
      icon: Home,
      title: 'Land & Property Disputes',
      shortDesc: 'Resolution of property-related conflicts',
      fullDesc: 'We handle land and property disputes including boundary conflicts, unlawful evictions, title disputes, inheritance matters, and real estate transactions.',
      areas: [
        'Boundary and land disputes',
        'Unlawful eviction defense',
        'Tenant and landlord rights',
        'Title verification and registration',
        'Inheritance and succession',
        'Property sale and lease agreements',
      ],
      eligibility: 'Property owners, tenants, or individuals with legitimate property claims.',
      process: 'Title investigation → Negotiation → Mediation → Litigation → Property protection',
    },
    {
      id: 'gbv',
      icon: HeartHandshake,
      title: 'Gender-Based Violence Support',
      shortDesc: 'Specialized trauma-informed legal aid',
      fullDesc: 'We provide comprehensive legal and psychosocial support to survivors of gender-based violence including domestic violence, sexual assault, and harassment.',
      areas: [
        'Protection orders and restraining orders',
        'Domestic violence prosecution',
        'Sexual assault and rape cases',
        'Stalking and harassment claims',
        'Custody protection for GBV survivors',
        'Psychosocial support and counseling referrals',
      ],
      eligibility: 'Survivors of gender-based violence. All services are confidential and trauma-informed.',
      process: 'Safe intake → Immediate protection → Case strategy → Court support → Follow-up care',
    },
    {
      id: 'rights',
      icon: Gavel,
      title: 'Human Rights Advocacy',
      shortDesc: 'Constitutional protection and rights advocacy',
      fullDesc: 'We advocate for fundamental human rights, constitutional protections, and systemic justice. We take on cases with broader social implications.',
      areas: [
        'Constitutional law cases',
        'Civil liberties protection',
        'Discrimination and equality cases',
        'Freedom of expression and assembly',
        'Institutional reform and advocacy',
        'Strategic litigation for social change',
      ],
      eligibility: 'Cases involving violation of fundamental rights or constitutional protections.',
      process: 'Case evaluation → Strategic planning → Community engagement → Legal action → Systemic advocacy',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1E6F5C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legal Services</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive legal support across multiple practice areas
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="space-y-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} id={service.id}>
                <Card className="p-8 md:p-12 overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-20 h-20 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: '#E6F5F2' }}
                      >
                        <Icon size={40} style={{ color: '#1E6F5C' }} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{service.fullDesc}</p>

                      {/* Practice Areas */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Our Services Include:</h4>
                          <ul className="space-y-2">
                            {service.areas.slice(0, 3).map((area, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <span className="text-green-700 font-bold mt-1">•</span>
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">More Services:</h4>
                          <ul className="space-y-2">
                            {service.areas.slice(3).map((area, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <span className="text-green-700 font-bold mt-1">•</span>
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Eligibility & Process */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-gray-200 mb-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Eligibility:</h4>
                          <p className="text-gray-600 text-sm">{service.eligibility}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Our Process:</h4>
                          <p className="text-gray-600 text-sm">{service.process}</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div>
                        <Link to="/get-help">
                          <Button variant="primary">
                            Get Help with {service.title}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Service Process */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Help You</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Initial Consultation', desc: 'Meet with our team to discuss your legal issue and assess your needs.' },
            { step: '2', title: 'Case Evaluation', desc: 'We evaluate the merits of your case and develop a strategy.' },
            { step: '3', title: 'Legal Representation', desc: 'We represent you throughout negotiations, mediation, or trial.' },
            { step: '4', title: 'Resolution & Support', desc: 'We ensure proper resolution and provide follow-up support as needed.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                style={{ backgroundColor: '#1E6F5C' }}
              >
                {item.step}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Eligibility & Fee Information */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eligibility & Fees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Income-Based Eligibility</h3>
            <div className="space-y-4 text-gray-600">
              <p>Our services are designed for those who cannot afford private legal counsel. Eligibility is typically based on:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold mt-1">•</span>
                  <span>Household income below 200% of poverty line</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold mt-1">•</span>
                  <span>Unable to afford private attorney fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold mt-1">•</span>
                  <span>Case has social significance or human rights implications</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Structure</h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900">Pro Bono Services</h4>
                <p className="text-sm">Complete legal representation at no cost for eligible low-income clients</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Subsidized Services</h4>
                <p className="text-sm">Reduced fees based on income level and case complexity</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Sliding Scale</h4>
                <p className="text-sm">Fees adjusted according to ability to pay</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section 
        className="text-white text-center"
        style={{ backgroundColor: '#1E6F5C' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Do You Need Legal Help?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Reach out to us today. Our initial consultation is free and confidential.
        </p>
        <Link to="/get-help">
          <Button size="lg" variant="accent">
            Start Your Application
          </Button>
        </Link>
      </Section>
    </main>
  );
}
