import 'jest';

import { breakpointTo, breakpointFrom, breakpointBetween } from '../src';

describe('test breakpoints', () => {
  test('spec breakpointFrom()', () => {
    expect(breakpointFrom('bpXSmall')).toBe(
      '@media screen and (min-width: 320px)',
    );
    expect(breakpointFrom('bpSmall')).toBe(
      '@media screen and (min-width: 576px)',
    );
    expect(breakpointFrom('bpMedium')).toBe(
      '@media screen and (min-width: 768px)',
    );
    expect(breakpointFrom('bpLarge')).toBe(
      '@media screen and (min-width: 992px)',
    );
    expect(breakpointFrom('bpXLarge')).toBe(
      '@media screen and (min-width: 1200px)',
    );
    expect(breakpointFrom('bpXXLarge')).toBe(
      '@media screen and (min-width: 1400px)',
    );
  });
  test('spec breakpointTo()', () => {
    expect(breakpointTo('bpXSmall')).toBe(
      '@media screen and (max-width: 320px)',
    );
    expect(breakpointTo('bpSmall')).toBe(
      '@media screen and (max-width: 576px)',
    );
    expect(breakpointTo('bpMedium')).toBe(
      '@media screen and (max-width: 768px)',
    );

    expect(breakpointTo('bpLarge')).toBe(
      '@media screen and (max-width: 992px)',
    );
    expect(breakpointTo('bpXLarge')).toBe(
      '@media screen and (max-width: 1200px)',
    );
    expect(breakpointTo('bpXXLarge')).toBe(
      '@media screen and (max-width: 1400px)',
    );
  });
  test('spec breakpointBetween()', () => {
    expect(breakpointBetween('bpXSmall', 'bpSmall')).toBe(
      '@media (min-width: 320px) and (max-width: 576px)',
    );
    expect(breakpointBetween('bpMedium', 'bpLarge')).toBe(
      '@media (min-width: 768px) and (max-width: 992px)',
    );
  });
});

