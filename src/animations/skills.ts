import type { Variants } from "framer-motion";

export const animatedSkills: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  float: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

export const animatedSkillsHeader: Variants = {
  offscreen: {
    x: "-100%",
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

export const animatedSkill: Variants = {
  offscreen: {
    opacity: 0,
    x: "100%",
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
  float: {
    y: 5,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 0,
      mass: 1,
    },
  },
};
