import { Download, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';

/**
 * Resources Page - Legal education, know your rights, FAQs, and downloadables
 */
export default function Resources() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const resources = [
    {
      id: 1,
      category: 'Know Your Rights',
      title: 'Understanding Family Law: Your Rights in Divorce',
      description: 'A comprehensive guide to your legal rights during divorce proceedings, including custody, alimony, and property division.',
      readTime: '8 min read',
    },
    {
      id: 2,
      category: 'Legal Guide',
      title: 'Workplace Rights: What Every Employee Should Know',
      description: 'Learn about your rights as an employee, including protection against discrimination, harassment, and wrongful termination.',
      readTime: '10 min read',
    },
    {
      id: 3,
      category: 'Know Your Rights',
      title: 'Tenant Rights: Housing Security and Eviction Protection',
      description: 'Essential information about tenant rights, eviction procedures, and how to protect yourself from unlawful housing practices.',
      readTime: '7 min read',
    },
    {
      id: 4,
      category: 'Legal Guide',
      title: 'Criminal Procedure: Understanding Your Right to Legal Representation',
      description: 'A guide to your constitutional rights during arrest, interrogation, and criminal proceedings.',
      readTime: '12 min read',
    },
    {
      id: 5,
      category: 'Legal Education',
      title: 'Introduction to Constitutional Law: Fundamental Rights',
      description: 'Learn about the constitutional rights guaranteed to all citizens and how they are protected under law.',
      readTime: '15 min read',
    },
    {
      id: 6,
      category: 'Know Your Rights',
      title: 'Gender-Based Violence: Legal Options and Support Resources',
      description: 'Information about legal remedies, protection orders, and support services for GBV survivors.',
      readTime: '9 min read',
    },
  ];

  const faqs = [
    {
      question: 'How much does it cost to get legal help from Ranaka?',
      answer: 'Our services are provided on a sliding scale based on income. We offer pro bono (free) services to those who qualify based on our means test, typically those at or below 200% of the poverty line. Subsidized rates are available for those earning between 200-400% of the poverty line. Initial consultations are always free.',
    },
    {
      question: 'How long does it take to get a response to my application?',
      answer: 'We aim to review all applications and contact applicants within 5-7 business days. In urgent cases (such as imminent eviction or GBV situations), we prioritize applications and may respond within 24-48 hours. If your case is extremely urgent, please call us directly at +1 (234) 567-890.',
    },
    {
      question: 'Is everything I tell Ranaka kept confidential?',
      answer: 'Absolutely. All communications between you and our attorneys are protected by attorney-client privilege, which means they are strictly confidential and cannot be disclosed without your permission. We take your privacy and security very seriously and comply with all data protection regulations.',
    },
    {
      question: 'What areas of law does Ranaka cover?',
      answer: 'We specialize in six main practice areas: Family Law, Criminal Defense, Labor & Employment Law, Land & Property Disputes, Gender-Based Violence Support, and Human Rights Advocacy. We also handle miscellaneous cases based on merit and available resources.',
    },
    {
      question: 'Can I get representation even if I don\'t speak English well?',
      answer: 'Yes! We work with professional interpreters and can provide legal services in multiple languages. Please mention your language preference when you apply, and we\'ll ensure you have the appropriate support.',
    },
    {
      question: 'What if I can\'t leave my home for appointments?',
      answer: 'We understand that some clients face mobility or safety challenges. We offer virtual consultations via video call or phone, and in certain circumstances, we can arrange home visits. Please discuss your specific needs when you contact us.',
    },
    {
      question: 'Do I need to bring a lawyer to court, or can I represent myself?',
      answer: 'While you have the right to represent yourself, having legal representation significantly improves your chances of a favorable outcome. We strongly recommend legal representation, and our attorneys will be with you every step of the way.',
    },
    {
      question: 'What happens if I\'m not satisfied with my case outcome?',
      answer: 'We discuss all possible outcomes and options during the legal process. If you disagree with the outcome, we can explore appeals or other legal remedies that may be available. We\'ll always keep you informed of your options.',
    },
  ];

  const downloadables = [
    {
      id: 1,
      title: 'Legal Rights Checklist',
      description: 'Essential questions to ask yourself before legal proceedings',
      fileSize: '1.2 MB',
      format: 'PDF',
    },
    {
      id: 2,
      title: 'Divorce Process Guide',
      description: 'Step-by-step guide to the divorce process and what to expect',
      fileSize: '2.5 MB',
      format: 'PDF',
    },
    {
      id: 3,
      title: 'Document Organization Template',
      description: 'Organize your legal documents and evidence effectively',
      fileSize: '0.8 MB',
      format: 'Excel',
    },
    {
      id: 4,
      title: 'Tenant Rights Summary',
      description: 'Quick reference guide to your rights as a tenant',
      fileSize: '1.1 MB',
      format: 'PDF',
    },
    {
      id: 5,
      title: 'Employment Rights Poster',
      description: 'Printable poster of your workplace rights',
      fileSize: '2.0 MB',
      format: 'PDF',
    },
    {
      id: 6,
      title: 'Legal Vocabulary Glossary',
      description: 'Understanding common legal terms and concepts',
      fileSize: '1.5 MB',
      format: 'PDF',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1E6F5C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Resources</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Know your rights, understand legal processes, and access helpful resources
          </p>
        </div>
      </section>

      {/* Educational Articles */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Know Your Rights</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our collection of educational articles covers key legal concepts and your rights in various situations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.id} className="p-6 hover:false">
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-full text-white"
                  style={{ backgroundColor: '#C9A227' }}
                >
                  {resource.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {resource.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{resource.readTime}</span>
                <a 
                  href="#" 
                  className="text-green-700 font-medium hover:text-green-900 transition-colors text-sm"
                >
                  Read →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Downloadable Resources */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Downloadable Resources</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Download practical tools and guides to help you prepare for legal proceedings and understand your rights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadables.map((item) => (
            <Card key={item.id} className="p-6 hover:false">
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: '#E6F5F2' }}
                >
                  <FiDownload size={24} style={{ color: '#1E6F5C' }} />
                </div>
                <div>
                  <span 
                    className="text-xs font-semibold uppercase"
                    style={{ color: '#C9A227' }}
                  >
                    {item.format}
                  </span>
                  <p className="text-xs text-gray-600">{item.fileSize}</p>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button className="w-full px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors">
                Download
              </button>
            </Card>
          ))}
        </div>
      </Section>

      {/* Frequently Asked Questions */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our services, processes, and how we can help.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <FiChevronDown 
                  size={20}
                  style={{
                    color: '#1E6F5C',
                    transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </button>
              {expandedFaq === idx && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Video Tutorials Section */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Video Tutorials</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Watch our informative video tutorials explaining legal concepts and how to prepare for legal proceedings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Your Rights During Police Interrogation', duration: '5:32' },
            { title: 'Understanding Court Procedures', duration: '8:15' },
            { title: 'Protecting Yourself from Workplace Discrimination', duration: '6:45' },
            { title: 'Child Custody and Your Rights as a Parent', duration: '7:20' },
          ].map((video, idx) => (
            <Card key={idx} className="p-6 hover:false">
              <div 
                className="w-full h-48 rounded-lg mb-4 flex items-center justify-center text-white text-4xl"
                style={{ backgroundColor: '#1E6F5C' }}
              >
                ▶
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.duration}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Legal Education Programs */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Community Legal Education</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We conduct free legal education programs in partnership with community organizations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Monthly Legal Literacy Workshops',
              desc: 'Free community workshops on various legal topics. Next workshop: Civil Rights & Constitutional Protections',
              date: 'First Saturday of each month',
              time: '10:00 AM - 12:00 PM',
            },
            {
              title: 'Know Your Rights Clinics',
              desc: 'Free walk-in legal consultations at community centers for specific legal issues',
              date: 'Weekly',
              time: 'Mondays & Thursdays: 2:00 PM - 5:00 PM',
            },
            {
              title: 'Youth Legal Empowerment Program',
              desc: 'Special program for young people aged 18-25 on employment rights and legal literacy',
              date: 'Bi-weekly',
              time: 'Saturdays: 1:00 PM - 3:00 PM',
            },
            {
              title: 'Women\'s Empowerment & Rights',
              desc: 'Dedicated program for women covering family law, workplace rights, and GBV support',
              date: 'Weekly',
              time: 'Wednesdays: 6:00 PM - 7:30 PM',
            },
          ].map((program, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{program.desc}</p>
              <div className="space-y-2 text-sm text-gray-600 pt-4 border-t border-gray-200">
                <p><strong>Schedule:</strong> {program.date}</p>
                <p><strong>Time:</strong> {program.time}</p>
                <p><strong>Cost:</strong> <span className="text-green-700 font-semibold">FREE</span></p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        className="text-white text-center"
        style={{ backgroundColor: '#1E6F5C' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need More Detailed Help?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          These resources are educational tools. For personalized legal advice and representation, contact us.
        </p>
        <a href="/get-help" className="inline-block px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors">
          Apply for Legal Assistance
        </a>
      </Section>
    </main>
  );
}
