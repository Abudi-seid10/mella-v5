import { motion } from 'framer-motion';
import { Video, Palette, Users, Heart, UserPlus } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Individual Counseling',
    description: 'One-on-one therapy sessions for personal growth and mental health support tailored to your specific needs.',
    icon: UserPlus,
    href: '/services#individual-counseling',
  },
  {
    title: 'Virtual Counseling',
    description: 'Flexible and secure virtual counseling options to receive professional support from the comfort of your home.',
    icon: Video,
    href: '/services#virtual-counseling',
  },
  {
    title: 'Art Therapy',
    description: 'Creative art sessions that provide a non-verbal, empowering outlet for self-expression, growth, and emotional healing.',
    icon: Palette,
    href: '/services#art-therapy',
  },
  {
    title: 'Couples Counseling',
    description: 'Relationship support and guidance to improve communication, resolve conflicts, and strengthen your connection.',
    icon: Heart,
    href: '/services#couples-counseling',
  },
  {
    title: 'Group Therapy',
    description: 'Community-based healing sessions where you can connect with others facing similar challenges in a supportive environment.',
    icon: Users,
    href: '/services#group-therapy',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach/10 via-white to-soft-blue/10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-peach/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-soft-blue/20 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-rose-red mb-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-dark-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We offer a range of professional mental health services designed to support your unique journey toward emotional well-being and personal growth.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="/services" 
            className="inline-block bg-gradient-to-r from-rose-red to-teal-blue text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;