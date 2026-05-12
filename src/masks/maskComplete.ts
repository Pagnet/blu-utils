import { MASKS, DEFAULT_BANK_BRANCH_MASK, DEFAULT_BANK_ACCOUNT_MASK } from './masks';
import { stripAlphanumeric, stripNumeric, PATTERN_PLACEHOLDER_REGEX } from './strip';
import type { MaskType } from './types';

const ALPHANUMERIC_MASKS: ReadonlyArray<MaskType> = ['cnpj', 'cpf_cnpj'];

const placeholdersInPattern = (pattern: string): number => {
  const matches = pattern.match(PATTERN_PLACEHOLDER_REGEX);
  return matches ? matches.length : 0;
};

const patternFor = (type: MaskType): string | null => {
  switch (type) {
    case 'cpf': return MASKS.CPF;
    case 'cnpj': return MASKS.CNPJ;
    case 'phone': return MASKS.PHONE;
    case 'zipcode': return MASKS.ZIPCODE;
    case 'date': return MASKS.DATE;
    case 'barCode': return MASKS.BAR_CODE;
    case 'barCodeUtilities': return MASKS.BAR_CODE_UTILITIES;
    case 'darf': return MASKS.DARF;
    case 'number': return MASKS.NUMBER;
    case 'bank_branch': return DEFAULT_BANK_BRANCH_MASK;
    case 'bank_account': return DEFAULT_BANK_ACCOUNT_MASK;
    default: return null;
  }
};

export default function maskComplete(value: string, type: MaskType): boolean {
  if (!value) return false;

  if (type === 'currency' || type === 'percentage') {
    return value.length > 0;
  }

  if (type === 'cpf_cnpj') {
    const stripped = stripAlphanumeric(value);
    return stripped.length === 11 || stripped.length === 14;
  }

  const pattern = patternFor(type);
  if (pattern === null) return false;

  const expected = placeholdersInPattern(pattern);
  const stripped = ALPHANUMERIC_MASKS.includes(type)
    ? stripAlphanumeric(value)
    : stripNumeric(value);

  return stripped.length === expected;
}
