import 'jest';

import { isNIT } from '../src';

describe('test isNIT', () => {
  test('spec black list', () => {
    expect(isNIT('00000000000')).toBe(false);
    expect(isNIT('11111111111')).toBe(false);
    expect(isNIT('22222222222')).toBe(false);
    expect(isNIT('33333333333')).toBe(false);
    expect(isNIT('44444444444')).toBe(false);
    expect(isNIT('55555555555')).toBe(false);
    expect(isNIT('66666666666')).toBe(false);
    expect(isNIT('77777777777')).toBe(false);
    expect(isNIT('88888888888')).toBe(false);
    expect(isNIT('99999999999')).toBe(false);
  });
  test('spec list nit valid', () => {
    expect(isNIT('12345678994')).toBe(true);
    expect(isNIT('08811848944')).toBe(true);
    expect(isNIT('82311848944')).toBe(true);
  });
  test('spec list nit invalid', () => {
    expect(isNIT('10132002256')).toBe(false);
    expect(isNIT('10113200536')).toBe(false);
    expect(isNIT('02213415285')).toBe(false);
  });
});
