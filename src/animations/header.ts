import type { Variants } from "framer-motion";

export const animatedHeader: Variants = {
  offscreen: {
    x: "100%",
    opacity: 0,
  },
  onscreen: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.6,
    },
  },
};
