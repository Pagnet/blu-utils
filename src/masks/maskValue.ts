import VMasker from 'vanilla-masker';
import {
  MASKS,
  CURRENCY_MASK_DEFAULTS,
  PERCENTAGE_MASK_DEFAULTS,
  DEFAULT_BANK_BRANCH_MASK,
  DEFAULT_BANK_ACCOUNT_MASK,
} from './masks';
import { stripAlphanumeric, stripNumeric } from './strip';
import type { MaskType, CurrencyMaskOptions } from './types';

const ALPHANUMERIC_MASKS: ReadonlyArray<MaskType> = ['cnpj', 'cpf_cnpj'];

const stripFor = (value: string, type: MaskType): string => (
  ALPHANUMERIC_MASKS.includes(type) ? stripAlphanumeric(value) : stripNumeric(value)
);

const patternFor = (type: MaskType, stripped: string): string => {
  if (type === 'cpf_cnpj') {
    if (/[A-Z]/.test(stripped)) return MASKS.CNPJ;
    return stripped.length <= 11 ? MASKS.CPF : MASKS.CNPJ;
  }

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
    default: return '';
  }
};

export default function maskValue(
  value: string | null | undefined,
  type: MaskType,
  options?: CurrencyMaskOptions,
): string {
  if (value === null || value === undefined || value === '') return '';

  const stringValue = String(value);

  if (type === 'currency') {
    return VMasker.toMoney(stringValue, { ...CURRENCY_MASK_DEFAULTS, ...(options || {}) });
  }

  if (type === 'percentage') {
    return VMasker.toMoney(stringValue, { ...PERCENTAGE_MASK_DEFAULTS, ...(options || {}) });
  }

  const stripped = stripFor(stringValue, type);
  const pattern = patternFor(type, stripped);

  if (!pattern) return stringValue;

  return VMasker.toPattern(stripped, pattern);
}
