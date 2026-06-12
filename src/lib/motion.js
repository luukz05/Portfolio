export const easing = [0.22, 1, 0.36, 1];

export const viewportSection = {
  once: true,
  amount: 0.2,
};

export const viewportCard = {
  once: true,
  amount: 0.25,
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: easing,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 18,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: easing,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
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
    y: -3,
    transition: {
      duration: 0.24,
      ease: easing,
    },
  },
};
