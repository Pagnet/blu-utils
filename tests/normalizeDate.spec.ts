import 'jest';

import { normalizeDate } from '../src';

describe('test normalizeDate', () => {
  test('spec normalize date types', () => {
    expect(normalizeDate('2023-12-12 23:39:25.756', 'bigger'))
      .toBe('terça-feira, 12 de dezembro de 2023 20:39:25 Horário Padrão de Brasília');
    
    expect(normalizeDate('2023-01-01 23:39:25.756', 'long'))
        .toBe('domingo, 1 de janeiro de 2023');
    
    expect(normalizeDate('2023-01-16 23:39:25.756'))
      .toBe('16/01/2023');
    
    expect(normalizeDate('2023-22-12 23:39:25.756', 'long'))
      .toBe('Invalid Date');

    expect(normalizeDate('2023-01-01 23:39:25.756'))
      .not.toBe('domingo, 1 de janeiro de 2023');
  });
});
