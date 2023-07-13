import { Breakpoints } from './types';

export default function breakpointFrom<T extends string>(point: T): string {
  return `@media screen and (min-width: ${
    Breakpoints[point as keyof typeof Breakpoints]
  })`;
}
