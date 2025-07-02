import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-light-pastel-1/30 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-peach mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Find support for your mental well-being
            </motion.h1>
            
            <motion.p 
              className="text-xl text-soft-blue mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We provide compassionate counseling and therapy services tailored to your needs.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/services" 
                className="bg-green-300 hover:bg-white hover:text-black border-2 border-green-300 hover:border-green-300 text-black px-6 py-3 rounded-full font-medium transition-colors hover-lift"
              >
                Get Support Today
              </Link>
              
              <Link 
                href="/about" 
                className="bg-transparent border-2 border-teal-blue text-teal-blue hover:bg-teal-blue/10 px-6 py-3 rounded-full font-medium transition-colors hover-lift"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              {/* Hero image showing a Black female therapist with client */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src="/main.jpg" 
                  alt="Black female therapist in consultation with client" 
                  className="w-full h-full object-cover"
                />
                {/* Note: In production, replace with a properly licensed image stored locally */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements - enhanced with more vibrant colors */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-rose-red/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-teal-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-rose-red/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-teal-blue/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;