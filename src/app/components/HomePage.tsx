
"use client";

import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimatedSection from "./AnimatedSection";
import LottiePlayerComponent from "./LottiePlayerComponent";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f7ff] to-[#e0fff4]">
      {/* Hero Section */}
      
      <section id="home" className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-center  p-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-3/4 "
        >
          <AnimatedSection direction="down" delay={0}>
          <div className="w-full ">
            <LottiePlayerComponent
              src="/handshake.json" // Make sure this path is correct in your public folder
              className="w-5/6 h-full "
            />
          </div>
        </AnimatedSection>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-center space-6 "
        >
          <h1 className="text-5xl font-bold leading-tight">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-lg">
            We bridge the gap between ambitious professionals and visionary
            companies. Let us power your career search or hiring strategy.
          </p>
          {/* <Button size="lg">Get Started</Button> */}
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
