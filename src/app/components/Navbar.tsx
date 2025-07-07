"use client";

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact Us', id: 'contact' },
  ];

  // Function to handle smooth scroll (placeholder, actual implementation would involve refs or IDs)
  const handleScrollToSection = (id: string) => {
     if (typeof window !== 'undefined' && typeof document !== "undefined") { 
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu after clicking on a link
  }
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 font-['Inter'] rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20"> {/* Increased height */}
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3"> {/* Increased gap */}
          {/* Assuming /logo4.png exists and is styled appropriately */}
          <img src="/logoWithName.png" alt="NR Work Force Logo" className="h-10 w-auto " /> {/* Slightly larger, rounded logo */}
          <h1 className="font-extrabold text-2xl md:text-3xl text-gray-900 whitespace-nowrap tracking-wide"> {/* Larger, bolder text */}
            {/* NR Work Force */}
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold"> {/* Larger gap, slightly larger font */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300
                         hover:after:w-full"
              onClick={() => handleScrollToSection(item.id)} // Placeholder for scroll to section
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-blue-700 focus:outline-none p-2 rounded-lg hover:bg-blue-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden w-full bg-white shadow-lg border-t border-gray-200"
          >
            <ul className="flex flex-col items-center px-6 py-6 space-y-4 text-lg font-medium"> {/* Increased padding and spacing */}
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-800 hover:text-blue-600 cursor-pointer w-full text-center py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  onClick={() => handleScrollToSection(item.id)} // Placeholder for scroll to section
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
