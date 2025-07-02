'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

// Define metadata as a constant instead of exporting it
const metadata = {
  title: 'Contact Us | Mella Counseling Center',
  description: 'Get in touch with Mella Counseling Center. Contact us for appointments, inquiries, or to learn more about our mental health services.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-light-pastel-1/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl font-bold text-rose-red mb-6"
            >
              Contact Us
            </h1>
            <p 
              className="text-xl text-dark-gray"
            >
              We're here to help. Reach out to us with any questions or to schedule an appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-rose-red mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-light-pastel-2 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-teal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rose-red mb-1">Location</h3>
                    <p className="text-dark-gray">
                      123 Healing Street<br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light-pastel-2 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-teal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rose-red mb-1">Phone</h3>
                    <p className="text-dark-gray">
                      +251 91 234 5678<br />
                      +251 91 876 5432
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light-pastel-2 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-teal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rose-red mb-1">Email</h3>
                    <p className="text-dark-gray">
                      info@mellacounseling.com.et<br />
                      appointments@mellacounseling.com.et
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-light-pastel-2 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-teal-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-rose-red mb-1">Hours</h3>
                    <p className="text-dark-gray">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-light-pastel-1/30 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-rose-red mb-3">Response Time</h3>
                <p className="text-dark-gray mb-4">
                  We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly.
                </p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm text-teal-blue">Currently responding within 1 business day</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-light-pastel-1/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-rose-red mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Find Us
            </motion.h2>
            <motion.p 
              className="text-dark-gray max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our center is conveniently located in the heart of Addis Ababa, with easy access to public transportation.
            </motion.p>
          </div>
          
          <motion.div 
            className="w-full h-[400px] rounded-xl overflow-hidden shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13905.122712758852!2d38.78237582733037!3d8.992078287291022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e1!3m2!1sen!2set!4v1751469475443!5m2!1sen!2set"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://maps.app.goo.gl/m9fpgYpzQYMVWRS77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-blue hover:text-teal-blue/80 font-medium"
            >
              Get Directions
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-rose-red mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-dark-gray max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about our services and appointment process.
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div 
              className="bg-light-pastel-1/30 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-rose-red mb-2">How do I schedule an appointment?</h3>
              <p className="text-dark-gray">
                You can schedule an appointment by calling our office, sending an email, or filling out the contact form on this page. Our team will get back to you promptly to confirm your appointment time.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-light-pastel-1/30 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-rose-red mb-2">What should I expect during my first session?</h3>
              <p className="text-dark-gray">
                Your first session will typically involve getting to know each other, discussing your concerns and goals, and beginning to develop a treatment plan. It's an opportunity for you to ask questions and determine if the therapist is a good fit for your needs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-light-pastel-1/30 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-rose-red mb-2">How long are therapy sessions?</h3>
              <p className="text-dark-gray">
                Individual and couples therapy sessions are typically 50 minutes long. Group therapy sessions are usually 90 minutes. The frequency of sessions will be determined based on your specific needs and treatment plan.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-light-pastel-1/30 p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-rose-red mb-2">Is my information kept confidential?</h3>
              <p className="text-dark-gray">
                Yes, confidentiality is a fundamental aspect of our practice. Your personal information and the content of your sessions are kept strictly confidential, with exceptions only as required by law (such as cases involving risk of harm to yourself or others).
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}