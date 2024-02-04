import type { Variants } from "framer-motion";

export const projectVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0.3,
    },
  },
};
