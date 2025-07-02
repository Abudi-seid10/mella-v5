'use client';
// Force client-side only rendering to avoid hydration mismatch

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render the logo on the client side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* {mounted ? (
                <Image 
                  src="/no title logo mella.png" 
                  alt="Mella Logo" 
                  width={40} 
                  height={40} 
                  className="h-10 w-auto" 
                />
              ) : (
                <span className="text-2xl font-bold text-rose-red">Mella</span>
              )}
               */}
               <h1 className="text-2xl font-bold text-rose-red">Mella Counseling</h1>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="underline-animation text-dark-gray hover:text-rose-red transition-colors">
                Home
              </Link>
              <Link href="/about" className="underline-animation text-dark-gray hover:text-rose-red transition-colors">
                About Us
              </Link>
              <Link href="/services" className="underline-animation text-dark-gray hover:text-rose-red transition-colors">
                Services
              </Link>
              <Link href="/contact" className="underline-animation text-dark-gray hover:text-rose-red transition-colors">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="bg-rose-red hover:bg-rose-red/90 text-white px-4 py-2 rounded-full transition-colors"
              >
                Get Support Today
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-gray hover:text-rose-red focus:outline-none"
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.div variants={itemVariants}>
                <Link 
                  href="/" 
                  className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-rose-red"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/about" 
                  className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-rose-red"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/services" 
                  className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-rose-red"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/contact" 
                  className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-rose-red"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link 
                  href="/contact" 
                  className="block px-3 py-2 text-base font-medium bg-rose-red text-white rounded-full text-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Get Support Today
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;