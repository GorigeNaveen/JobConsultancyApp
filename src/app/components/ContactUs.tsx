'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection'; // Assuming you have this component

export default function ContactUs() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending message...");

    const form = e.currentTarget;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: 1,
      iconSrc: '/icons/phone.svg',
      title: 'Phone Number',
      details: '(+91) 9731163004',
      link: 'tel:+919731163004',
    },
    {
      id: 2,
      iconSrc: '/icons/location.svg',
      title: 'Our Location',
      details: 'NO 1, Khata No 927, Hesarghatta Main Rd, Opp Reliance point, Maheśwari Nagar, Bengaluru, Karnataka 560057',
      link: 'https://www.google.com/maps/search/NO+1,+Khata+No+927,+Hesarghatta+Main+Rd,+Opp+Reliance+point,+Maheśwari+Nagar,+Bengaluru,+Karnataka+560057', // Google Maps link
      buttonText: 'Get Directions',
    },
    {
      id: 3,
      iconSrc: '/icons/message.svg',
      title: 'Send Message',
      details: 'resume@squarerootindia.com\nfor sales@squarerootindia.com',
      link: 'mailto:resume@squarerootindia.com',
    },
  ];

  return (
    <section
      id="contact" // ID for Navbar navigation
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
          Contact Us
        </h2>

        {/* Contact Form */}
        <AnimatedSection direction="up" delay={0.4}>
          <motion.div
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Send Us A Message!</h3>
            <p className="text-lg text-gray-600 mb-8">
              Have a question or need a consultation? Fill out the form below and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="col-span-1 p-4 bg-gray-50 border placeholder:text-black text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="col-span-1 p-4 bg-gray-50 border placeholder:text-black text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="col-span-1 p-4 bg-gray-50 border placeholder:text-black text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number (Optional)"
                className="col-span-1 p-4 bg-gray-50 border placeholder:text-black text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="col-span-1 sm:col-span-2 p-4 placeholder:text-black text-black bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="col-span-1 sm:col-span-2 p-4 placeholder:text-black text-black bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
              />
              <motion.button
                type="submit"
                className="col-span-1 sm:col-span-2 mt-4 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-md
                           hover:bg-blue-700 hover:shadow-lg transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {status && (
                <motion.p
                  className={`col-span-1 sm:col-span-2 text-center mt-4 text-lg ${status.includes("success") ? "text-green-600" : "text-red-600"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </section>
  );
}
