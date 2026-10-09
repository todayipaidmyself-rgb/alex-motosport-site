"use client";

import { motion, useReducedMotion } from "framer-motion";

export const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
