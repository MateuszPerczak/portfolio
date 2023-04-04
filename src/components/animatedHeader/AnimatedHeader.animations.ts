import type { Variants } from "framer-motion";

export const animation: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const transition: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  offscreen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
