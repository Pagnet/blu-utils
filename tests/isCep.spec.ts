import 'jest';

import { isCep } from '../src';

describe('test isCPF', () => {
  test('spec invalid cep list', () => {
    expect(isCep('11111118')).toBe(false);
    expect(isCep('22222228')).toBe(false);
    expect(isCep('33333338')).toBe(false);
    expect(isCep('44444448')).toBe(false);
    expect(isCep('55555558')).toBe(false);
    expect(isCep('66666668')).toBe(false);
    expect(isCep('77777778')).toBe(false);
    expect(isCep('88888888')).toBe(false);
    expect(isCep('99999998')).toBe(false);
    expect(isCep('12345678')).toBe(false);
    expect(isCep('12345678')).toBe(false);
  });
  test('spec valid cep list', () => {
    expect(isCep('60442132')).toBe(true);
    expect(isCep('60442118')).toBe(true);
    expect(isCep('60442111')).toBe(true);
  });
});
