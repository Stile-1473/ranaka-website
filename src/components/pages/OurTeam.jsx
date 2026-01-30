import Card from '../ui/Card';
import Section from '../ui/Section';
import { Mail } from 'lucide-react';

/**
 * Our Team Page - Professional lawyer profiles and team information
 */
export default function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: 'Justice Margaret Okafor',
      role: 'Executive Director & Lead Attorney',
      specialty: 'Constitutional Law & Human Rights',
      bio: 'Margaret brings 18 years of legal experience and deep commitment to access to justice. She previously served as Deputy Director at the National Bar Association.',
      education: 'LLB (University of Lagos), LLM (Harvard Law School)',
    },
    {
      id: 2,
      name: 'Dr. Samuel Kipchoge',
      role: 'Senior Attorney',
      specialty: 'Criminal Defense & Appeals',
      bio: 'Samuel is a renowned criminal law expert with a 95% acquittal rate. His work has set important legal precedents in appellate cases.',
      education: 'LLB (University of Nairobi), PhD in Legal Studies (Oxford University)',
    },
    {
      id: 3,
      name: 'Amara Diop',
      role: 'Senior Attorney',
      specialty: 'Family Law & Gender-Based Violence',
      bio: 'Amara specializes in trauma-informed legal representation for GBV survivors. She has helped over 500 families secure protective orders.',
      education: 'LLB (University of Dakar), Specialized Trauma Certification',
    },
    {
      id: 4,
      name: 'Raj Patel',
      role: 'Attorney',
      specialty: 'Labor & Employment Law',
      bio: 'Raj has successfully recovered over $2 million in damages for workers facing discrimination and wrongful termination.',
      education: 'LLB (National Law University), LLM in Labor Law (Columbia University)',
    },
    {
      id: 5,
      name: 'Elena Rodriguez',
      role: 'Attorney',
      specialty: 'Property & Land Law',
      bio: 'Elena specializes in complex property disputes and has extensive experience in land rights advocacy for vulnerable communities.',
      education: 'LLB (Universidad Nacional de Colombia), LLM in Real Estate Law',
    },
    {
      id: 6,
      name: 'Kwame Mensah',
      role: 'Paralegal Lead',
      specialty: 'Case Management & Client Services',
      bio: 'Kwame coordinates our case management and ensures every client receives compassionate, responsive service throughout their legal journey.',
      education: 'Paralegal Certification (Institute of Legal Studies), 8 years legal support experience',
    },
    {
      id: 7,
      name: 'Sophia Chen',
      role: 'Attorney',
      specialty: 'Human Rights & Strategic Litigation',
      bio: 'Sophia leads our human rights advocacy program and has filed cases at multiple international courts on behalf of marginalized communities.',
      education: 'LLB (Peking University), LLM in International Law (Yale University)',
    },
    {
      id: 8,
      name: 'Fatima Al-Rashid',
      role: 'Psychosocial Counselor',
      specialty: 'Trauma-Informed Support & Victim Advocacy',
      bio: 'Fatima provides crucial emotional support to trauma survivors and coordinates our holistic care approach for vulnerable clients.',
      education: 'MA Psychology, Trauma Counseling Certification, 10+ years experience',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1E6F5C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Dedicated Team</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Highly qualified legal professionals committed to justice and access for all
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <Section>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Our team consists of experienced attorneys, paralegals, and support professionals dedicated to providing 
            excellent legal services with compassion and professionalism. We bring diverse expertise and backgrounds to 
            serve our clients better.
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Executive Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {teamMembers.slice(0, 2).map((member) => (
              <Card key={member.id} className="overflow-hidden hover:false">
                <div className="p-8">
                  <div className="mb-4">
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white"
                      style={{ backgroundColor: '#1E6F5C' }}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 text-center mb-1">{member.name}</h4>
                  <p 
                    className="text-center text-sm font-semibold mb-1"
                    style={{ color: '#C9A227' }}
                  >
                    {member.role}
                  </p>
                  <p className="text-center text-sm font-medium text-gray-700 mb-4">{member.specialty}</p>
                  <p className="text-gray-600 text-sm text-center leading-relaxed mb-4">{member.bio}</p>
                  <p className="text-xs text-gray-500 text-center italic mb-4">{member.education}</p>
                  <div className="text-center">
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@ranakalegal.org`}
                      className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-900 transition-colors"
                    >
                      <Mail size={16} />
                      Contact
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Senior Attorneys */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Senior Attorneys</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(2, 5).map((member) => (
              <Card key={member.id} className="p-6 overflow-hidden">
                <div className="text-center mb-4">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white"
                    style={{ backgroundColor: '#1E6F5C' }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 text-center mb-1">{member.name}</h4>
                <p 
                  className="text-center text-xs font-semibold mb-1"
                  style={{ color: '#C9A227' }}
                >
                  {member.role}
                </p>
                <p className="text-center text-sm font-medium text-gray-700 mb-3">{member.specialty}</p>
                <p className="text-gray-600 text-xs text-center leading-relaxed mb-3">{member.bio}</p>
                <p className="text-xs text-gray-500 text-center italic mb-3">{member.education}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Team Members */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Support & Specialized Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(5).map((member) => (
              <Card key={member.id} className="p-6 overflow-hidden">
                <div className="text-center mb-4">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white"
                    style={{ backgroundColor: '#C9A227' }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 text-center mb-1">{member.name}</h4>
                <p 
                  className="text-center text-xs font-semibold mb-1 text-gray-600"
                >
                  {member.role}
                </p>
                <p className="text-center text-sm font-medium text-gray-700 mb-3">{member.specialty}</p>
                <p className="text-gray-600 text-xs text-center leading-relaxed mb-3">{member.bio}</p>
                <p className="text-xs text-gray-500 text-center italic">{member.education}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Our Team */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Our Team Stands Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Combined Experience', desc: '150+ years of legal expertise' },
            { title: 'Diverse Specialties', desc: 'Multi-disciplinary legal services' },
            { title: 'Proven Track Record', desc: '2000+ successful cases resolved' },
            { title: 'Compassionate Approach', desc: 'Trauma-informed, client-centered care' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                style={{ backgroundColor: '#1E6F5C' }}
              >
                {idx + 1}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Professional Development */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Commitment to Excellence</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6 leading-relaxed text-center">
            Our team members are committed to continuous professional development and maintaining the highest ethical standards. 
            We regularly attend:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Legal ethics and professional conduct training',
              'Specialized practice area certifications',
              'Trauma-informed care and victim advocacy workshops',
              'Human rights and international law updates',
              'Technology and case management training',
              'Community engagement and outreach programs',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span 
                  className="flex-shrink-0 font-bold text-lg"
                  style={{ color: '#C9A227' }}
                >
                  ✓
                </span>
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        className="text-white text-center"
        style={{ backgroundColor: '#1E6F5C' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work with Our Team?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Our experienced legal team is ready to help you. Schedule a consultation today.
        </p>
        <a href="/get-help" className="inline-block px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors">
          Start Your Application
        </a>
      </Section>
    </main>
  );
}
