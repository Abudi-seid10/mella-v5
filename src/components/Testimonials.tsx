"use client";
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image?: string; // Optional image URL
};

const testimonials: Testimonial[] = [
  {
    quote: "The group therapy sessions were incredibly helpful. It was comforting to connect with others who understood what I was going through. Mella fosters a real sense of community.",
    author: "Anonymous",
    role: "Client",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  },
  {
    quote: "I was hesitant about online therapy, but Mella's platform is seamless and the counselors are just as effective as in-person. It's been a game-changer for my mental health.",
    author: "Anonymous",
    role: "Client",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  },
  {
    quote: "Mella Counseling Center provided me with practical tools and unwavering support during a very difficult time. I feel more resilient and hopeful than ever before.",
    author: "Anonymous",
    role: "Client",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  },
  {
    quote: "Working with Mella Counseling Center has been transformative. The personalized approach and supportive environment helped me develop coping strategies I use every day.",
    author: "Anonymous",
    role: "Client",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  },
  {
    quote: "The art therapy sessions at Mella provided me with a new way to express emotions I couldn't put into words. I'm grateful for the creative healing space they've created.",
    author: "Anonymous",
    role: "Client",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  },
  {
    quote: "The virtual counseling option made it possible for me to receive support despite my busy schedule. The counselors are professional, empathetic, and truly invested in your well-being.",
    author: "Anonymous",
    role: "Client",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  },
];

// Note: In production, replace these image URLs with properly licensed images stored locally

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-peach/30 via-white to-soft-blue/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-peach/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-soft-blue/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-peach mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              className="text-dark-gray max-w-2xl mx-auto"
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
              <Quote className="w-16 h-16 text-peach/20" />
            </div>
            
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {testimonials[currentIndex].image && (
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-gradient-to-r from-peach to-soft-blue shadow-lg">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={`${testimonials[currentIndex].author} portrait`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-dark-gray italic mb-6 relative">
                    <span className="absolute -left-2 -top-2 text-peach/30 text-4xl">"</span>
                    {testimonials[currentIndex].quote}
                    <span className="text-peach/30 text-4xl">"</span>
                  </p>
                  <div className="flex flex-col">
                    <h4 className="text-peach font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-soft-blue">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-peach/10 transition-colors border-2 border-peach/30"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-peach" />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex 
                      ? (index % 2 === 0 ? 'bg-peach' : 'bg-soft-blue') 
                      : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-soft-blue/10 transition-colors border-2 border-soft-blue/30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-soft-blue" />
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;