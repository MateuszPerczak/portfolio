import type { Variants } from "framer-motion";

export const transition: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      restDelta: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      ease: "linear",
      duration: 0.2,
    },
  },
};
