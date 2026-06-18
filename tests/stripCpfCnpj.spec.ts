import 'jest';

import { stripCpfCnpj } from '../src';

describe('stripCpfCnpj', () => {
  test('CPF mascarado → apenas dígitos', () => {
    expect(stripCpfCnpj('824.007.050-70')).toBe('82400705070');
  });

  test('CNPJ numérico mascarado → apenas dígitos', () => {
    expect(stripCpfCnpj('12.345.678/0001-95')).toBe('12345678000195');
  });

  // RFB NT 49/2024 — as letras fazem parte do identificador e não podem ser
  // descartadas (o que aconteceria com stripNumbers / /\D/g).
  test('CNPJ alfanumérico preserva as letras', () => {
    expect(stripCpfCnpj('AB.345.678/XY01-74')).toBe('AB345678XY0174');
  });

  test('CNPJ alfanumérico minúsculo é normalizado para upper-case', () => {
    expect(stripCpfCnpj('ab.345.678/xy01-74')).toBe('AB345678XY0174');
  });

  test('valor já sem máscara é idempotente', () => {
    expect(stripCpfCnpj('AB345678XY0174')).toBe('AB345678XY0174');
  });

  test('undefined / vazio → string vazia', () => {
    expect(stripCpfCnpj(undefined)).toBe('');
    expect(stripCpfCnpj('')).toBe('');
  });
});
