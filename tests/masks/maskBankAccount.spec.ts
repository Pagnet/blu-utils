import 'jest';

import { maskBankAccount } from '../../src';

describe('maskBankAccount', () => {
  describe('Banco do Brasil (1)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('123456789', '1')).toBe('12345678-9');
    });

    test('DV é numérico: caractere não numérico é removido', () => {
      expect(maskBankAccount('12345678X', '1')).toBe('12345678');
    });
  });

  describe('Santander (33)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('123456789', '33')).toBe('12345678-9');
    });
  });

  describe('Bradesco (237)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('12345678', '237')).toBe('1234567-8');
    });
  });

  describe('Itaú (341)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('123456', '341')).toBe('12345-6');
    });
  });

  describe('CEF (104)', () => {
    test('formata conta com dígito (9 dígitos, sem operação)', () => {
      expect(maskBankAccount('1234567890123', '104')).toBe('123456789-0');
    });
  });

  describe('Banrisul (41)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('1234567890', '41')).toBe('123456789-0');
    });
  });

  describe('HSBC (399)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('1234567', '399')).toBe('123456-7');
    });
  });

  describe('Citibank (745)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('12345678', '745')).toBe('1234567-8');
    });
  });

  describe('Arbi (213)', () => {
    test('formata conta com dígito', () => {
      expect(maskBankAccount('12345678', '213')).toBe('12345-6');
    });
  });

  describe('noop (banco desconhecido)', () => {
    test('usa máscara default (999999999999-9)', () => {
      expect(maskBankAccount('1234567890123', '999')).toBe('123456789012-3');
    });

    test('sem código de compensação usa default', () => {
      expect(maskBankAccount('1234567890123')).toBe('123456789012-3');
    });
  });

  describe('edge cases', () => {
    test('null retorna empty string', () => {
      expect(maskBankAccount(null, '1')).toBe('');
    });

    test('undefined retorna empty string', () => {
      expect(maskBankAccount(undefined, '1')).toBe('');
    });

    test('empty string retorna empty string', () => {
      expect(maskBankAccount('', '1')).toBe('');
    });

    test('strip de separadores antes de aplicar', () => {
      expect(maskBankAccount('1234-5678-9', '33')).toBe('12345678-9');
    });
  });
});
