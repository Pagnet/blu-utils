import 'jest';

import { maskHintBankAccount } from '../../src';

describe('maskHintBankAccount', () => {
  test('Banco do Brasil (1)', () => {
    expect(maskHintBankAccount('1')).toBe('00000000-0');
  });

  test('Itaú (341)', () => {
    expect(maskHintBankAccount('341')).toBe('00000-0');
  });

  test('Bradesco (237)', () => {
    expect(maskHintBankAccount('237')).toBe('0000000-0');
  });

  test('CEF (104)', () => {
    expect(maskHintBankAccount('104')).toBe('000000000000-0');
  });

  test('código desconhecido retorna placeholder default (noop)', () => {
    expect(maskHintBankAccount('999')).toBe('000000000000-0');
  });
});
