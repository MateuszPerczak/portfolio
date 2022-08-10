export const slideFromLeft = {
  initial: { x: "-100%", opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

export const slideFromBottom = {
  initial: { y: "100%", opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

export const scaleUp = {
  initial: { scale: 0.9, opacity: 0 },
  whileInView: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};
