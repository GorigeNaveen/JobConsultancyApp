// components/AnimatedSection.tsx
"use client"; // This is a client component

import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  let initialProps = {};
  switch (direction) {
    case "up":
      initialProps = { opacity: 0, y: 50 };
      break;
    case "down":
      initialProps = { opacity: 0, y: -50 };
      break;
    case "left":
      initialProps = { opacity: 0, x: -50 };
      break;
    case "right":
      initialProps = { opacity: 0, x: 50 };
      break;
    case "none":
    default:
      initialProps = { opacity: 0 };
      break;
  }

  return (
    <motion.div
      initial={initialProps}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;