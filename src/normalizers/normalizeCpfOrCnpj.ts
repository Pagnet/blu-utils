import maskString from '../utils/maskString';

export default function normalizeCpfOrCnpj(value: string): string {
  if (value.length === 11) {
    return maskString(value, '###.###.###-##');
  }

  return maskString(value, '##.###.###/####-##');
}
