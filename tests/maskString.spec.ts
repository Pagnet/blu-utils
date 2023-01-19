import 'jest';

import { maskString } from '../src';

describe('test maskString', () => {
  test('spec function', () => {
    expect(maskString('123456', '###-###')).toBe('123-456');
    expect(maskString('12345678', '###-###-##')).toBe('123-456-78');
    expect(maskString('12345', '###-##')).toBe('123-45');
  });
  test('spec with erro', () => {
    expect(maskString('123456', '')).toBe('');
    expect(maskString('', '##-##')).toBe('');
    expect(maskString('', '')).toBe('');
  });
});
