import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light-pastel-2 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-rose-red mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-teal-blue flex-shrink-0 mt-0.5" />
                <span>123 Healing Street, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-teal-blue flex-shrink-0" />
                <span>+251 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-teal-blue flex-shrink-0" />
                <span>info@mellacounseling.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-teal-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-rose-red mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-blue transition-colors underline-animation">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-blue transition-colors underline-animation">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-blue transition-colors underline-animation">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-blue transition-colors underline-animation">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-blue transition-colors underline-animation">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-rose-red mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for mental health tips and updates.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-blue"
                />
                <button
                  type="submit"
                  className="bg-teal-blue hover:bg-teal-blue/90 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-blue hover:text-rose-red transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-teal-blue hover:text-rose-red transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-teal-blue hover:text-rose-red transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Mella Counseling Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;