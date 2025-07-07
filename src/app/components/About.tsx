// components/About.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import dynamic from "next/dynamic";

const DynamicLottiePlayer = dynamic(() => import("./LottiePlayerComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-48 flex items-center justify-center text-gray-500">
      Loading animation...
    </div>
  ),
});

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f7ff] to-[#e0fff4] font-['Inter']">
      <section
        id="about"
        className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 py-15 md:py-35 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-12">
            About NR Work Force
          </h1>

          {/* ───────────── Bringing People Together ───────────── */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* text */}
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Bringing People Together
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
               At <strong>NR Work Force</strong>, we believe in the power of meaningful connections. Our mission is to bridge top talent with forward-thinking organizations, creating opportunities where both individuals and businesses thrive. More than recruiters, we are strategic partners focused on long-term success and lasting relationships.


                </p>
              </div>

              {/* animation – full width on all breakpoints */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <DynamicLottiePlayer
                  src="/bring-people-together.json"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* ───────────── Our Vision ───────────── */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-20 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* text */}
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision is to become a leading catalyst in connecting ambition with opportunity, where professionals find their ideal careers and companies secure exceptional talent. We’re committed to transparency, integrity, and continuous growth—driving innovation and excellence across every industry.


                </p>
              </div>

              {/* animation */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <DynamicLottiePlayer
                  src="/our-vision.json"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* ───────────── Our Mission ───────────── */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* text */}
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to empower individuals and organizations through strategic hiring and career guidance. By combining industry insights, technology, and a personalized approach, we simplify recruitment—making it efficient, fair, and impactful for all. We’re dedicated to lasting partnerships and meaningful professional growth.
                </p>
              </div>

              {/* animation */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <DynamicLottiePlayer
                  src="/our-mission.json"
                  className="w-full h-auto"
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
