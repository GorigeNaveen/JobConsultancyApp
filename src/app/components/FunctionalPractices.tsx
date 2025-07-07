"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Assuming you have this component

interface Practice {
  id: number;
  title: string;
  description: string;
  iconSrc: string; // Path to SVG or image icon
  // You could add a lottieSrc here if you want Lottie animations per practice
}

const practices: Practice[] = [
  {
    id: 1,
    title: 'CEO & CTO',
    description:
      'A leader defines success by integrating complex functional areas with a strong commercial perspective, creating strategic advantage and driving coherence across different expertise within large organizations.',
    iconSrc: '/icons/ceo-cto.svg',
  },
  {
    id: 2,
    title: 'HR',
    description:
      'Employees are valuable assets. HR strategically manages the workforce, and culture, and contributes to growth. We recommend ethical, multi-skilled professionals for company growth.',
    iconSrc: '/icons/hr.svg',
  },
  {
    id: 3,
    title: 'Operations',
    description:
      'The Internet is a cost-effective driver of supply chain integration, transforming processes from procurement to customer management. e-Business merges the Internet with supply chain management.',
    iconSrc: '/icons/operations.svg',
  },
  {
    id: 4,
    title: 'Sales & Marketing',
    description:
      'A marketing plan defines market dimensions, while sales enable business expansion. Digital marketing, branding, and expansion teams align for company growth.',
    iconSrc: '/icons/sales-marketing.svg',
  },
  {
    id: 5,
    title: 'IT',
    description:
      'We are in a technology-driven era. Technology transforms information into business insights, providing strategic direction. We assist in identifying platform team members and tech leaders.',
    iconSrc: '/icons/it.svg',
  },
  {
    id: 6,
    title: 'Finance & Compliances',
    description:
      'Businesses must follow laws and regulations. Legal and Compliance are crucial for avoiding legal issues. We help clients hire corporate legal experts for smooth, compliant operations.',
    iconSrc: '/icons/finance-compliance.svg',
  },
];

const FunctionalPractices: React.FC = () => (
  <section
    id="functional-practices" // Added ID for Navbar navigation
    className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8
               bg-gradient-to-br from-[#f0f7ff] to-[#e0fff4] font-['Inter']"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl w-full text-center"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
        Our Functional Practices
      </h2>
      <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
        Leveraging specialized expertise across key industry verticals to deliver unparalleled talent solutions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {/* Changed to 2 columns for larger screens */}
        {practices.map((practice, index) => (
          <AnimatedSection key={practice.id} direction="up" delay={0.1 * index}>
            <motion.div
              className={`flex flex-col md:flex-row items-center p-8 bg-white rounded-2xl shadow-xl
                          hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 ease-in-out
                          border border-gray-100 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`} // Added padding for alternating layout
              whileHover={{ y: -3 }} // Slight lift on hover
            >
              {/* Icon/Image Section - Alternating position */}
              

              {/* Text Content Section */}
              <div className={`flex-grow text-center md:text-left ${index % 2 === 0 ? '' : 'order-1'}`}>
                <h3 className="text-3xl font-bold text-gray-800 mb-3 truncate w-full"> {/* Larger title */}
                  {practice.title}
                </h3>
                <div className="min-h-[100px] flex items-start"> {/* Fixed height for description for consistent card size */}
                  <p className="text-base text-gray-600 leading-relaxed line-clamp-4"> {/* Truncate after 4 lines */}
                    {practice.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </motion.div>
  </section>
);

export default FunctionalPractices;