import type { Variants } from "framer-motion";

export const animation: Variants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
  },
};

export const transition: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.5,
    },
  },
  offscreen: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};
