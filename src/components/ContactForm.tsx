'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  contactMethod: 'email' | 'phone';
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_2ktnz1z',
        'template_0akngqo', 
        formRef.current as HTMLFormElement,
        {
          publicKey: 'XCgQfm5W2vWiAo5mX', 
        }
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-soft">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8 bg-white"
        >
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-rose-red mb-2">Thank You!</h3>
          <p className="text-dark-gray mb-6">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-teal-blue hover:bg-teal-blue/90 text-white px-4 py-2 rounded-full transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white">
          <h2 className="text-2xl font-semibold text-rose-red mb-6">Get in Touch</h2>
          
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-dark-gray mb-1">
              Name <span className="text-rose-red">*</span>
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-blue bg-white`}
              {...register('name', { required: 'Name is required' })}
              name="user_name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-dark-gray mb-1">
              Email <span className="text-rose-red">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-blue bg-white`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              name="user_email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-dark-gray mb-1">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-blue bg-white"
              {...register('phone')}
              name="user_phone"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-dark-gray mb-1">
              Service of Interest <span className="text-rose-red">*</span>
            </label>
            <select
              id="service"
              className={`w-full px-4 py-2 rounded-md border ${errors.service ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-blue bg-white`}
              {...register('service', { required: 'Please select a service' })}
              name="user_service"
            >
              <option value="">Select a service</option>
              <option value="individual-counseling">Individual Counseling</option>
              <option value="virtual-counseling">Virtual Counseling</option>
              <option value="art-therapy">Art Therapy</option>
              <option value="couples-counseling">Couples Counseling</option>
              <option value="group-therapy">Group Therapy</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-dark-gray mb-1">
              Message <span className="text-rose-red">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-teal-blue bg-white`}
              {...register('message', { required: 'Message is required' })}
              name="message"
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-dark-gray mb-2">
              Preferred Contact Method <span className="text-rose-red">*</span>
            </label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  id="contact-email"
                  type="radio"
                  value="email"
                  className="h-4 w-4 text-teal-blue focus:ring-teal-blue"
                  {...register('contactMethod', { required: 'Please select a contact method' })}
                  name="contact_method"
                />
                <label htmlFor="contact-email" className="ml-2 text-dark-gray">
                  Email
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="contact-phone"
                  type="radio"
                  value="phone"
                  className="h-4 w-4 text-teal-blue focus:ring-teal-blue"
                  {...register('contactMethod', { required: 'Please select a contact method' })}
                  name="contact_method"
                />
                <label htmlFor="contact-phone" className="ml-2 text-dark-gray">
                  Phone
                </label>
              </div>
            </div>
            {errors.contactMethod && (
              <p className="mt-1 text-sm text-red-600">{errors.contactMethod.message}</p>
            )}
          </div>
          
          <div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-rose-red hover:bg-rose-red/90 text-white px-4 py-3 rounded-full transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;