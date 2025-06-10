'use client'
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseMella from '@/components/WhyChooseMella';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection />
      <WhyChooseMella />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
