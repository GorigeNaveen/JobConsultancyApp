"use client";

import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; 

export default function Footer() {
  // Define navigation items for consistency with Navbar
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Functional Practices', id: 'functional-practices' },
    { name: 'Contact Us', id: 'contact' },
  ];

  // Function to handle smooth scroll to sections
  const handleScrollToSection = (id: string) => {
     if (typeof window !== 'undefined' && typeof document !== "undefined") { 
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

  return (
    <footer
      className="bg-gradient-to-br from-[#e0fff4] to-[#f0f7ff] text-gray-800 px-6 py-16
                 font-['Inter'] rounded-t-2xl shadow-inner border-t border-gray-200" // Added rounded top, shadow, and border
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 mb-12 border-b border-gray-200">
        {/* Logo and Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }} // Animate only once when in view
          className="flex flex-col items-start"
        >
          <h2 className="font-extrabold text-2xl text-gray-900 mb-2">NR WORKFORCE</h2> {/* Updated brand name */}
          <p className="text-base text-gray-600">Connecting Talent with Opportunity</p> {/* Updated slogan */}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="font-bold text-xl text-blue-700 mb-4">Quick Links</h3> {/* Consistent heading style */}
          <ul className="space-y-3 text-base"> {/* Increased spacing and font size */}
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                className="relative text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                           hover:after:w-full" // Underline animation on hover
                whileHover={{ x: 5 }} // Subtle slide on hover
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="md:col-span-2 lg:col-span-2" 
        >
          <h3 className="font-bold text-xl text-blue-700 mb-4">Get In Touch</h3> 
          <ul className="space-y-4 text-base"> 
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 text-xl flex-shrink-0" /> 
              <a
                href="https://www.google.com/maps/search/NO+1,+Khata+No+927,+Hesarghatta+Main+Rd,+Opp+Reliance+point,+Maheśwari+Nagar,+Bengaluru,+Karnataka+560057"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                plot no 98 maruthi nagar , tirmalagiri, <br />
                 Hyderabad, Telangana 500015,
              </a>
            </li>
            <li className="flex items-start">
              <FaEnvelope className="text-blue-600 mt-1 mr-3 text-xl flex-shrink-0" />
              <a href="mailto:nrworkforce@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  nrworkforce@gmail.com 
              </a>
            </li>
            <li className="flex items-start">
              <FaEnvelope className="text-blue-600 mt-1 mr-3 text-xl flex-shrink-0" />
              <a href="mailto:info@nrworkforce.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  info@nrworkforce.com 
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom - Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center text-sm text-gray-600"
      >
        © {new Date().getFullYear()} NR Work Force. All rights reserved.
      </motion.div>
    </footer>
  );
}
