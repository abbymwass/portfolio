export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: 0,
      x: 0,
      opacity: 1,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0,
        delay: 0,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
