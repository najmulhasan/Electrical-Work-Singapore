import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Clock, 
  CheckCircle,
  Award
} from 'lucide-react';

const performanceFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast Loading',
    description: 'Optimized for speed with Next.js 15 and Turbopack',
    benefit: 'Loads in under 2 seconds'
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Perfect display on all devices and screen sizes',
    benefit: 'Works on all devices'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and SSL encryption',
    benefit: '100% secure'
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description: 'Optimized for Google search and local SEO',
    benefit: 'Better search rankings'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Website available around the clock for your customers',
    benefit: 'Always accessible'
  },
  {
    icon: Award,
    title: 'Modern Design',
    description: 'Professional, modern design that builds trust',
    benefit: 'Professional appearance'
  }
];

const technicalSpecs = [
  'Next.js 15 with App Router',
  'TypeScript for type safety',
  'Tailwind CSS for styling',
  'Lucide React icons',
  'Responsive design',
  'SEO optimized',
  'Fast loading times',
  'Mobile-first approach',
  'Accessibility compliant',
  'Cross-browser compatible'
];

export default function PerformanceOptimization() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            High-Performance Website Built for Success
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our website is built with the latest technology to ensure fast loading, 
            mobile responsiveness, and optimal performance for your electrical business.
          </p>
        </div>

        {/* Performance Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {performanceFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100 mb-3">{feature.description}</p>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {feature.benefit}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-blue-100 text-sm">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">&lt;2s</div>
            <div className="text-blue-100">Load Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-blue-100">Mobile Responsive</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">A+</div>
            <div className="text-blue-100">Security Grade</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-blue-100">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
