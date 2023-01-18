import 'jest';

import { normalizeNIT } from '../src';

describe('test isNIT', () => {
  test('spec list NIT', () => {
    expect(normalizeNIT('08811848944')).toBe('088.11848.94-4');
    expect(normalizeNIT('82311848944')).toBe('823.11848.94-4');
    expect(normalizeNIT('12345678994')).toBe('123.45678.99-4');
  });
});
