import { motion } from 'framer-motion';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-peach/30 to-soft-blue/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-peach/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-soft-blue/30 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center border border-gradient-to-r from-peach/40 to-soft-blue/40 relative">
          {/* Border gradient effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-peach/30 to-soft-blue/30 opacity-50" style={{ margin: '-2px' }}></div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-peach mb-4"
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
              className="bg-gradient-to-r from-rose-red to-rose-red/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 relative z-10"
            >
              Contact Us Today
            </Link>
            
            <Link 
              href="/services" 
              className="bg-gradient-to-r from-teal-blue/10 to-teal-blue/20 border-2 border-teal-blue text-teal-blue px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-teal-blue/20 hover:to-teal-blue/30 relative z-10"
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