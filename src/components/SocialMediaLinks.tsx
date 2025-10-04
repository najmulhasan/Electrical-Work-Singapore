import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Phone, 
  Mail,
  MapPin,
  Star
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/powertech-electrical-sg',
    color: 'bg-blue-600 hover:bg-blue-700',
    description: 'Follow us for electrical tips and updates'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/powertech_electrical_sg',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    description: 'See our electrical work in action'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/powertech-electrical-singapore',
    color: 'bg-blue-700 hover:bg-blue-800',
    description: 'Professional electrical services'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: 'https://wa.me/6583702423',
    color: 'bg-green-500 hover:bg-green-600',
    description: 'Chat with us directly'
  }
];

const contactMethods = [
  {
    icon: Phone,
    text: '+6586439469',
    link: 'tel:+6586439469',
    description: 'Call us now'
  },
  {
    icon: Mail,
    text: 'askengineeringpteltd@gmail.com',
    link: 'mailto:askengineeringpteltd@gmail.com',
    description: 'Send us an email'
  },
  {
    icon: MapPin,
    text: 'Singapore Wide',
    link: '#',
    description: 'We serve all of Singapore'
  }
];

export default function SocialMediaLinks() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Connect With PowerTech Electrical
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow us on social media for electrical tips, project showcases, and special offers. 
            Get in touch through your preferred channel.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <IconComponent className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">{social.name}</h3>
                <p className="text-sm opacity-90">{social.description}</p>
              </a>
            );
          })}
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{method.text}</h3>
                <p className="text-gray-600">{method.description}</p>
              </a>
            );
          })}
        </div>

        {/* Customer Reviews */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">4.9/5</span>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Rated 4.9/5 by 200+ satisfied customers across Singapore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/search?q=PowerTech+Electrical+Singapore+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Read Google Reviews
            </a>
            <a
              href="https://www.facebook.com/powertech-electrical-sg/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Read Facebook Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
