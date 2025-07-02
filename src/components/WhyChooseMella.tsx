import { motion } from 'framer-motion';
import { Shield, Heart, Home, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Professional Mental Health Services',
    description: 'Our team consists of licensed and experienced mental health professionals dedicated to providing the highest quality care.',
  },
  {
    icon: Heart,
    title: 'Personalized Care Approach',
    description: 'We believe in tailoring our therapeutic approaches to meet your unique needs and goals for optimal results.',
  },
  {
    icon: Home,
    title: 'Comfortable and Safe Environment',
    description: 'Our center provides a welcoming, confidential space where you can feel secure sharing your thoughts and feelings.',
  },
  {
    icon: Award,
    title: 'Experienced Counselors',
    description: 'With years of specialized training and experience, our counselors are equipped to help you navigate life\'s challenges.',
  },
];

const WhyChooseMella = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-peach/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-soft-blue/30 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-peach mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Mella Counseling Center?
          </motion.h2>
          <motion.p 
            className="text-dark-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We are committed to providing compassionate, personalized care to support your mental health journey.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`bg-white p-6 rounded-xl shadow-soft hover-lift relative overflow-hidden border-l-4 ${index % 2 === 0 ? 'border-peach' : 'border-soft-blue'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className={`w-10 h-10 mb-4 ${index % 2 === 0 ? 'text-peach' : 'text-soft-blue'}`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-dark-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMella;