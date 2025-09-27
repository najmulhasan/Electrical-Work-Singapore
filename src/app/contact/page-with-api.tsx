'use client';

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+6586439469', '+6586439469 (Emergency)'],
    description: 'Call us for immediate assistance or to schedule a service'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['askengineeringptetld@gmail.com', 'askengineeringptetld@gmail.com'],
    description: 'Send us an email for inquiries or service requests'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Electrical Street', 'Singapore 123456'],
    description: 'Visit our office or we can come to your location'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 8:00 AM - 4:00 PM', 'Sun: Emergency Only'],
    description: '24/7 emergency service available'
  }
];

const serviceAreas = [
  'Central Singapore', 'Orchard', 'Marina Bay', 'Raffles Place',
  'Jurong East', 'Jurong West', 'Tampines', 'Woodlands',
  'Ang Mo Kio', 'Bishan', 'Toa Payoh', 'Serangoon',
  'Punggol', 'Sengkang', 'Hougang', 'Yishun',
  'Sembawang', 'Choa Chu Kang', 'Bukit Panjang', 'Clementi',
  'Queenstown', 'Redhill', 'Tiong Bahru', 'Outram Park'
];

export default function ContactPageWithAPI() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          urgency: 'normal'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact PowerTech Electrical Singapore
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get in touch for professional electrical services. Free quotes, emergency service, 
              and expert electrical solutions across Singapore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+6586439469"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mail to:askengineeringpteltd@gmail.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed quote.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+65 9123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Electrical</option>
                    <option value="commercial">Commercial Electrical</option>
                    <option value="industrial">Industrial Electrical</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="installation">New Installation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your electrical project or issue in detail..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Sorry, there was an error sending your message. Please try again or call us directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re here to help with all your electrical needs. Contact us through any of the methods below.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-600 text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Emergency Contact */}
              <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  Emergency Electrical Service
                </h3>
                <p className="text-red-700 mb-4">
                  For electrical emergencies, call our 24/7 emergency line immediately.
                </p>
                <a
                  href="tel:6586439469"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency:6586439469</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PowerTech Electrical provides professional electrical services across Singapore
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office or we can come to your location
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                123 Electrical Street
              </h3>
              <p className="text-gray-600 mb-4">
                Singapore 123456
              </p>
              <p className="text-sm text-gray-500">
                Interactive map would be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

