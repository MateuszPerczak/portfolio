import type { Variants } from "framer-motion";

export const animation: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.12, 0.23, 0.5, 1],
    },
  },
};

export const transition: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  offscreen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
