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
          {/* Main H1 for the About section - clearly states the purpose */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-12">
            About NR Workforce - Your Trusted Job Consultancy
          </h1>

          {/* ───────────── Bringing People Together Section ───────────── */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Text content for "Bringing People Together" */}
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Connecting Talent with Opportunity
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At <strong>NR Workforce</strong>, we specialize in **job consultancy** and **recruitment services**, driven by the belief in the power of meaningful connections. Our core mission is to bridge top talent with forward-thinking organizations, creating opportunities where both individuals and businesses thrive. More than just **recruiters**, we are dedicated **strategic partners** focused on delivering long-term success and fostering lasting relationships in the **employment sector**. We aim to simplify the **job search** process for candidates and streamline **talent acquisition** for companies.
                </p>
              </div>

              {/* Animation for "Bringing People Together" */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <DynamicLottiePlayer
                  src="/bring-people-together.json"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* ───────────── Our Vision Section ───────────── */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-20 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Text content for "Our Vision" */}
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Our Vision for Career Growth & Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision is to become a leading **job placement agency** and catalyst in connecting ambition with opportunity. We strive to create an environment where professionals find their **ideal careers** through expert **career guidance**, and companies secure **exceptional talent** that drives their growth. We’re deeply committed to transparency, integrity, and continuous growth, consistently driving innovation and excellence across every industry we serve in the **staffing solutions** landscape.
                </p>
              </div>

              {/* Animation for "Our Vision" */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <DynamicLottiePlayer
                  src="/our-vision.json"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* ───────────── Our Mission Section ───────────── */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Text content for "Our Mission" */}
              <div className="lg:w-1/2 text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Empowering Through Strategic Hiring & Support
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to empower individuals and organizations through **strategic hiring** and comprehensive **career guidance**. By combining deep industry insights, cutting-edge technology, and a highly personalized approach, we simplify the entire **recruitment process**—making it efficient, fair, and impactful for all involved. We are dedicated to building lasting partnerships and fostering meaningful professional growth, ensuring NR Workforce remains a top choice for **hiring solutions** and **job opportunities** in Hyderabad and beyond.
                </p>
              </div>

              {/* Animation for "Our Mission" */}
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
