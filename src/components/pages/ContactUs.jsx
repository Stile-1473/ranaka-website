import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { FormInput, FormTextarea } from '../ui/Form';
import Button from '../ui/Button';

/**
 * Contact Us Page - Contact form, office info, hours, map placeholder
 */
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', formData);
      setSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#1E6F5C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90">
            Get in touch with Ranaka Legal Aid Trust
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone */}
          <Card className="p-6 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
              style={{ backgroundColor: '#1E6F5C' }}
            >
              <Phone size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-lg font-bold text-green-700 hover:text-green-900">
              +1 (234) 567-890
            </a>
            <p className="text-sm text-gray-600 mt-2">Monday - Friday: 9 AM - 5 PM</p>
          </Card>

          {/* Email */}
          <Card className="p-6 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
              style={{ backgroundColor: '#C9A227' }}
            >
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:info@ranakalegal.org" className="text-base font-semibold text-green-700 hover:text-green-900 break-all">
              info@ranakalegal.org
            </a>
            <p className="text-sm text-gray-600 mt-2">Response within 24-48 hours</p>
          </Card>

          {/* Address */}
          <Card className="p-6 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
              style={{ backgroundColor: '#1E6F5C' }}
            >
              <MapPin size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
            <p className="text-sm text-gray-600">
              123 Justice Avenue<br />
              Capital City, 10001
            </p>
          </Card>

          {/* Hours */}
          <Card className="p-6 text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
              style={{ backgroundColor: '#C9A227' }}
            >
              <Clock size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-sm text-gray-600">
              Mon - Fri: 9:00 AM - 5:00 PM<br />
              Sat: 10:00 AM - 2:00 PM<br />
              Closed Sundays & Holidays
            </p>
          </Card>
        </div>
      </Section>

      {/* Main Contact Section */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-green-900">Message Sent Successfully</p>
                  <p className="text-sm text-green-800">We'll get back to you as soon as possible.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <FormInput
                  label="Your Name"
                  id="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <FormInput
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <FormInput
                  label="Subject"
                  id="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <FormTextarea
                  label="Message"
                  id="message"
                  placeholder="Please tell us how we can assist you..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>

          {/* Location & Additional Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>

            {/* Map Placeholder */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-md h-80 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <FiMapPin size={48} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600">Map placeholder - Interactive map would go here</p>
                <p className="text-sm text-gray-500 mt-2">123 Justice Avenue, Capital City, 10001</p>
              </div>
            </div>

            {/* Office Information */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Main Office</p>
                  <p className="text-gray-600">123 Justice Avenue, Capital City, 10001</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <a href="tel:+1234567890" className="text-green-700 hover:text-green-900">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <a href="mailto:info@ranakalegal.org" className="text-green-700 hover:text-green-900 break-all">
                    info@ranakalegal.org
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Emergency Line</p>
                  <a href="tel:+1234567899" className="text-green-700 hover:text-green-900">
                    +1 (234) 567-899
                  </a>
                  <p className="text-xs text-gray-600 mt-1">Available 24/7 for emergency cases</p>
                </div>
              </div>
            </Card>

            {/* Walk-In Clinic Info */}
            <Card className="p-6 mt-6 border-l-4" style={{ borderLeftColor: '#C9A227' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Free Legal Clinic</h3>
              <p className="text-sm text-gray-600 mb-3">
                No appointment needed for our free legal clinic. Walk in and speak with a lawyer.
              </p>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Days:</strong> Monday & Thursday</p>
                <p><strong>Time:</strong> 2:00 PM - 5:00 PM</p>
                <p><strong>Location:</strong> Main office (2nd floor)</p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Accessibility Information */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accessibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Wheelchair Access</h3>
            <p className="text-gray-600 text-sm">
              Our offices are fully wheelchair accessible with elevators and accessible parking available.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Interpretation Services</h3>
            <p className="text-gray-600 text-sm">
              Professional interpreters available for multiple languages. Request in advance for best service.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Virtual Consultations</h3>
            <p className="text-gray-600 text-sm">
              Virtual meetings available via video call or phone for clients who cannot visit in person.
            </p>
          </Card>
        </div>
      </Section>

      {/* Transportation Information */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Get Here</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
              style={{ backgroundColor: '#1E6F5C' }}
            >
              🚌
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">By Bus</h3>
            <p className="text-gray-600 text-sm">
              Metro Lines 5, 12, and 23 stop at Justice Avenue Station (2 blocks from our office)
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
              style={{ backgroundColor: '#C9A227' }}
            >
              🚗
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">By Car</h3>
            <p className="text-gray-600 text-sm">
              Free and paid parking available. Located on Justice Avenue between 5th and 6th Street
            </p>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl"
              style={{ backgroundColor: '#1E6F5C' }}
            >
              🚶
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">On Foot</h3>
            <p className="text-gray-600 text-sm">
              15-minute walk from Central Station. Detailed walking directions available upon request
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Questions?</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Emergency cases?</strong> Call our emergency line at +1 (234) 567-899 available 24/7
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>First-time visitor?</strong> Arrive 15 minutes early with valid ID and any relevant documents
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Can't make it to office?</strong> Virtual consultations available - mention this when contacting us
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
