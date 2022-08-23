import type { Variants } from "framer-motion";

export const animatedPage: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};
