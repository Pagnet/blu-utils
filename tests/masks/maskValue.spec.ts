import 'jest';

import { maskValue } from '../../src';

describe('maskValue', () => {
  describe('cpf', () => {
    test('formata CPF', () => {
      expect(maskValue('93231097037', 'cpf')).toBe('932.310.970-37');
    });
    test('strip de caracteres antes de aplicar', () => {
      expect(maskValue('932.310.970-37', 'cpf')).toBe('932.310.970-37');
    });
  });

  describe('cnpj numérico', () => {
    test('formata CNPJ numérico', () => {
      expect(maskValue('11222333000181', 'cnpj')).toBe('11.222.333/0001-81');
    });
  });

  describe('cnpj alfanumérico', () => {
    test('formata CNPJ alfanumérico', () => {
      expect(maskValue('12ABC34501DE35', 'cnpj')).toBe('12.ABC.345/01DE-35');
    });
    test('normaliza para uppercase', () => {
      expect(maskValue('12abc34501de35', 'cnpj')).toBe('12.ABC.345/01DE-35');
    });
    test('strip de separadores em paste', () => {
      expect(maskValue('12.ABC.345/01DE-35', 'cnpj')).toBe('12.ABC.345/01DE-35');
    });
    test('formatação parcial sem throw', () => {
      expect(maskValue('12ABC', 'cnpj')).toBe('12.ABC');
    });
  });

  describe('phone', () => {
    test('formata celular', () => {
      expect(maskValue('11999998888', 'phone')).toBe('(11) 99999-8888');
    });
  });

  describe('zipcode', () => {
    test('formata CEP', () => {
      expect(maskValue('01310100', 'zipcode')).toBe('01310-100');
    });
  });

  describe('date', () => {
    test('formata data', () => {
      expect(maskValue('01012026', 'date')).toBe('01/01/2026');
    });
  });

  describe('currency', () => {
    test('formata BRL com defaults', () => {
      expect(maskValue('150000', 'currency')).toBe('1.500,00');
    });
    test('formata com unit override', () => {
      expect(maskValue('150000', 'currency', { unit: 'R$' })).toBe('R$ 1.500,00');
    });
  });

  describe('percentage', () => {
    test('formata percentual', () => {
      expect(maskValue('1500', 'percentage')).toBe('15,00 %');
    });
  });

  describe('darf', () => {
    test('formata número de referência DARF', () => {
      expect(maskValue('1234567890123', 'darf')).toBe('12 3 45 678901-23');
    });
    test('strip de separadores antes de aplicar', () => {
      expect(maskValue('12 3 45 678901-23', 'darf')).toBe('12 3 45 678901-23');
    });
  });

  describe('bank_branch', () => {
    test('formata agência padrão (4 dígitos)', () => {
      expect(maskValue('1234', 'bank_branch')).toBe('1234');
    });
    test('strip de caracteres não numéricos', () => {
      expect(maskValue('12-34', 'bank_branch')).toBe('1234');
    });
  });

  describe('bank_account', () => {
    test('formata conta padrão noop (12 dígitos + DV)', () => {
      expect(maskValue('1234567890123', 'bank_account')).toBe('123456789012-3');
    });
    test('strip de separadores antes de aplicar', () => {
      expect(maskValue('123456789012-3', 'bank_account')).toBe('123456789012-3');
    });
  });

  describe('edge cases', () => {
    test('null retorna empty string', () => {
      expect(maskValue(null, 'cpf')).toBe('');
    });
    test('undefined retorna empty string', () => {
      expect(maskValue(undefined, 'cpf')).toBe('');
    });
    test('empty string retorna empty string', () => {
      expect(maskValue('', 'cpf')).toBe('');
    });
  });
});
