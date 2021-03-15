import { breakAt, BreakpointsSizes } from "./Breakpoints";

test.each([
  [BreakpointsSizes.sm],
  [BreakpointsSizes.md],
  [BreakpointsSizes.lg],
  [BreakpointsSizes.xl],
  [BreakpointsSizes.xxl],
])("break at %ipx", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
