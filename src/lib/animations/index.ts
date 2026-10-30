export const easeOut = [0.16, 1, 0.3, 1] as const;

export const wordUp = {
  duration: 1.15,
  ease: easeOut,
  staggerMs: 55,
  initialDelayMs: 420,
} as const;

export const fadeUp = {
  duration: 1.1,
  ease: easeOut,
  distance: 28,
} as const;

export const hoverMs = 300;
