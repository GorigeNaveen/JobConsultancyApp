"use client";

import { motion } from "framer-motion";
// Assuming these components are in the same directory or accessible via path
import AnimatedSection from "./AnimatedSection";
import LottiePlayerComponent from "./LottiePlayerComponent";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f7ff] to-[#e0fff4] font-['Inter']">

      
      <section id="about" className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-15 md:py-35 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full" // Increased max-width for better content flow
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-12">
            About NR Work Force
          </h1>

          {/* Section: Bringing People Together */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Bringing People Together
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At **NR Work Force**, our core belief lies in the power of connection. We are dedicated to building bridges between exceptional talent and visionary organizations. Our mission is to cultivate environments where both individuals and businesses not only find their perfect match but also thrive and achieve their fullest potential. We move beyond conventional recruitment, acting as strategic partners committed to understanding unique needs and fostering enduring relationships.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center items-center">
                {/* Placeholder Lottie for 'Connecting People' */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-3/4 "
                >
                  <AnimatedSection direction="down" delay={0}>
                  <div className="w-full ">
                    <LottiePlayerComponent
                      src="/bring-people-together.json" // Make sure this path is correct in your public folder
                      className="w-5/6 h-full "
                    />
                  </div>
                </AnimatedSection>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Section: Our Vision */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-20 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision is to emerge as the leading force in connecting ambition with opportunity, redefining excellence in the recruitment landscape. We aspire to a future where every professional discovers their ideal career path, and every company secures the perfect talent, catalyzing unparalleled growth and groundbreaking innovation across all sectors. We are steadfast in our commitment to transparency, unwavering integrity, and continuous improvement in every facet of our operations.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center items-center">
                {/* Placeholder Lottie for 'Vision' */}
                <LottiePlayerComponent
                  src="/our-vision.json" // Ensure this path is correct in your public folder
                  className="w-full max-w-sm h-auto rounded-xl"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Section: Our Mission */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to empower individuals and organizations through strategic talent acquisition and career guidance. We achieve this by leveraging deep industry insights, innovative technology, and a personalized approach. We are committed to delivering exceptional value, fostering long-term partnerships, and contributing positively to the professional journeys of all our clients. We strive to simplify the complex hiring process, making it efficient, equitable, and effective for everyone involved.
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center items-center">
                {/* Placeholder Lottie for 'Mission' */}
                <LottiePlayerComponent
                  src="/our-mission.json" // Ensure this path is correct in your public folder
                  className="w-full max-w-sm h-auto rounded-xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;