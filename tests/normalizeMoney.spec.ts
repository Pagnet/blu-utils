import 'jest';

import { normalizeMoney } from '../src';

describe('formatterMoney', () => {
  test('test formatterMoney', () => {
    expect(normalizeMoney(10)).toBe('R$ 10,00');
    expect(normalizeMoney(30)).toBe('R$ 30,00');
    expect(normalizeMoney(3000)).toBe('R$ 3.000,00');
    expect(normalizeMoney(11500)).toBe('R$ 11.500,00');
    expect(normalizeMoney(1000000)).toBe('R$ 1.000.000,00');
  });
});
