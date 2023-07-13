import { Breakpoints } from './types';

export default function breakpointTo<T extends string>(point: T): string {
  return `@media screen and (max-width: ${
    Breakpoints[point as keyof typeof Breakpoints]
  })`;
}
