import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Home, 
  Building, 
  Factory, 
  Wrench, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electrical Services Singapore | Residential, Commercial & Industrial',
  description: 'Comprehensive electrical services in Singapore. Residential, commercial, and industrial electrical solutions. Licensed electricians for installation, maintenance, and emergency repairs.',
  keywords: ['electrical services singapore', 'residential electrical', 'commercial electrical', 'industrial electrical', 'electrical installation', 'electrical maintenance'],
};

const services = [
  {
    id: 'residential',
    title: 'Residential Electrical Services',
    icon: Home,
    description: 'Complete home electrical solutions for your family&apos;s safety and comfort.',
    features: [
      'Electrical panel upgrades and installations',
      'Outlet and switch installations',
      'Lighting design and installation',
      'Ceiling fan installations',
      'GFCI outlet installations',
      'Electrical troubleshooting and repairs',
      'Home automation systems',
      'EV charging station installation'
    ],
    color: 'blue'
  },
  {
    id: 'commercial',
    title: 'Commercial Electrical Services',
    icon: Building,
    description: 'Professional electrical services for offices, retail spaces, and commercial buildings.',
    features: [
      'Office electrical systems',
      'Retail space electrical setup',
      'LED lighting retrofits',
      'Power distribution systems',
      'Emergency lighting systems',
      'Data and communication cabling',
      'Security system installations',
      'Energy efficiency upgrades'
    ],
    color: 'green'
  },
  {
    id: 'industrial',
    title: 'Industrial Electrical Services',
    icon: Factory,
    description: 'Heavy-duty electrical systems for manufacturing and industrial facilities.',
    features: [
      'High voltage electrical systems',
      'Motor control centers',
      'Power factor correction',
      'Industrial lighting solutions',
      'PLC and automation systems',
      'Electrical safety inspections',
      'Preventive maintenance programs',
      'Emergency power systems'
    ],
    color: 'orange'
  },
  {
    id: 'emergency',
    title: 'Emergency Electrical Services',
    icon: Wrench,
    description: '24/7 emergency electrical services when you need immediate assistance.',
    features: [
      'Power outage restoration',
      'Electrical fire prevention',
      'Circuit breaker repairs',
      'Electrical safety inspections',
      'Fault finding and repairs',
      'Temporary power solutions',
      'Emergency lighting repairs',
      'After-hours service calls'
    ],
    color: 'red'
  }
];

const additionalServices = [
  {
    title: 'Electrical Installation',
    description: 'New electrical installations for homes, offices, and industrial facilities.',
    icon: Zap
  },
  {
    title: 'Electrical Maintenance',
    description: 'Regular maintenance to ensure your electrical systems run safely and efficiently.',
    icon: Shield
  },
  {
    title: 'Electrical Repairs',
    description: 'Fast and reliable repairs for all types of electrical issues.',
    icon: Wrench
  },
  {
    title: '24/7 Emergency Service',
    description: 'Round-the-clock emergency electrical services across Singapore.',
    icon: Clock
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Electrical Services in Singapore
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professional electrical solutions for residential, commercial, and industrial projects. 
              Licensed electricians serving all of Singapore with 24/7 emergency service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+65 83702423"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Call 6586439469
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions tailored to your specific needs
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={!isEven ? 'lg:col-start-2' : ''}>
                      <div className={`w-20 h-20 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                        <IconComponent className={`h-10 w-10 text-${service.color}-600`} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-8">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className={`inline-flex items-center space-x-2 bg-${service.color}-600 hover:bg-${service.color}-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200`}
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                    
                    <div className={!isEven ? 'lg:col-start-1' : ''}>
                      <div className={`bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-2xl p-8 h-96 flex items-center justify-center`}>
                        <div className="text-center">
                          <IconComponent className={`h-24 w-24 text-${service.color}-600 mx-auto mb-4`} />
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h4>
                          <p className="text-gray-600">
                            Professional electrical solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized electrical services to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ask Engineering & Pte Ltd?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re Singapore&apos;s trusted electrical service provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">
                All our electricians are fully licensed and insured, ensuring your peace of mind and compliance with Singapore regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Round-the-clock emergency electrical services when you need them most. We&apos;re always here to help.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Response</h3>
              <p className="text-gray-600">
                Quick response times and efficient service delivery. We understand that electrical issues can&apos;t wait.
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
              Need Electrical Services?
            </h2>
            <p className="text-xl text-blue-100">
              Contact us today for a free estimate. We provide professional electrical services 
              across Singapore with competitive pricing and quality guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+65 83702423"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call 6586439469</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
