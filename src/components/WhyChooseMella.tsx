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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-rose-red mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Mella
          </motion.h2>
          <motion.p 
            className="text-dark-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At Mella Counseling Center, we're committed to providing exceptional care and support for your mental health journey.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-light-pastel-1/30 p-6 rounded-xl hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-soft">
                  <Icon className="h-6 w-6 text-teal-blue" />
                </div>
                <h3 className="text-xl font-semibold text-rose-red mb-2">{feature.title}</h3>
                <p className="text-dark-gray">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMella;