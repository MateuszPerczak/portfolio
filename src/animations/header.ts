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
      mass: 0.4,
      stiffness: 200,
      damping: 15,
    },
  },
};
