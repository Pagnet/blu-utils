import 'jest';

import { normalizePis } from '../src';

describe('test isPis', () => {
  test('spec list Pis', () => {
    expect(normalizePis('08811848944')).toBe('088.11848.94-4');
    expect(normalizePis('82311848944')).toBe('823.11848.94-4');
    expect(normalizePis('12345678994')).toBe('123.45678.99-4');
  });
});
