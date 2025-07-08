"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import AnimatedSection from './AnimatedSection'; // Assuming you have this component

interface Service {
  id: number;
  title: string;
  description: string;
  imgSrc: string; // Path to SVG or image
}

const services: Service[] = [
  {
    id: 1,
    title: 'Startup Hiring',
    description:
      'We are one of the enablers of Indian startup ecosystems. Our core team has assisted more than 200+ high-end technical startups.',
    imgSrc: '/images/startup.svg',
  },
  {
    id: 2,
    title: 'Manufacturing Hiring',
    description:
      'We at NR Work Force are proud to have an experienced professional team for executive or leadership hiring for Manufacturing firm.',
    imgSrc: '/images/manufacturing.svg',
  },
  {
    id: 3,
    title: 'GCC Hiring',
    description:
      'You will work with a team that has a wide range of recruitment network practices & understands your industry inside out.',
    imgSrc: '/images/gcc.svg',
  },
  {
    id: 4,
    title: 'Contract Staffing',
    description:
      'You will collaborate with a team that possesses deep industry insight and a broad recruitment network tailored to your field.',
    imgSrc: '/images/contract.svg',
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services" // Added ID for navigation from Navbar
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
          Our Services
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Discover the comprehensive range of specialized recruitment services we offer to meet your unique talent needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} direction="up" delay={0.1 * index}>
              <motion.div
                className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl
                           hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                           border border-gray-100"
                whileHover={{ y: -5 }} // Slight lift on hover
              >

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center truncate w-full"> {/* Added truncate and w-full */}
                  {service.title}
                </h3>

                {/* Service Description */}
                <div className="h-24 mb-6 flex items-start justify-center"> {/* Removed overflow-y-auto and adjusted flex for vertical alignment */}
                  <p className="text-base text-gray-600 leading-relaxed text-center line-clamp-4"> {/* Added line-clamp-4 */}
                    {service.description}
                  </p>
                </div>
              
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
