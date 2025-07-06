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
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out to us through any of the following channels or fill out the form below.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {contactInfo.map((info, index) => (
            <AnimatedSection key={info.id} direction="up" delay={0.1 * index}>
              <motion.div
                className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl
                           border border-gray-100 h-full cursor-pointer"
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-6">
                  <img
                    src={info.iconSrc}
                    alt={info.title}
                    className="w-20 h-20 object-contain rounded-full p-4 bg-blue-50 shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {info.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed text-center flex-grow mb-6 whitespace-pre-line">
                  {info.details}
                </p>
                {info.link && (
                  <a
                    href={info.link}
                    target={info.title === 'Our Location' ? '_blank' : '_self'} // Open location in new tab
                    rel={info.title === 'Our Location' ? 'noopener noreferrer' : ''}
                    className="mt-auto inline-flex items-center justify-center px-6 py-3
                               bg-blue-600 text-white font-semibold rounded-full shadow-md
                               hover:bg-blue-700 hover:shadow-lg transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                  >
                    {info.buttonText || (info.title === 'Phone Number' ? 'Call Now' : 'Send Email')}
                    {info.title === 'Our Location' && (
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    )}
                  </a>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

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
                className="col-span-1 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="col-span-1 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="col-span-1 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number (Optional)"
                className="col-span-1 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="col-span-1 sm:col-span-2 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="col-span-1 sm:col-span-2 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all"
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
