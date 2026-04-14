export const easing = [0.22, 1, 0.36, 1];

export const viewportSection = {
  once: true,
  amount: 0.22,
};

export const viewportCard = {
  once: true,
  amount: 0.3,
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      ease: easing,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -32,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: easing,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 32,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: easing,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: easing,
    },
  },
};

export const subtleHoverLift = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.24,
      ease: easing,
    },
  },
};
