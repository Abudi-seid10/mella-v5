import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-peach/20 to-soft-blue/20 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-peach to-soft-blue"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-peach/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-soft-blue/30 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-peach mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-soft-blue flex-shrink-0 mt-0.5" />
                <span>123 Healing Street, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-teal-blue flex-shrink-0" />
                <span>+251 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-teal-blue flex-shrink-0" />
                <span>info@mellacounseling.com.et</span>
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
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-blue border border-rose-red/20"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-rose-red to-teal-blue text-white px-4 py-2 rounded-r-md transition-all duration-300 hover:shadow-md hover:opacity-90"
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

        <div className="border-t border-gradient-to-r from-rose-red/20 to-teal-blue/20 mt-8 pt-8 text-center relative">
          <p className="bg-gradient-to-r from-rose-red to-teal-blue bg-clip-text text-transparent inline-block font-medium">&copy; {new Date().getFullYear()} Mella Counseling Center</p>
          <p className="text-sm text-soft-blue">All rights reserved. Mella Counseling Center is a registered and licensed mental health center in Ethiopia.</p> 
          <p className="text-sm text-soft-blue">Designed by <a href="https://motech.et/" className="text-soft-blue hover:underline">MoTech Solutions.</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;