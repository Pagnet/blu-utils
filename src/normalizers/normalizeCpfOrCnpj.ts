import VMasker from 'vanilla-masker';
import maskString from '../utils/maskString';
import { MASKS } from '../masks/masks';
import { stripAlphanumeric } from '../masks/strip';

export default function normalizeCpfOrCnpj(value: string): string {
  if (!value) return '';

  if (value.length === 11) {
    return maskString(value, '###.###.###-##');
  }

  const stripped = stripAlphanumeric(value).slice(0, 14);

  return VMasker.toPattern(stripped, MASKS.CNPJ);
}
