import type { MotionProps } from "framer-motion";

export const projectsWrapper: MotionProps = {
  variants: {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  initial: "initial",
  animate: "animate",
};

export const project: MotionProps = {
  variants: {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 120,
      },
    },
  },
};
