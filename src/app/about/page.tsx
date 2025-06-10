"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import CallToAction from '@/components/CallToAction';

const metadata = {
  title: 'About Us | Mella Counseling Center',
  description: 'Learn about Mella Counseling Center, our mission, approach, and commitment to mental health and well-being.',
};

export default function AboutPage() {
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
              About Mella Counseling Center
            </motion.h1>
            <motion.p 
              className="text-xl text-dark-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dedicated to providing professional mental health services with a personalized approach
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-rose-red mb-6">Our Mission</h2>
              <p className="text-dark-gray mb-4">
                At Mella Counseling Center, our mission is to provide accessible, high-quality mental health services that empower individuals to overcome challenges, heal from past wounds, and develop the skills needed for lasting well-being.              
              </p>
              <p className="text-dark-gray">
                We believe that everyone deserves support on their journey toward mental wellness, and we're committed to creating a safe, compassionate environment where healing and growth can flourish.
              </p>
              <p className="text-dark-gray">
                Through personalized care and evidence-based approaches, we aim to make a positive difference in the lives of our clients and contribute to a healthier, more resilient community.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                {/* Replace with your actual mission image */}
                <div className="absolute inset-0 bg-light-pastel-2 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🌱</div>
                    <div className="text-2xl font-medium text-teal-blue">Mission Image</div>
                    <div className="text-sm text-dark-gray mt-2">
                      (Replace with your actual mission image)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-light-pastel-1/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-rose-red mb-6">Our Approach</h2>
              <p className="text-dark-gray mb-4">
                We take a holistic, client-centered approach to mental health care, recognizing that each person's journey is unique. Our therapeutic methods are both professional and approachable, focusing on building a strong foundation for emotional well-being and personal growth.
              </p>
              <p className="text-dark-gray mb-4">
                At Mella, we create a safe, supportive environment where clients feel comfortable expressing themselves and working through challenges. We believe in the importance of the therapeutic relationship and strive to build trust and rapport with every client.
              </p>
              <p className="text-dark-gray">
                Our counselors are trained in various evidence-based techniques and continuously update their skills to provide the most effective care possible. We adapt our approach to meet your specific needs and goals, ensuring a personalized experience that supports your healing journey.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                {/* Replace with your actual approach image */}
                <div className="absolute inset-0 bg-light-pastel-2 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🤝</div>
                    <div className="text-2xl font-medium text-teal-blue">Approach Image</div>
                    <div className="text-sm text-dark-gray mt-2">
                      (Replace with your actual approach image)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl font-bold text-rose-red mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Team
            </motion.h2>
            <motion.p 
              className="text-dark-gray"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meet our dedicated team of mental health professionals committed to supporting your well-being journey.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="bg-white rounded-xl shadow-soft p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-32 h-32 rounded-full bg-light-pastel-2 mx-auto mb-4 flex items-center justify-center">
                {/* Replace with actual team member photo */}
                <span className="text-4xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-rose-red mb-1">Dr. Sarah Johnson</h3>
              <p className="text-teal-blue mb-3">Clinical Director</p>
              <p className="text-dark-gray text-sm">
                With over 15 years of experience, Dr. Johnson specializes in trauma-informed care and cognitive behavioral therapy.              
              </p>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="bg-white rounded-xl shadow-soft p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-32 h-32 rounded-full bg-light-pastel-2 mx-auto mb-4 flex items-center justify-center">
                {/* Replace with actual team member photo */}
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-rose-red mb-1">Michael Abebe</h3>
              <p className="text-teal-blue mb-3">Art Therapist</p>
              <p className="text-dark-gray text-sm">
                Michael brings creativity to healing through specialized training in art therapy and expressive arts.              
              </p>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="bg-white rounded-xl shadow-soft p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-32 h-32 rounded-full bg-light-pastel-2 mx-auto mb-4 flex items-center justify-center">
                {/* Replace with actual team member photo */}
                <span className="text-4xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-rose-red mb-1">Tigist Haile</h3>
              <p className="text-teal-blue mb-3">Relationship Counselor</p>
              <p className="text-dark-gray text-sm">
                Tigist specializes in couples therapy and relationship counseling with a focus on communication and conflict resolution.              
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