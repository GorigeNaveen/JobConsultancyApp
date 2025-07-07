// HomePage.tsx
"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import dynamic from "next/dynamic";

const DynamicLottiePlayer = dynamic(() => import("./LottiePlayerComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-5/6 h-full flex items-center justify-center">
      Loading Lottie Animation...
    </div>
  ),
});

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f7ff] to-[#e0fff4] font-['Inter']">
      {/* ───────────────────────────  Hero  ─────────────────────────── */}
      <section
        id="home"
        /* gap‑y‑10 gives vertical space on phones; lg:gap‑x‑12 adds horizontal breathing room */
        className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-center
                   gap-y-10 lg:gap-x-12
                   px-6 pt-12 pb-2 lg:p-16"
      >
        {/* ─────────────── Animation ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          /* full width on phones / 3‑quarters on md / BIG at lg */
          className="w-full md:w-3/4 lg:w-4/5"
        >
          <AnimatedSection direction="down" delay={0}>
            <DynamicLottiePlayer
              src="/handshake.json"
              /* fill width on phones, 5/6 on md, full again on lg */
              className="w-full h-auto md:w-5/6 lg:w-full"
            />
          </AnimatedSection>
        </motion.div>

        {/* ─────────────── Copy ─────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-center  space-y-4 lg:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-extrabold leading-tight">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-sm sm:text-base text-black font-extrabold lg:text-base">
            We bridge the gap between ambitious professionals and visionary
            companies. Let us power your career search or hiring strategy.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
