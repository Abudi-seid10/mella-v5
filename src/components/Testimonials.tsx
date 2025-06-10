"use client";
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The group therapy sessions were incredibly helpful. It was comforting to connect with others who understood what I was going through. Mella fosters a real sense of community.",
    author: "John B.",
    role: "Client",
  },
  {
    quote: "I was hesitant about online therapy, but Mella's platform is seamless and the counselors are just as effective as in-person. It's been a game-changer for my mental health.",
    author: "Lisa P.",
    role: "Client",
  },
  {
    quote: "Mella Counseling Center provided me with practical tools and unwavering support during a very difficult time. I feel more resilient and hopeful than ever before.",
    author: "Michael C.",
    role: "Client",
  },
  {
    quote: "Working with Mella Counseling Center has been transformative. The personalized approach and supportive environment helped me develop coping strategies I use every day.",
    author: "Sarah M.",
    role: "Client",
  },
  {
    quote: "The art therapy sessions at Mella provided me with a new way to express emotions I couldn't put into words. I'm grateful for the creative healing space they've created.",
    author: "David K.",
    role: "Client",
  },
  {
    quote: "The virtual counseling option made it possible for me to receive support despite my busy schedule. The counselors are professional, empathetic, and truly invested in your well-being.",
    author: "Ayana T.",
    role: "Client",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-rose-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from those who have experienced the positive impact of our services.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4">
            <Quote className="w-16 h-16 text-rose-600/10" />
          </div>
          
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center"
          >
            <p className="text-lg md:text-xl text-gray-700 italic mb-6">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center">
              <h4 className="text-rose-700 font-semibold text-lg">{testimonials[currentIndex].author}</h4>
              <p className="text-teal-600">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-rose-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-teal-600" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? 'bg-rose-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-rose-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-teal-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;