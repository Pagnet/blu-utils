import 'jest';

import { maskBankBranch } from '../../src';

describe('maskBankBranch', () => {
  test('agência padrão (4 dígitos)', () => {
    expect(maskBankBranch('1234')).toBe('1234');
  });

  test('agência com código de compensação genérico', () => {
    expect(maskBankBranch('1234', '1')).toBe('1234');
  });

  test('agência Banco do Brasil (001)', () => {
    expect(maskBankBranch('1234', '1')).toBe('1234');
  });

  test('agência Santander (033)', () => {
    expect(maskBankBranch('1234', '33')).toBe('1234');
  });

  test('agência Itaú (341) com dígito verificador', () => {
    expect(maskBankBranch('123456', '341')).toBe('12345-6');
  });

  test('agência Itaú (341) parcial', () => {
    expect(maskBankBranch('1234', '341')).toBe('1234');
  });

  test('strip de caracteres não numéricos', () => {
    expect(maskBankBranch('12-34')).toBe('1234');
  });

  test('banco desconhecido usa padrão noop (9999)', () => {
    expect(maskBankBranch('1234', '999')).toBe('1234');
  });

  test('null retorna empty string', () => {
    expect(maskBankBranch(null)).toBe('');
  });

  test('undefined retorna empty string', () => {
    expect(maskBankBranch(undefined)).toBe('');
  });

  test('empty string retorna empty string', () => {
    expect(maskBankBranch('')).toBe('');
  });
});
