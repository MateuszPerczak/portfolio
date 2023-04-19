import type { Variants } from "framer-motion";

export const animation: Variants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.12, 0.23, 0.5, 1],
    },
  },
};

export const descriptionAnimation: Variants = {
  offscreen: { opacity: 0 },
  description: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

export const transition: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  description: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};
