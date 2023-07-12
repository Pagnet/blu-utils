import { Breakpoints } from './types';

export default function breakpointBetween<T extends string>(
  from: T,
  to: T,
): string {
  return `@media (min-width: ${
    Breakpoints[from as keyof typeof Breakpoints]
  }) and (max-width: ${Breakpoints[to as keyof typeof Breakpoints]})`;
}
