import 'jest';
import { normalizeDate } from '../src/';

describe('normalizeDate', () => {
  test('should return the expected formatted date for type "bigger"', () => {
    const result = normalizeDate('2023-12-12 23:39:25.756Z', 'bigger');
    expect(result).toBe(
      'terça-feira, 12 de dezembro de 2023 23:39:25 Horário Padrão de Brasília',
    );
    expect(result).not.toBe(
      'terça-feira, 12 de dezembro de 2023 0:00:00 Horário Padrão de Brasília',
    );
  });

  test('should return the expected formatted date for type "long"', () => {
    const result = normalizeDate('2023-01-01 23:39:25.756Z', 'long');
    expect(result).toBe('domingo, 1 de janeiro de 2023');
  });

  test('should return the expected formatted date for type "numeric"', () => {
    const result = normalizeDate('2023-01-01 23:39:25.756Z', 'numeric');
    expect(result).toBe('01/01/2023');
  });

  test('should return the expected formatted date with default type "numeric"', () => {
    const result = normalizeDate('2023-01-01');
    expect(result).toBe('01/01/2023');
  });

  test('should return "Invalid Date" for invalid date', () => {
    const invalidDate = '2023-22-12 23:39:25.756';
    const resultBigger = normalizeDate(invalidDate, 'bigger');
    const resultLong = normalizeDate(invalidDate, 'long');
    const resultNumeric = normalizeDate(invalidDate, 'numeric');
    expect(resultBigger).toBe('Invalid Date');
    expect(resultLong).toBe('Invalid Date');
    expect(resultNumeric).toBe('Invalid Date');
  });

  test('should return different results for different types', () => {
    const resultLong = normalizeDate('2023-01-01 23:39:25.756Z', 'long');
    const resultBigger = normalizeDate('2023-01-01 23:39:25.756Z', 'bigger');
    expect(resultLong).not.toBe(resultBigger);
  });
});

