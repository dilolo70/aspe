
const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
    animate2: (index: number) => ({
      opacity: 1,
      x: 0,
      y:0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  
  
  const LeftInAnimationVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
    initial1: {
      opacity: 0,
      x:-100,
    },
    animate1: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    }),
  };