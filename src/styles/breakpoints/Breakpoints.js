export const BreakpointsSizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1520,
};

export const breakAt = (size) => `@media (min-width: ${size}px)`;
