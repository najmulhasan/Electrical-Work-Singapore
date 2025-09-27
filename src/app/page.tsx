import Link from 'next/link';
import { 
  Shield, 
  Clock, 
  Award, 
  Phone, 
  CheckCircle, 
  Star,
  ArrowRight,
  Home,
  Factory
} from 'lucide-react';
import SocialMediaLinks from '@/components/SocialMediaLinks';
import GoogleAdsOptimization from '@/components/GoogleAdsOptimization';
import PerformanceOptimization from '@/components/PerformanceOptimization';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Ask Engineering & Pte Ltd -{' '}
                  <span className="text-yellow-400">Electrical Services Singapore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Licensed electricians providing reliable, safe, and efficient electrical 
                  solutions for residential, commercial, and industrial projects across Singapore.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="tel:+6586439469"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-blue-100">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-blue-100">Emergency Service</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-center">Why Choose PowerTech?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Licensed & Insured Electricians</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>24/7 Emergency Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Competitive Pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Free Estimates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions for all your needs across Singapore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential</h3>
              <p className="text-gray-600 mb-6">
                Home electrical installations, repairs, and upgrades for your family&apos;s safety and comfort.
              </p>
              <Link href="/services#residential" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Now</h3>
              <p className="text-gray-600 mb-6">
                +65 8643 9469
              </p>
              <Link href="tel:+6586439469" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +65 8643 9469</span>
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Factory className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industrial</h3>
              <p className="text-gray-600 mb-6">
                Heavy-duty electrical systems for manufacturing and industrial facilities.
              </p>
              <Link href="/services#industrial" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Now</h3>
              <p className="text-gray-600 mb-6">
                +65 8643 9469
              </p>
              <Link href="tel:+6586439469" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call +65 8643 9469</span>
              </Link>
            </div>
        </div>
      </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Ask Engineering Ptd Ltd. ?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We&apos;re Singapore&apos;s trusted electrical service provider with over 15 years 
                  of experience delivering safe, reliable, and efficient electrical solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">
                      All our electricians are fully licensed and insured, ensuring your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">
                      Round-the-clock emergency electrical services when you need them most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">
                      We stand behind our work with comprehensive warranties and satisfaction guarantees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    &ldquo;Excellent service! The electrician was professional, punctual, and fixed our 
                    electrical issues quickly. Highly recommended!&rdquo;
                  </p>
                  <div className="text-sm text-gray-500">- Sarah L., Jurong East</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">5.0</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    &ldquo;PowerTech provided outstanding emergency service at 2 AM. They arrived quickly 
                    and resolved the issue professionally.&rdquo;
                  </p>
                  <div className="text-sm text-gray-500">- Michael T., Orchard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Optimization Section */}
      <GoogleAdsOptimization />

      {/* Social Media Links */}
      <SocialMediaLinks />

      {/* Performance Optimization */}
      <PerformanceOptimization />

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Contact us today for a free estimate on your electrical project. 
              We&apos;re here to help with all your electrical needs in Singapore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <Link
                href="tel:+6586439469"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Call +6586439469
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


