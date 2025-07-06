"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Assuming you have this component
import LottiePlayerComponent from './LottiePlayerComponent'; // Reusing LottiePlayerComponent for icons if needed, or just using img

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
              <div className={`flex-shrink-0 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 order-2'}`}>
                <img
                  src={practice.iconSrc}
                  alt={practice.title}
                  className="w-28 h-28 object-contain rounded-full p-5 bg-blue-50 shadow-md" // Larger, more prominent icon
                />
              </div>

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
// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import AnimatedSection from './AnimatedSection'; // Assuming you have this component

// interface Practice {
//   id: number;
//   title: string;
//   description: string;
//   iconSrc: string; // Path to SVG or image icon
// }

// const practices: Practice[] = [
//   {
//     id: 1,
//     title: 'CEO & CTO',
//     description:
//       'A leader defines success by integrating complex functional areas with a strong commercial perspective, creating strategic advantage and driving coherence across different expertise within large organizations.',
//     iconSrc: '/icons/ceo-cto.svg',
//   },
//   {
//     id: 2,
//     title: 'HR',
//     description:
//       'Employees are valuable assets. HR strategically manages the workforce, and culture, and contributes to growth. We recommend ethical, multi-skilled professionals for company growth.',
//     iconSrc: '/icons/hr.svg',
//   },
//   {
//     id: 3,
//     title: 'Operations',
//     description:
//       'The Internet is a cost-effective driver of supply chain integration, transforming processes from procurement to customer management. e-Business merges the Internet with supply chain management.',
//     iconSrc: '/icons/operations.svg',
//   },
//   {
//     id: 4,
//     title: 'Sales & Marketing',
//     description:
//       'A marketing plan defines market dimensions, while sales enable business expansion. Digital marketing, branding, and expansion teams align for company growth.',
//     iconSrc: '/icons/sales-marketing.svg',
//   },
//   {
//     id: 5,
//     title: 'IT',
//     description:
//       'We are in a technology-driven era. Technology transforms information into business insights, providing strategic direction. We assist in identifying platform team members and tech leaders.',
//     iconSrc: '/icons/it.svg',
//   },
//   {
//     id: 6,
//     title: 'Finance & Compliances',
//     description:
//       'Businesses must follow laws and regulations. Legal and Compliance are crucial for avoiding legal issues. We help clients hire corporate legal experts for smooth, compliant operations.',
//     iconSrc: '/icons/finance-compliance.svg',
//   },
// ];

// const FunctionalPractices: React.FC = () => (
//   <section
//     id="functional-practices" // Added ID for Navbar navigation
//     className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8
//                bg-gradient-to-br from-[#f0f7ff] to-[#e0fff4] font-['Inter']"
//   >
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="max-w-7xl w-full text-center"
//     >
//       <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
//         Our Functional Practices
//       </h2>
//       <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
//         Leveraging specialized expertise across key industry verticals to deliver unparalleled talent solutions.
//       </p>

//       {/* New Grid Structure: 1 column on small, 2 on medium, 3 on large screens */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {practices.map((practice, index) => (
//           <AnimatedSection key={practice.id} direction="up" delay={0.1 * index}>
//             <motion.div
//               className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl
//                          border border-gray-100 h-full cursor-pointer" // Added cursor-pointer
//               whileHover={{
//                 y: -10, // More pronounced lift
//                 scale: 1.05, // Slightly larger scale
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // Deeper shadow
//                 transition: { duration: 0.2, ease: "easeOut" } // Smooth transition
//               }}
//               whileTap={{ scale: 0.98 }} // Slight press effect on click/tap
//             >
//               {/* Icon Section */}
//               <motion.div
//                 className="mb-6"
//                 whileHover={{ rotate: 5 }} // Subtle rotation on icon hover
//                 transition={{ duration: 0.2, ease: "easeOut" }}
//               >
//                 <img
//                   src={practice.iconSrc}
//                   alt={practice.title}
//                   className="w-24 h-24 object-contain rounded-full p-4 bg-blue-50 shadow-md" // Consistent icon styling
//                 />
//               </motion.div>

//               {/* Text Content Section */}
//               <div className="flex flex-col items-center text-center flex-grow"> {/* flex-grow to push button to bottom */}
//                 <h3 className="text-2xl font-bold text-gray-800 mb-3 truncate w-full px-2"> {/* Title styling, truncate for single line */}
//                   {practice.title}
//                 </h3>
//                 <div className="min-h-[100px] flex items-start justify-center mb-6"> {/* Fixed height for description, centered text */}
//                   <p className="text-base text-gray-600 leading-relaxed line-clamp-4"> {/* Truncate after 4 lines */}
//                     {practice.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Call to Action (Optional, can be removed if not desired for this section) */}
//               {/* <a
//                 href="#" // Replace with actual link if available
//                 className="mt-auto inline-flex items-center justify-center px-6 py-3
//                            bg-blue-600 text-white font-semibold rounded-full shadow-md
//                            hover:bg-blue-700 hover:shadow-lg transition-all duration-300
//                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
//               >
//                 Learn More
//                 <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </a> */}
//             </motion.div>
//           </AnimatedSection>
//         ))}
//       </div>
//     </motion.div>
//   </section>
// );

// export default FunctionalPractices;
