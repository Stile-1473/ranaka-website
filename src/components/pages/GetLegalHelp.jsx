import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import { FormInput, FormTextarea, FormSelect, FormCheckbox } from '../ui/Form';
import Button from '../ui/Button';

/**
 * Get Legal Help Page - Application form with validation
 */
export default function GetLegalHelp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseCategory: '',
    description: '',
    income: '',
    dependents: '',
    agreeConfidentiality: false,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const caseCategories = [
    { value: 'family', label: 'Family Law (Divorce, Custody, etc.)' },
    { value: 'criminal', label: 'Criminal Defense' },
    { value: 'labor', label: 'Labor & Employment' },
    { value: 'property', label: 'Land & Property Disputes' },
    { value: 'gbv', label: 'Gender-Based Violence Support' },
    { value: 'rights', label: 'Human Rights' },
    { value: 'other', label: 'Other' },
  ];

  const incomeRanges = [
    { value: 'under-200', label: 'Under 200% of poverty line' },
    { value: '200-300', label: '200-300% of poverty line' },
    { value: '300-400', label: '300-400% of poverty line' },
    { value: 'above-400', label: 'Above 400% of poverty line' },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{7,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.caseCategory) newErrors.caseCategory = 'Please select a case category';
    if (!formData.description.trim() || formData.description.trim().length < 20) {
      newErrors.description = 'Please provide at least 20 characters describing your case';
    }
    if (!formData.income) newErrors.income = 'Please indicate your income range';
    if (!formData.agreeConfidentiality) {
      newErrors.agreeConfidentiality = 'You must agree to our confidentiality notice';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for this field when user starts typing
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

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          caseCategory: '',
          description: '',
          income: '',
          dependents: '',
          agreeConfidentiality: false,
          agreeTerms: false,
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
      <section className="py-12 md:py-16" style={{ backgroundColor: '#1E6F5C' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Legal Help</h1>
          <p className="text-lg opacity-90">
            Apply for professional legal assistance from Ranaka Legal Aid Trust
          </p>
        </div>
      </section>

      {/* Application Form */}
      <Section>
        <div className="max-w-3xl mx-auto">
          {submitted && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-start gap-4">
              <FiCheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-1">Application Submitted Successfully</h3>
                <p className="text-green-800 text-sm">
                  Thank you for your application. Our team will review your case and contact you within 5-7 business days 
                  at the phone number or email provided. Please keep all your documents ready.
                </p>
              </div>
            </div>
          )}

          {/* Privacy Notice */}
          <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-4">
            <FiAlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Confidentiality & Privacy Notice</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                All information provided in this application is strictly confidential and protected by attorney-client privilege. 
                Your data will be used only for legal assessment and case management purposes. We comply with GDPR and all applicable 
                data protection regulations. Information will never be shared with unauthorized third parties.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h2>

            {/* Personal Information Section */}
            <fieldset className="mb-8">
              <legend className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Personal Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <FormInput
                    label="First Name"
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <FormInput
                    label="Last Name"
                    id="lastName"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Number of Dependents"
                  id="dependents"
                  type="number"
                  value={formData.dependents}
                  onChange={handleChange}
                  min="0"
                />
                <div>
                  <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-2">
                    Income Range <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="income"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  >
                    <option value="">-- Select --</option>
                    {incomeRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                  {errors.income && (
                    <p className="text-red-600 text-sm mt-1">{errors.income}</p>
                  )}
                </div>
              </div>
            </fieldset>

            {/* Case Information Section */}
            <fieldset className="mb-8">
              <legend className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Case Information
              </legend>
              <div>
                <label htmlFor="caseCategory" className="block text-sm font-medium text-gray-700 mb-2">
                  Case Category <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="caseCategory"
                  name="caseCategory"
                  value={formData.caseCategory}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                >
                  <option value="">-- Select a case category --</option>
                  {caseCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {errors.caseCategory && (
                  <p className="text-red-600 text-sm mt-1">{errors.caseCategory}</p>
                )}
              </div>

              <FormTextarea
                label="Case Description"
                id="description"
                placeholder="Please describe your legal issue in detail (minimum 20 characters). Include relevant dates, people involved, and what outcome you're seeking."
                value={formData.description}
                onChange={handleChange}
                rows={6}
                required
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1">{errors.description}</p>
              )}
            </fieldset>

            {/* Agreements Section */}
            <fieldset className="mb-8 pb-8 border-b border-gray-200">
              <legend className="text-lg font-semibold text-gray-900 mb-4">Agreements</legend>
              <div>
                <FormCheckbox
                  id="agreeConfidentiality"
                  label="I understand and agree that all information I provide is confidential and protected by attorney-client privilege"
                  name="agreeConfidentiality"
                  checked={formData.agreeConfidentiality}
                  onChange={handleChange}
                  required
                />
                {errors.agreeConfidentiality && (
                  <p className="text-red-600 text-sm mt-1">{errors.agreeConfidentiality}</p>
                )}
              </div>

              <div>
                <FormCheckbox
                  id="agreeTerms"
                  label="I agree to the terms and conditions and understand that information provided may be verified"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                {errors.agreeTerms && (
                  <p className="text-red-600 text-sm mt-1">{errors.agreeTerms}</p>
                )}
              </div>
            </fieldset>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button
                type="submit"
                size="lg"
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
              <button
                type="reset"
                className="px-8 py-3 text-base font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear Form
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens Next?</h3>
              <ol className="space-y-3 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-700">1.</span>
                  <span>Application review and eligibility assessment</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-700">2.</span>
                  <span>Contact within 5-7 business days</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-700">3.</span>
                  <span>Initial consultation with our legal team</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-700">4.</span>
                  <span>Case assessment and legal strategy</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-green-700">5.</span>
                  <span>Ongoing legal representation and support</span>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Immediate Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                If your case requires urgent attention or you're in immediate danger, please call us directly:
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-600 text-sm"><strong>Office Hours:</strong></p>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm"><strong>Phone:</strong></p>
                  <p className="text-green-700 font-semibold text-lg">+1 (234) 567-890</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm"><strong>Emergency:</strong></p>
                  <p className="text-gray-600 text-sm">Call local emergency services (911) for immediate safety concerns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
