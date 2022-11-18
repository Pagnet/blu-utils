import 'jest';

import { formatterMoney } from '../src';

describe('formatterMoney', () => {
  test('test formatterMoney', () => {
    expect(formatterMoney(10)).toBe('R$ 10,00');
  });
});

