import type { Variants } from "framer-motion";

export const transition: Variants = {
  initial: { opacity: 0, x: "-50%" },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
  exit: { opacity: 0 },
};
