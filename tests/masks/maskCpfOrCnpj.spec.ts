import 'jest';

import { maskCpfOrCnpj } from '../../src';

describe('maskCpfOrCnpj', () => {
  test('aplica máscara de CPF quando ≤11 caracteres limpos', () => {
    expect(maskCpfOrCnpj('93231097037')).toBe('932.310.970-37');
  });

  test('aplica máscara de CNPJ quando >11 caracteres limpos', () => {
    expect(maskCpfOrCnpj('11222333000181')).toBe('11.222.333/0001-81');
  });

  test('aplica máscara de CNPJ alfanumérico quando >11 caracteres com letras', () => {
    expect(maskCpfOrCnpj('12ABC34501DE35')).toBe('12.ABC.345/01DE-35');
  });

  test('troca para CNPJ assim que aparecer uma letra (digitação progressiva)', () => {
    expect(maskCpfOrCnpj('12A')).toBe('12.A');
    expect(maskCpfOrCnpj('12AB')).toBe('12.AB');
    expect(maskCpfOrCnpj('12ABC')).toBe('12.ABC');
  });

  test('normaliza alfanumérico para uppercase', () => {
    expect(maskCpfOrCnpj('12abc34501de35')).toBe('12.ABC.345/01DE-35');
  });

  test('valor vazio retorna string vazia', () => {
    expect(maskCpfOrCnpj('')).toBe('');
  });
});
