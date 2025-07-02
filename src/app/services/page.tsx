'use client';
import { motion } from 'framer-motion';
import { UserPlus, Video, Palette, Heart, Users } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

// Define metadata as a constant instead of exporting it
const metadata = {
  title: 'Our Services | Mella Counseling Center',
  description: 'Explore our range of mental health services including individual counseling, virtual therapy, art therapy, couples counseling, and group therapy.',
};

const services = [
  {
    id: 'individual-counseling',
    title: 'Individual Counseling',
    icon: UserPlus, 
    description: 'Our one-on-one therapy sessions provide a safe, confidential space for you to explore your thoughts, feelings, and challenges with a trained professional. We tailor our approach to your unique needs, helping you develop coping strategies, gain insights, and work toward your personal goals.',
    benefits: [
      'Personalized attention and customized treatment plans',
      'Confidential environment to discuss sensitive issues',
      'Development of practical coping skills for everyday challenges',
      'Support for managing anxiety, depression, stress, and other mental health concerns',
      'Guidance through life transitions and personal growth',
    ],
    features: [
      'Flexible scheduling options',
      '50-minute sessions',
      'Evidence-based therapeutic approaches',
      'Regular progress assessments',
    ],
  },
  {
    id: 'virtual-counseling',
    title: 'Virtual Counseling',
    icon: Video,
    description: 'Our virtual counseling services bring professional mental health support directly to you, wherever you are. Using secure video conferencing, you can connect with our experienced counselors from the comfort and privacy of your own space, eliminating barriers like travel time and accessibility concerns.',
    benefits: [
      'Convenience and accessibility from any location',
      'Same quality care as in-person sessions',
      'Reduced travel time and transportation costs',
      'Comfortable, familiar environment for sessions',
      'Flexible scheduling to fit your busy life',
    ],
    features: [
      'Secure, HIPAA-compliant video platform',
      'Technical support available',
      '50-minute sessions',
      'Option to switch between virtual and in-person sessions',
    ],
  },
  {
    id: 'art-therapy',
    title: 'Art Therapy',
    icon: Palette,
    description: 'Art therapy harnesses the creative process to improve mental, emotional, and physical well-being. Through guided artistic expression, you can explore feelings, reconcile emotional conflicts, foster self-awareness, and develop personal insights—all without needing any artistic skill or experience.',
    benefits: [
      'Non-verbal expression of complex emotions and experiences',
      'Reduction of stress and anxiety through creative engagement',
      'Development of healthy coping mechanisms',
      'Increased self-esteem and self-awareness',
      'Processing of trauma in a gentle, indirect manner',
    ],
    features: [
      'All art materials provided',
      'No artistic experience necessary',
      'Individual and group sessions available',
      'Integration with other therapeutic approaches',
    ],
  },
  {
    id: 'couples-counseling',
    title: 'Couples Counseling',
    icon: Heart,
    description: "Our couples counseling services help partners improve communication, resolve conflicts, and strengthen their relationship. Whether you're facing specific challenges, preparing for a new chapter together, or simply wanting to deepen your connection, our trained therapists provide a supportive environment for growth and healing.",
    benefits: [
      'Improved communication skills and patterns',
      'Effective conflict resolution strategies',
      'Deeper understanding of each others needs and perspectives',
      'Rebuilding of trust and intimacy',
      'Tools for maintaining a healthy, fulfilling relationship',
    ],
    features: [
      'Joint sessions with both partners',
      'Occasional individual sessions when beneficial',
      'Evidence-based approaches like Emotionally Focused Therapy (EFT)',
      'Practical exercises to practice at home',
    ],
  },
  {
    id: 'group-therapy',
    title: 'Group Therapy',
    icon: Users,
    description: 'Group therapy brings together individuals facing similar challenges in a supportive, therapist-guided environment. By sharing experiences, offering mutual support, and learning from others, participants gain valuable insights, develop social skills, and realize they\'re not alone in their struggles.',
    benefits: [

      'Connection with others who understand your experiences',
      'Multiple perspectives on shared challenges',
      'Practice for social interactions in a safe environment',
      'Sense of belonging and community',
      'Cost-effective therapeutic option',
    ],
    features: [
      'Small groups of 6-8 participants',
      '90-minute weekly sessions',
      'Topic-specific groups (e.g., grief, anxiety, parenting)',
      'Confidentiality agreements among all participants',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-light-pastel-1/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-rose-red mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-dark-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover our range of professional mental health services designed to support your unique journey toward emotional well-being and personal growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    <motion.div 
                      className="lg:w-1/2"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-light-pastel-2 rounded-full mr-4">
                          <Icon className="h-8 w-8 text-teal-blue" />
                        </div>
                        <h2 className="text-3xl font-bold text-rose-red">{service.title}</h2>
                      </div>
                      
                      <p className="text-dark-gray mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-teal-blue mb-3">Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits?.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-rose-red mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-dark-gray">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-teal-blue mb-3">Service Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="h-5 w-5 text-teal-blue mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-dark-gray">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="lg:w-1/2"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative w-full h-[350px] rounded-2xl overflow-hidden bg-light-pastel-2 flex items-center justify-center">
                        <img
                          src={`/${service.id}.jpg`}
                          alt={`${service.title} service at Mella Counseling Center`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  {index < services.length - 1 && (
                    <div className="w-full h-px bg-gray-200 my-12"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16 bg-light-pastel-1/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl font-bold text-rose-red mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Sets Our Services Apart
            </motion.h2>
            <motion.p 
              className="text-dark-gray"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              At Mella Counseling Center, we're committed to providing exceptional care with these key features across all our services.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-soft hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-light-pastel-2 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-red mb-2">Flexible Scheduling</h3>
              <p className="text-dark-gray">
                We offer convenient appointment times, including evenings and weekends, to accommodate your busy schedule.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-soft hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-light-pastel-2 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-red mb-2">Professional & Experienced</h3>
              <p className="text-dark-gray">
                Our team consists of licensed, experienced mental health professionals with specialized training in various therapeutic approaches.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-soft hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-light-pastel-2 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-red mb-2">Safe Environment</h3>
              <p className="text-dark-gray">
                We provide a comfortable, confidential space where you can feel secure sharing your thoughts and feelings without judgment.
              </p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-soft hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-light-pastel-2 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-teal-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rose-red mb-2">Personalized Treatment</h3>
              <p className="text-dark-gray">
                We tailor our therapeutic approaches to meet your unique needs and goals, ensuring you receive the most effective care for your situation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}