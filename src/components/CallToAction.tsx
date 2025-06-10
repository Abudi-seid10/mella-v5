import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rose-red/10 to-teal-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-rose-red mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Begin Your Healing Journey?
          </motion.h2>
          
          <motion.p 
            className="text-dark-gray mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Taking the first step toward better mental health is a sign of strength. Our team at Mella Counseling Center is here to support you every step of the way.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="bg-rose-red hover:bg-rose-red/90 text-white px-6 py-3 rounded-full font-medium transition-colors hover-lift"
            >
              Contact Us Today
            </Link>
            
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-teal-blue text-teal-blue hover:bg-teal-blue/10 px-6 py-3 rounded-full font-medium transition-colors hover-lift"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;