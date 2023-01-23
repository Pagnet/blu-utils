import 'jest';

import { isPis } from '../src';

describe('test isPis', () => {
  test('spec black list', () => {
    expect(isPis('00000000000')).toBe(false);
    expect(isPis('11111111111')).toBe(false);
    expect(isPis('22222222222')).toBe(false);
    expect(isPis('33333333333')).toBe(false);
    expect(isPis('44444444444')).toBe(false);
    expect(isPis('55555555555')).toBe(false);
    expect(isPis('66666666666')).toBe(false);
    expect(isPis('77777777777')).toBe(false);
    expect(isPis('88888888888')).toBe(false);
    expect(isPis('99999999999')).toBe(false);
  });  
  test('spec list pis valid', () => {
    expect(isPis('12345678994')).toBe(true);
    expect(isPis('08811848944')).toBe(true);
    expect(isPis('82311848944')).toBe(true);
  });
  test('spec list pis invalid', () => {
    expect(isPis('10132002256')).toBe(false);
    expect(isPis('10113200536')).toBe(false);
    expect(isPis('02213415285')).toBe(false);
  });
});
