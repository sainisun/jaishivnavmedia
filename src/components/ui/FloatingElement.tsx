"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FloatingElement({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
