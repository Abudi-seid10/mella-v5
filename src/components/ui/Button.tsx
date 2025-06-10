import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) => {
  // Define styles based on variant
  const variantStyles = {
    primary: 'bg-rose-red hover:bg-rose-red/90 text-white',
    secondary: 'bg-teal-blue hover:bg-teal-blue/90 text-white',
    outline: 'bg-transparent border-2 border-rose-red text-rose-red hover:bg-rose-red/10',
  };

  // Define styles based on size
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  // Combine all styles
  const buttonStyles = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    rounded-full
    font-medium
    transition-all
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-rose-red/50
    ${className}
  `;

  // Animation properties
  const buttonAnimation = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  };

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} passHref>
        <motion.a
          className={buttonStyles}
          {...buttonAnimation}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      className={buttonStyles}
      onClick={onClick}
      {...buttonAnimation}
    >
      {children}
    </motion.button>
  );
};

export default Button;