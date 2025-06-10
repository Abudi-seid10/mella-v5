import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-soft hover-lift border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-light-pastel-2 rounded-full w-fit">
          <Icon className="h-6 w-6 text-teal-blue" />
        </div>
        
        <h3 className="text-xl font-semibold text-rose-red mb-2">{title}</h3>
        
        <p className="text-dark-gray mb-4 flex-grow">{description}</p>
        
        <Link 
          href={href}
          className="text-teal-blue hover:text-teal-blue/80 font-medium inline-flex items-center group"
        >
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;