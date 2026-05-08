import 'jest';

import { maskComplete } from '../../src';

describe('maskComplete', () => {
  test('CPF completo', () => {
    expect(maskComplete('932.310.970-37', 'cpf')).toBe(true);
  });

  test('CPF incompleto', () => {
    expect(maskComplete('932.310', 'cpf')).toBe(false);
  });

  test('CNPJ numérico completo', () => {
    expect(maskComplete('11.222.333/0001-81', 'cnpj')).toBe(true);
  });

  test('CNPJ alfanumérico completo', () => {
    expect(maskComplete('12.ABC.345/01DE-35', 'cnpj')).toBe(true);
  });

  test('CNPJ incompleto', () => {
    expect(maskComplete('12.ABC', 'cnpj')).toBe(false);
  });

  test('cpf_cnpj com 11 chars limpos é completo', () => {
    expect(maskComplete('932.310.970-37', 'cpf_cnpj')).toBe(true);
  });

  test('cpf_cnpj com 14 chars limpos é completo', () => {
    expect(maskComplete('12.ABC.345/01DE-35', 'cpf_cnpj')).toBe(true);
  });

  test('valor vazio é incompleto', () => {
    expect(maskComplete('', 'cpf')).toBe(false);
  });

  test('phone completo', () => {
    expect(maskComplete('(11) 99999-8888', 'phone')).toBe(true);
  });

  test('zipcode completo', () => {
    expect(maskComplete('01310-100', 'zipcode')).toBe(true);
  });
});
