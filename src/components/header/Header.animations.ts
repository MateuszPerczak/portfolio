import type { Variants } from "framer-motion";

export const transition: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.2,
    },
  },
};

export const animation: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
