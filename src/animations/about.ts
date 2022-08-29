import type { Variants } from "framer-motion";

export const animatedAbout: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const animatedAboutHeader: Variants = {
  offscreen: {
    x: "100%",
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
};

export const animatedAboutText: Variants = {
  offscreen: {
    opacity: 0,
    x: "-100%",
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
};

export const animatedAboutButton: Variants = {
  offscreen: {
    opacity: 0,
    x: 100,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
};
