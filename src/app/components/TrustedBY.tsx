"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Assuming you have this component

interface Company {
  id: number;
  name: string;
  logoSrc: string; // Path to the company logo
}


const trustedCompanies: Company[] = [
  {
    id: 1,
    name: "Apple",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 2,
    name: "Microsoft",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 3,
    name: "Google",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 4,
    name: "Amazon",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },

];


const TrustedBy: React.FC = () => {
  return (
    <section
      id="trusted-by" // ID for potential Navbar navigation
      className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8
                 bg-gradient-to-br from-[#f0f7ff] to-[#e0fff4] font-['Inter']"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full text-center"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
          Trusted By
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          We are proud to partner with leading organizations across various industries.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {trustedCompanies.map((company, index) => (
            <AnimatedSection key={company.id} direction="up" delay={0.05 * index}>
              <motion.div
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md
                           border border-gray-100 h-28 w-36 sm:h-32 sm:w-40 md:h-36 md:w-48 cursor-pointer"
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={company.logoSrc}
                  alt={`${company.name} Logo`}
                  className="max-h-full max-w-full object-contain"
                  // Fallback for image loading errors
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/120x60/cccccc/333333?text=${company.name.split(' ').map(n => n[0]).join('')}`;
                    e.currentTarget.alt = `${company.name} Logo (Placeholder)`;
                  }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedBy;