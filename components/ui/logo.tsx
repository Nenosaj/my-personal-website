'use client';

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className, size = 24 }: LogoProps) => {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="coffee-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan 400 */}
            <stop offset="100%" stopColor="#3b82f6" /> {/* Blue 500 */}
          </linearGradient>
        </defs>

        {/* Animated Steam */}
        <motion.path 
          d="M9 4C9 4 9.5 3 9.5 2M12 4C12 4 12.5 3 12.5 2M15 4C15 4 15.5 3 15.5 2" 
          stroke="url(#coffee-gradient)" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          animate={{ 
            y: [0, -1.5, 0],
            opacity: [0.4, 1, 0.4] 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* The Cup Body - Now White */}
        <path 
          d="M18 8H6C4.89543 8 4 8.89543 4 10V16C4 18.2091 5.79086 20 8 20H14C16.2091 20 18 18.2091 18 16V8Z" 
          fill="white" 
          stroke="url(#coffee-gradient)" 
          strokeWidth="1"
        />

        {/* The Handle */}
        <path 
          d="M18 11C18 11 21 11 21 13.5C21 16 18 16 18 16" 
          stroke="url(#coffee-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};