import Link from 'next/link';
import { Phone, Mail, MapPin, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-primary-500 rounded-full p-2">
                <CreditCard className="h-6 w-6 text-neutral-900" />
              </div>
              <span className="text-xl font-bold text-white">CIBIL FIXER</span>
            </Link>
            <p className="text-neutral-400 mb-6">
              Your trusted partner for CIBIL score improvement and financial wellness. 
              We help you fix credit issues and achieve better financial freedom.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/919414118156" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="mailto:cibilfixer@gmail.com" className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a href="tel:+919414118156" className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Phone</span>
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Packages', href: '/packages' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Track Status', href: '/track-status' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-400 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                'CIBIL Score Improvement',
                'Credit Report Analysis',
                'Error Resolution',
                'Financial Consultation',
                'Credit Monitoring',
                'Dispute Resolution',
              ].map((service) => (
                <li key={service}>
                  <span className="text-neutral-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-500/20 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-neutral-300 font-medium">CIBIL FIXER</p>
                  <p className="text-neutral-400">VIJAY VALLABH CHOURAHA</p>
                  <p className="text-neutral-400">NAGAUR, RAJASTHAN 341001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-500/20 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-primary-500" />
                </div>
                <p className="text-neutral-400">+91-94141-18156</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-500/20 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-primary-500" />
                </div>
                <p className="text-neutral-400">cibilfixer@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-400">
            © {new Date().getFullYear()} CIBIL FIXER. All rights reserved. | 
            <Link href="/privacy" className="hover:text-primary-500 ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-primary-500 ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 