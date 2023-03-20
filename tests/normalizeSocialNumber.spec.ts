import 'jest';

import { normalizeSocialNumber } from '../src';

describe('normalizeSocialNumber', () => {
  test('test social media number formatter', () => {
    expect(normalizeSocialNumber(120)).toBe('120');
    expect(normalizeSocialNumber(1200)).toBe('1.2K');
    expect(normalizeSocialNumber(10000)).toBe('10K');
    expect(normalizeSocialNumber(100000)).toBe('100K');
    expect(normalizeSocialNumber(1000000)).toBe('1M');
    expect(normalizeSocialNumber(1230000)).toBe('1.2M');
    expect(normalizeSocialNumber(12350000)).toBe('12.4M');
    expect(normalizeSocialNumber(1220000000)).toBe('1.2B');
  });
});

