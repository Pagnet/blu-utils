import 'jest';

import { formatCnpj } from '../src';

describe('formatCnpj', () => {
  test('CNPJ numérico — retrocompat', () => {
    expect(formatCnpj('11222333000181')).toBe('11.222.333/0001-81');
  });

  test('CNPJ alfanumérico', () => {
    expect(formatCnpj('12ABC34501DE35')).toBe('12.ABC.345/01DE-35');
  });

  test('CNPJ alfanumérico minúsculo é normalizado', () => {
    expect(formatCnpj('12abc34501de35')).toBe('12.ABC.345/01DE-35');
  });

  test('strip de separadores em paste', () => {
    expect(formatCnpj('12.ABC.345/01DE-35')).toBe('12.ABC.345/01DE-35');
  });

  test('valor vazio', () => {
    expect(formatCnpj('')).toBe('');
  });

  test('valor parcial é parcialmente formatado', () => {
    expect(formatCnpj('12ABC')).toBe('12.ABC');
  });
});
