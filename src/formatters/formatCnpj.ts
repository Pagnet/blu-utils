import VMasker from 'vanilla-masker';
import { MASKS } from '../masks/masks';
import { stripAlphanumeric } from '../masks/strip';

const formatCnpj = (value: string): string => {
  if (!value) return '';

  const stripped = stripAlphanumeric(value).slice(0, 14);

  return VMasker.toPattern(stripped, MASKS.CNPJ);
};

export default formatCnpj;
