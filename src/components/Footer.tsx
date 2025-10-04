import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.jpg" 
                alt="Ask Engineering & Pte Ltd Logo" 
                width={40}
                height={40}
                className="h-10 w-10 object-contain rounded-lg"
                priority
              />
              <div>
                <h3 className="text-xl font-bold">Ask Engineering Pte Ltd</h3>
                <p className="text-sm text-gray-400">Electrical Singapore</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional electrical services in Singapore. Licensed electricians providing 
              reliable, safe, and efficient electrical solutions for residential, commercial, 
              and industrial projects.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/md.rj.14" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#residential" className="text-gray-300 hover:text-white transition-colors">
                  Residential Electrical
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Electrical
                </Link>
              </li>
              <li>
                <Link href="/services#industrial" className="text-gray-300 hover:text-white transition-colors">
                  Industrial Electrical
                </Link>
              </li>
              <li>
                <Link href="/services#emergency" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Services
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-gray-300 hover:text-white transition-colors">
                  Maintenance & Repairs
                </Link>
              </li>
              <li>
                <Link href="/services#installation" className="text-gray-300 hover:text-white transition-colors">
                  New Installations
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+65 8643 9469</p>
                  <p className="text-gray-400 text-xs">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">askengineeringpteltd@gmail.com</p>
                  <p className="text-gray-400 text-xs">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Electrical Street</p>
                  <p className="text-gray-300">Singapore 123456</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sun: 24/7</p>
                  <p className="text-gray-400 text-xs">Emergency Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 PowerTech Electrical Singapore. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


