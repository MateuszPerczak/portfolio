import type { Variants } from "framer-motion";

export const animatedIntro: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

export const animatedIntroHeader: Variants = {
  offscreen: {
    y: 70,
    skewY: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
};

export const animatedIntroContent: Variants = {
  offscreen: {
    y: -50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      mass: 1,
      restDelta: 0.1,
    },
  },
};
export const animatedIntroArrow: Variants = {
  scroll: {
    y: 5,
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 0,
      mass: 0.8,
    },
  },
};
