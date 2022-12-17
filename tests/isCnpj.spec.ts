import 'jest';

import { isCnpj } from '../src';

describe('test isCnpj', () => {
  test('spec black list', () => {
    expect(isCnpj('00000000000000')).toBe(false);
    expect(isCnpj('11111111111111')).toBe(false);
    expect(isCnpj('22222222222222')).toBe(false);
    expect(isCnpj('33333333333333')).toBe(false);
    expect(isCnpj('44444444444444')).toBe(false);
    expect(isCnpj('55555555555555')).toBe(false);
    expect(isCnpj('66666666666666')).toBe(false);
    expect(isCnpj('77777777777777')).toBe(false);
    expect(isCnpj('88888888888888')).toBe(false);
    expect(isCnpj('99999999999999')).toBe(false);
  });
  test('spec list cnpj valid', () => {
    expect(isCnpj('37917940000150')).toBe(true);
    expect(isCnpj('84541997000187')).toBe(true);
    expect(isCnpj('90067886000183')).toBe(true);
  });
  test('spec list cnpj invalid', () => {
    expect(isCnpj('10132002256')).toBe(false);
    expect(isCnpj('10113200536')).toBe(false);
    expect(isCnpj('02213415285')).toBe(false);
  });
});

