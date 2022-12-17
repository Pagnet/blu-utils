import 'jest';

import { isCpf } from '../src';

describe('test isCPF', () => {
  test('spec black list', () => {
    expect(isCpf('00000000000')).toBe(false);
    expect(isCpf('11111111111')).toBe(false);
    expect(isCpf('22222222222')).toBe(false);
    expect(isCpf('33333333333')).toBe(false);
    expect(isCpf('44444444444')).toBe(false);
    expect(isCpf('55555555555')).toBe(false);
    expect(isCpf('66666666666')).toBe(false);
    expect(isCpf('77777777777')).toBe(false);
    expect(isCpf('88888888888')).toBe(false);
    expect(isCpf('99999999999')).toBe(false);
    expect(isCpf('12345678909')).toBe(false);
  });
  test('spec list cpf valid', () => {
    expect(isCpf('10132002256')).toBe(true);
    expect(isCpf('10113200536')).toBe(true);
    expect(isCpf('02213415285')).toBe(true);
  });
  test('spec list cpf invalid', () => {
    expect(isCpf('10132002252')).toBe(false);
    expect(isCpf('10113200134')).toBe(false);
    expect(isCpf('02213015287')).toBe(false);
  });
});

