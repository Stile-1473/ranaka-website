import Section from '../ui/Section';
import Card from '../ui/Card';

/**
 * About Us Page - Mission, vision, values, background, and impact
 */
export default function AboutUs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1E6F5C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ranaka Legal Aid Trust</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Bridging the gap between justice and those who need it most
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="p-8 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#E6F5F2' }}
            >
              <svg className="w-8 h-8" style={{ color: '#1E6F5C' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V7z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, professional, and compassionate legal services to low-income and vulnerable members of our community, ensuring access to justice for all regardless of financial circumstances.
            </p>
          </Card>

          {/* Vision */}
          <Card className="p-8 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#FFF8E6' }}
            >
              <svg className="w-8 h-8" style={{ color: '#C9A227' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM4 10a1 1 0 01-1-1V8a1 1 0 112 0v1a1 1 0 01-1 1zM5.757 5.757a1 1 0 000-1.414L5.05 3.636a1 1 0 10-1.414 1.414l.707.707z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A just society where every individual, regardless of economic status, has equal access to legal protection, fair treatment, and the opportunity to defend their rights before the law.
            </p>
          </Card>

          {/* Values */}
          <Card className="p-8 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#E6F5F2' }}
            >
              <svg className="w-8 h-8" style={{ color: '#1E6F5C' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.002v2.817a2.763 2.763 0 01-.267 1.155A2.766 2.766 0 0015 13.6a2.766 2.766 0 01-2.4 1.309 2.763 2.763 0 01-.267-.009.763.763 0 00-.267 1.508c.564.023 1.131.351 1.534.756a2.767 2.767 0 01.267 3.976 2.767 2.767 0 01-3.976-.267 2.763 2.763 0 01-.009-.267 2.766 2.766 0 01-1.309 2.4 2.766 2.766 0 01-3.976-2.4 2.763 2.763 0 01.009-.267 2.766 2.766 0 01-2.4-1.309 2.767 2.767 0 01.267-3.976 2.763 2.763 0 01.267-.009A2.766 2.766 0 015 13.6a2.766 2.766 0 01-2.4-1.309 2.763 2.763 0 01-.267-1.155V8.457a3.066 3.066 0 012.812-3.002z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Justice, Integrity, Compassion, Excellence, and Accountability. We are committed to upholding the highest ethical standards while serving our community with dedication and respect.
            </p>
          </Card>
        </div>

        {/* Values Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Justice', 
                desc: 'We believe in the rule of law and equal protection for all, regardless of socio-economic status.' 
              },
              { 
                title: 'Integrity', 
                desc: 'We maintain the highest professional standards and ethical practices in all our dealings.' 
              },
              { 
                title: 'Compassion', 
                desc: 'We understand the difficulties faced by our clients and approach each case with empathy and care.' 
              },
              { 
                title: 'Excellence', 
                desc: 'We pursue outstanding legal representation and continuously improve our services.' 
              },
              { 
                title: 'Accountability', 
                desc: 'We are transparent about our work and responsible to our clients and the community.' 
              },
              { 
                title: 'Community Focus', 
                desc: 'We are deeply rooted in our community and committed to its development and empowerment.' 
              },
            ].map((value, idx) => (
              <div key={idx} className="flex gap-4">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#E6F5F2' }}
                >
                  <span className="text-xl font-bold" style={{ color: '#1E6F5C' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Background & History */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Background</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Ranaka Legal Aid Trust was founded with a clear mission: to bridge the gap between the legal system and those who cannot afford private legal counsel. 
              Over the past 15 years, we have grown from a small initiative to a recognized legal service provider, serving thousands of individuals and families across our region.
            </p>
            <p>
              Our establishment was driven by the recognition that access to justice is a fundamental right, not a privilege reserved for the wealthy. 
              We have witnessed firsthand how lack of legal representation can devastate individuals, families, and entire communities. 
              This inspired us to create an institution dedicated to reversing this injustice.
            </p>
            <p>
              Today, Ranaka Legal Aid Trust operates with a team of dedicated attorneys, paralegals, and support staff committed to providing world-class legal services 
              to our most vulnerable populations. Our work spans multiple practice areas including family law, criminal defense, labor disputes, human rights advocacy, and more.
            </p>
            <p>
              We maintain partnerships with law firms, universities, and international organizations to expand our reach and impact. 
              Our holistic approach goes beyond legal representation to include legal education, community awareness, and systemic advocacy for legal reform.
            </p>
          </div>
        </div>
      </Section>

      {/* Legal Compliance */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Legal Compliance & Registration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Organization Status</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span><strong>Type:</strong> Registered Non-Profit Organization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span><strong>Registration Number:</strong> NGO-2008-12345</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span><strong>Tax Status:</strong> Non-profit, tax-exempt status holder</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span><strong>Established:</strong> 2008</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Standards</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span>All attorneys licensed by the Bar Association</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span>Professional liability insurance maintained</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span>Annual audits and compliance reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 font-bold mt-1">●</span>
                <span>GDPR and data protection compliant</span>
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Community Impact */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: '2000+', label: 'Cases Resolved' },
            { number: '15+', label: 'Years of Service' },
            { number: '500+', label: 'Annual Clients' },
            { number: '95%', label: 'Satisfaction Rate' },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6 text-center hover:false">
              <div className="text-3xl font-bold mb-2" style={{ color: '#1E6F5C' }}>
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What We've Achieved</h3>
          <div className="space-y-4">
            {[
              'Provided pro bono legal services to over 2,000 individuals and families',
              'Successfully defended victims of gender-based violence with 100% protection orders granted',
              'Recovered over $5 million in damages and settlements for our clients',
              'Trained over 500 community members in legal literacy and rights awareness',
              'Established law clinic partnerships with 3 universities for case work and internships',
              'Advocated for legislative reforms resulting in 2 major legal amendments',
            ].map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-200">
                <div className="flex-shrink-0 mt-1">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full" style={{ backgroundColor: '#C9A227', color: 'white' }}>
                    ✓
                  </span>
                </div>
                <p className="text-gray-600">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-2xl mx-auto bg-gradient-to-r p-1" style={{ backgroundImage: `linear-gradient(135deg, #1E6F5C, #C9A227)` }}>
          <Card className="p-8">
            <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">
              "Without Ranaka Legal Aid Trust, I would have lost custody of my children. The team not only provided excellent legal representation 
              but showed genuine care for my family's wellbeing. They fought for justice when I had no one else to turn to."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Maria Santos</p>
              <p className="text-sm text-gray-500">Former Client, Family Law Case</p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
