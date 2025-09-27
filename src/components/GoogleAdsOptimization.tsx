import { 
  MapPin, 
  Clock, 
  CheckCircle,
  Star,
  Phone
} from 'lucide-react';

const googleAdsKeywords = [
  'electrician singapore',
  'electrical services singapore',
  'emergency electrician singapore',
  'licensed electrician singapore',
  'electrical repair singapore',
  'electrical installation singapore',
  'commercial electrician singapore',
  'residential electrician singapore',
  'electrical contractor singapore',
  'powertech electrical singapore'
];

const serviceAreas = [
  'Central Singapore', 'Orchard', 'Marina Bay', 'Raffles Place',
  'Jurong East', 'Jurong West', 'Tampines', 'Woodlands',
  'Ang Mo Kio', 'Bishan', 'Toa Payoh', 'Serangoon',
  'Punggol', 'Sengkang', 'Hougang', 'Yishun',
  'Sembawang', 'Choa Chu Kang', 'Bukit Panjang', 'Clementi',
  'Queenstown', 'Redhill', 'Tiong Bahru', 'Outram Park'
];

const adExtensions = [
  {
    icon: Phone,
    title: 'Call Now',
    description: '+65 8643 9469',
    action: 'tel:+6586439469'
  },
  {
    icon: MapPin,
    title: 'Service Areas',
    description: 'All Singapore',
    action: '#service-areas'
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Available Now',
    action: 'tel:+6586439469'
  },
  {
    icon: Star,
    title: '4.9/5 Rating',
    description: '200+ Reviews',
    action: '#reviews'
  }
];

export default function GoogleAdsOptimization() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Optimized Headers */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Licensed Electricians in Singapore | PowerTech Electrical
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Professional electrical services across Singapore. Licensed electricians providing 
            residential, commercial, and industrial electrical solutions. 24/7 emergency service available.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+6586439469"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call +6586439469</span>
            </a>
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Get Free Quote
            </a>
          </div>
        </div>

        {/* Google Ads Extensions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {adExtensions.map((extension, index) => {
            const IconComponent = extension.icon;
            return (
              <a
                key={index}
                href={extension.action}
                className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl text-center transition-colors duration-200"
              >
                <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{extension.title}</h3>
                <p className="text-gray-600 text-sm">{extension.description}</p>
              </a>
            );
          })}
        </div>

        {/* Service Areas for Local SEO */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Electrical Services Across Singapore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors duration-200">
                <span className="text-blue-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Keywords for SEO */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose PowerTech Electrical Singapore?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Fully licensed electrical workers certified by EMA Singapore</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">24/7 Emergency Service</h3>
                <p className="text-gray-600 text-sm">Round-the-clock emergency electrical services across Singapore</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">15+ Years Experience</h3>
                <p className="text-gray-600 text-sm">Trusted electrical contractor with proven track record</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Free Estimates</h3>
                <p className="text-gray-600 text-sm">No-obligation quotes for all electrical projects</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h3>
                <p className="text-gray-600 text-sm">Affordable electrical services without compromising quality</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Satisfaction Guarantee</h3>
                <p className="text-gray-600 text-sm">100% satisfaction guarantee on all our electrical work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h2>Electrical Services Singapore</h2>
          <p>
            PowerTech Electrical Singapore provides professional electrical services including 
            electrical installation, electrical repair, electrical maintenance, emergency electrical services, 
            residential electrical services, commercial electrical services, and industrial electrical services 
            across all areas of Singapore including Central Singapore, Orchard, Marina Bay, Jurong, Tampines, 
            Woodlands, Ang Mo Kio, Bishan, Toa Payoh, Serangoon, Punggol, Sengkang, Hougang, Yishun, 
            Sembawang, Choa Chu Kang, Bukit Panjang, Clementi, Queenstown, Redhill, Tiong Bahru, and Outram Park.
          </p>
          <p>
            Our licensed electricians are certified by the Energy Market Authority (EMA) Singapore and provide 
            24/7 emergency electrical services. We specialize in electrical panel upgrades, electrical outlet 
            installation, electrical wiring, electrical troubleshooting, electrical safety inspections, 
            electrical code compliance, and electrical permit applications.
          </p>
        </div>
      </div>
    </div>
  );
}
