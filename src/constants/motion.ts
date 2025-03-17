import { Variants } from 'framer-motion';

export const VIEWPORT = { once: true, amount: 0.1 };
export const INITIAL = 'offscreen';
export const WHILE_IN_VIEW = 'onscreen';

export const variantDownToUp = (delayBase: number): Variants => {
  return {
    offscreen: {
      y: 100,
      opacity: 0.5,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
        delay: delayBase * 0.1,
      },
    },
  };
};

export const variantDownToUp2 = (delayBase: number): Variants => {
  return {
    offscreen: {
      y: 50,
      opacity: 0.5,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
        delay: delayBase * 0.1,
      },
    },
  };
};

export const variantLeftToRight = (delayBase: number): Variants => {
  return {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
        delay: delayBase * 0.1,
      },
    },
  };
};

export const variantRightToLeft = (delayBase: number): Variants => {
  return {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.5,
        delay: delayBase * 0.1,
      },
    },
  };
};
