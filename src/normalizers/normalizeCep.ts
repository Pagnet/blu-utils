import maskString from '../utils/maskString';

export default function normalizeCep(value: string): string {
  return maskString(value, '#####-###');
}
