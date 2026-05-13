import VMasker from 'vanilla-masker';
import {
  MASKS,
  CURRENCY_MASK_DEFAULTS,
  PERCENTAGE_MASK_DEFAULTS,
  DEFAULT_BANK_BRANCH_MASK,
  DEFAULT_BANK_ACCOUNT_MASK,
  BANK_BRANCH_MASKS,
  BANK_ACCOUNT_MASKS,
  ALPHANUMERIC_BANK_CODES,
} from './masks';
import { stripAlphanumeric, stripNumeric } from './strip';
import type { MaskType, CurrencyMaskOptions, BankCompensationCode } from './types';

/**
 * Options for `maskValue`. Extends `CurrencyMaskOptions` so that currency/percentage
 * formatting options and `compensationCode` (used only by `bank_branch`/`bank_account`)
 * can be passed through a single options object.
 */
export interface MaskValueOptions extends CurrencyMaskOptions {
  compensationCode?: string;
}

const ALPHANUMERIC_MASKS: ReadonlyArray<MaskType> = ['cnpj', 'cpf_cnpj'];

const stripFor = (value: string, type: MaskType, compensationCode?: string): string => {
  if (ALPHANUMERIC_MASKS.includes(type)) return stripAlphanumeric(value);
  if (
    (type === 'bank_account' || type === 'bank_branch')
    && ALPHANUMERIC_BANK_CODES.includes(compensationCode as BankCompensationCode)
  ) {
    return stripAlphanumeric(value);
  }
  return stripNumeric(value);
};

const bankBranchPattern = (code?: string): string => {
  if (code) {
    const mapped = BANK_BRANCH_MASKS[code as BankCompensationCode];
    if (mapped) return mapped;
  }
  return DEFAULT_BANK_BRANCH_MASK;
};

const bankAccountPattern = (code?: string): string => {
  if (code) {
    const mapped = BANK_ACCOUNT_MASKS[code as BankCompensationCode];
    if (mapped) return mapped;
  }
  return DEFAULT_BANK_ACCOUNT_MASK;
};

const patternFor = (
  type: MaskType,
  stripped: string,
  compensationCode?: string,
): string => {
  if (type === 'cpf_cnpj') {
    if (/[A-Z]/.test(stripped)) return MASKS.CNPJ;
    return stripped.length <= 11 ? MASKS.CPF : MASKS.CNPJ;
  }

  switch (type) {
    case 'cpf': return MASKS.CPF;
    case 'cnpj': return MASKS.CNPJ;
    case 'phone': return MASKS.PHONE;
    case 'phone_idd': return MASKS.PHONE_IDD;
    case 'zipcode': return MASKS.ZIPCODE;
    case 'date': return MASKS.DATE;
    case 'barCode': return MASKS.BAR_CODE;
    case 'barCodeUtilities': return MASKS.BAR_CODE_UTILITIES;
    case 'darf': return MASKS.DARF;
    case 'number': return MASKS.NUMBER;
    case 'bank_branch': return bankBranchPattern(compensationCode);
    case 'bank_account': return bankAccountPattern(compensationCode);
    default: return '';
  }
};

export default function maskValue(
  value: string | null | undefined,
  type: MaskType,
  options?: MaskValueOptions,
): string {
  if (value === null || value === undefined || value === '') return '';

  const stringValue = String(value);

  if (type === 'currency') {
    return VMasker.toMoney(stringValue, { ...CURRENCY_MASK_DEFAULTS, ...(options || {}) });
  }

  if (type === 'percentage') {
    return VMasker.toMoney(stringValue, { ...PERCENTAGE_MASK_DEFAULTS, ...(options || {}) });
  }

  const stripped = stripFor(stringValue, type, options?.compensationCode);
  const pattern = patternFor(type, stripped, options?.compensationCode);

  if (!pattern) return stringValue;

  return VMasker.toPattern(stripped, pattern);
}
