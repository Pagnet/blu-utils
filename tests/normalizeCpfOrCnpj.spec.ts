import 'jest';

import { normalizeCpfOrCnpj } from '../src';

describe('test isCPF', () => {
  test('spec list CPF', () => {
    expect(normalizeCpfOrCnpj('82400705070')).toBe('824.007.050-70');
    expect(normalizeCpfOrCnpj('73675592065')).toBe('736.755.920-65');
    expect(normalizeCpfOrCnpj('71824198078')).toBe('718.241.980-78');
  });
  test('spec list CNPJ', () => {
    expect(normalizeCpfOrCnpj('92577765000107')).toBe('92.577.765/0001-07');
    expect(normalizeCpfOrCnpj('80985211000160')).toBe('80.985.211/0001-60');
    expect(normalizeCpfOrCnpj('11674478000113')).toBe('11.674.478/0001-13');
  });
});

