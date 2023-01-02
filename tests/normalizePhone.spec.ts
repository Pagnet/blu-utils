import 'jest';

import { normalizePhone } from '../src';

describe('normalizePhoneDDI', () => {
  test('spec normalizePhoneDDI returns without DDI', () => {
    expect(normalizePhone('85974147852')).toBe('(85) 97414-7852');
    expect(normalizePhone('85973147852')).toBe('(85) 97314-7852');
  });
  test('spec normalizePhoneDDI returns how DDI', () => {
    expect(normalizePhone('+5585974147852', true)).toBe('+55 (85) 97414-7852');
    expect(normalizePhone('+5585973147852', true)).toBe('+55 (85) 97314-7852');
  });
});
