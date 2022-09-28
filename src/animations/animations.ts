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

export const projectAnimation: MotionProps = {
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

export const skillsWrapper: MotionProps = {
  variants: {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  },
  initial: "initial",
  animate: "animate",
};

export const skillsAnimation: MotionProps = {
  variants: {
    initial: {
      opacity: 0,
      x: -100,
      skewX: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 120,
      },
    },
  },
};

export const frameworksWrapper: MotionProps = {
  variants: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  initial: "initial",
  animate: "animate",
};

export const frameworkAnimation: MotionProps = {
  variants: {
    initial: {
      opacity: 0,
      scale: 1.3,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 120,
      },
    },
  },
};
