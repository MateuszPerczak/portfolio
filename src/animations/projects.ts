import type { Variants } from "framer-motion";

export const animatedProjects: Variants = {
  onscreen: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const animatedProjectsHeaderLeft: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
};

export const animatedProjectsHeaderRight: Variants = {
  offscreen: {
    opacity: 0,
    y: -100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1,
      restDelta: 0.01,
    },
  },
};

export const animatedProject: Variants = {
  offscreen: {
    opacity: 0,
    y: "200%",
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 2,
      restDelta: 0.01,
    },
  },
};
