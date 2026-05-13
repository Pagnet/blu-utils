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

  test('phone_idd completo', () => {
    expect(maskComplete('+55 (11) 99999-8888', 'phone_idd')).toBe(true);
  });

  test('phone_idd incompleto', () => {
    expect(maskComplete('5511', 'phone_idd')).toBe(false);
  });

  test('bank_branch completo (4 dígitos)', () => {
    expect(maskComplete('1234', 'bank_branch')).toBe(true);
  });

  test('bank_branch incompleto', () => {
    expect(maskComplete('12', 'bank_branch')).toBe(false);
  });

  test('bank_branch completo com compensationCode Itaú (341)', () => {
    expect(maskComplete('123456', 'bank_branch', '341')).toBe(true);
  });

  test('bank_branch incompleto com compensationCode Itaú (341)', () => {
    expect(maskComplete('1234', 'bank_branch', '341')).toBe(false);
  });

  test('bank_account completo (noop 12+1 dígitos)', () => {
    expect(maskComplete('1234567890123', 'bank_account')).toBe(true);
  });

  test('bank_account incompleto', () => {
    expect(maskComplete('12345', 'bank_account')).toBe(false);
  });

  test('bank_account completo com compensationCode BB (1) — posicional', () => {
    expect(maskComplete('123456789', 'bank_account', '1')).toBe(true);
  });

  test('bank_account completo com compensationCode BB (1) — options', () => {
    expect(maskComplete('123456789', 'bank_account', { compensationCode: '1' })).toBe(true);
  });

  test('bank_account completo com DV alfanumérico BB (1)', () => {
    expect(maskComplete('12345678X', 'bank_account', { compensationCode: '1' })).toBe(true);
  });

  test('bank_account incompleto com compensationCode BB (1)', () => {
    expect(maskComplete('12345', 'bank_account', '1')).toBe(false);
  });

  test('darf completo (13 dígitos)', () => {
    expect(maskComplete('1234567890123', 'darf')).toBe(true);
  });

  test('darf incompleto', () => {
    expect(maskComplete('1234', 'darf')).toBe(false);
  });
});
