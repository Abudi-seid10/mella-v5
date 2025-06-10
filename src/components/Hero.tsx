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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-red mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Find support for your mental well-being
            </motion.h1>
            
            <motion.p 
              className="text-xl text-dark-gray mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Offering therapy, counseling, and personalized care to help you heal and grow at Mella Counseling Center
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/services" 
                className="bg-rose-red hover:bg-rose-red/90 text-white px-6 py-3 rounded-full font-medium transition-colors hover-lift"
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
              {/* Replace with your actual hero image */}
              <div className="absolute inset-0 bg-light-pastel-2 rounded-2xl overflow-hidden flex items-center justify-center">
                <svg 
                  className="w-full h-full text-teal-blue/20" 
                  viewBox="0 0 200 200" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fill="currentColor" 
                    d="M45.3,-51.2C58.3,-40.9,68.5,-25.9,71.8,-9.2C75.2,7.5,71.7,25.9,61.6,38.5C51.5,51.1,34.8,57.9,17.4,62.7C0,67.5,-18.1,70.3,-33.3,64.5C-48.5,58.7,-60.8,44.3,-67.1,27.7C-73.4,11.1,-73.7,-7.8,-67.1,-23.5C-60.5,-39.3,-47,-51.9,-32.6,-61.5C-18.2,-71.1,-3,-77.7,10.7,-75.8C24.4,-73.9,32.3,-61.5,45.3,-51.2Z" 
                    transform="translate(100 100)" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🧠</div>
                    <div className="text-2xl font-medium text-teal-blue">Calming Illustration</div>
                    <div className="text-sm text-dark-gray mt-2">
                      (Replace with your actual hero image)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-rose-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;