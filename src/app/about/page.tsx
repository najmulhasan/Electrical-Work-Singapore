import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Users, 
  Shield, 
  CheckCircle, 
  Phone,
  Verified,
  Zap,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Ask Engineering & Pte Ltd | Licensed Electricians',
  description: 'Learn about Ask Engineering & Pte Ltd. Licensed electricians with 15+ years experience providing professional electrical services across Singapore.',
  keywords: ['about powertech electrical', 'licensed electricians singapore', 'electrical company singapore', 'electrical contractor singapore'],
};

const certifications = [
  {
    name: 'Raju Ahmed',
    issuer: 'Energy Market Authority ',
    description: 'Fully licensed electrical workers certified by Singapore&apos;s Energy Market Authority'
  },
  {
    name: 'Sohel Rana',
    issuer: 'International Organization for Standardization',
    description: 'Quality management system certification ensuring consistent service delivery'
  },
  {
    name: 'WSH Safety Certification',
    issuer: 'Workplace Safety and Health Council',
    description: 'Workplace safety and health certification for safe electrical work practices'
  },
  {
    name: 'EMA Electrical Installation License',
    issuer: 'Energy Market Authority',
    description: 'Licensed to perform electrical installations in Singapore'
  }
];

const team = [
  {
    name: 'Raju Ahmed',
    position: 'Managing Director',
    experience: '10+ years',
    specialization: 'Commercial & Industrial Electrical Systems'
  },
  {
    name: 'Sohel Rana',
    position: 'Senior Electrical Engineer',
    experience: '15+ years',
    specialization: 'Residential Electrical & Smart Home Systems'
  },
  {
    name: 'Nazmul Hasan',
    position: 'Lead Electrician',
    experience: '12+ years',
    specialization: 'Emergency Services & Troubleshooting'
  },
  {
    name: 'Limon Hossain',
    position: 'Project Manager',
    experience: '10+ years',
    specialization: 'Large-scale Electrical Projects'
  }
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Licensed Electricians' },
  { number: '24/7', label: 'Emergency Service' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Ask Engineering & Pte Ltd
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Singapore&apos;s trusted electrical service provider with over 15 years of experience 
              delivering safe, reliable, and efficient electrical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Ask Engineering & Pte Ltd has grown from a small family business 
                  to become one of Singapore&apos;s most trusted electrical service providers. Our journey 
                  began with a simple mission: to provide safe, reliable, and professional electrical 
                  services to homes and businesses across Singapore.
                </p>
                <p>
                  Over the years, we&apos;ve built a reputation for excellence through our commitment to 
                  quality workmanship, customer satisfaction, and continuous innovation. Our team of 
                  licensed electricians brings together decades of combined experience in residential, 
                  commercial, and industrial electrical systems.
                </p>
                <p>
                  Today, we&apos;re proud to serve customers across all of Singapore, from residential 
                  homes in the heartlands to large commercial buildings in the Central Business District. 
                  Our 24/7 emergency service ensures that help is always just a phone call away.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Safety First</h4>
                    <p className="text-gray-600">Prioritizing safety in all our electrical work and installations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Service</h4>
                    <p className="text-gray-600">Delivering exceptional electrical solutions with attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Satisfaction</h4>
                    <p className="text-gray-600">Ensuring every customer is completely satisfied with our work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Embracing new technologies and modern electrical solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fully licensed and certified to provide electrical services in Singapore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Verified className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the licensed electricians and engineers who make Ask Engineering & Pte Ltd Singapore&apos;s trusted choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {member.experience} Experience
                </p>
                <p className="text-sm text-gray-500">
                  {member.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety</h3>
              <p className="text-gray-600">
                Safety is our top priority. We follow all safety protocols and regulations 
                to ensure the well-being of our team and customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering high-quality workmanship 
                and exceeding customer expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty and transparency, building lasting relationships 
                based on trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Work with Singapore&apos;s Trusted Electricians?
            </h2>
            <p className="text-xl text-blue-100">
              Contact Ask Engineering & Pte Ltd today for professional electrical services. 
              We&apos;re here to help with all your electrical needs across Singapore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:+65 8643 9469"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call +65 8643 9469</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
