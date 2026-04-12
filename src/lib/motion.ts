import type { Transition } from 'framer-motion';

/** Parent: only orchestrates stagger timing for children */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
} as const;

/** Child: fade + slight rise (matches hero contact links) */
export const fadeUpItem = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export const sectionViewport = { once: true, amount: 0.2 } as const;

export const hoverSpring: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};
