import {
  MASKS,
  DEFAULT_BANK_BRANCH_MASK,
  DEFAULT_BANK_ACCOUNT_MASK,
  BANK_BRANCH_MASKS,
  BANK_ACCOUNT_MASKS,
  ALPHANUMERIC_BANK_CODES,
} from './masks';
import { stripAlphanumeric, stripNumeric, PATTERN_PLACEHOLDER_REGEX } from './strip';
import type { MaskType, BankCompensationCode } from './types';

const ALPHANUMERIC_MASKS: ReadonlyArray<MaskType> = ['cnpj', 'cpf_cnpj'];

const placeholdersInPattern = (pattern: string): number => {
  const matches = pattern.match(PATTERN_PLACEHOLDER_REGEX);
  return matches ? matches.length : 0;
};

const patternFor = (
  type: MaskType,
  compensationCode?: string,
): string | null => {
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
    case 'bank_branch': {
      if (compensationCode) {
        const mapped = BANK_BRANCH_MASKS[compensationCode as BankCompensationCode];
        if (mapped) return mapped;
      }
      return DEFAULT_BANK_BRANCH_MASK;
    }
    case 'bank_account': {
      if (compensationCode) {
        const mapped = BANK_ACCOUNT_MASKS[compensationCode as BankCompensationCode];
        if (mapped) return mapped;
      }
      return DEFAULT_BANK_ACCOUNT_MASK;
    }
    default: return null;
  }
};

export interface MaskCompleteOptions {
  compensationCode?: string;
}

export default function maskComplete(
  value: string,
  type: MaskType,
  options?: string | MaskCompleteOptions,
): boolean {
  if (!value) return false;

  const compensationCode = typeof options === 'string' ? options : options?.compensationCode;

  if (type === 'currency' || type === 'percentage') {
    return value.length > 0;
  }

  if (type === 'cpf_cnpj') {
    const stripped = stripAlphanumeric(value);
    return stripped.length === 11 || stripped.length === 14;
  }

  const pattern = patternFor(type, compensationCode);
  if (pattern === null) return false;

  const expected = placeholdersInPattern(pattern);

  const isAlphanumeric = ALPHANUMERIC_MASKS.includes(type)
    || (
      (type === 'bank_account' || type === 'bank_branch')
      && ALPHANUMERIC_BANK_CODES.includes(compensationCode as BankCompensationCode)
    );

  const stripped = isAlphanumeric
    ? stripAlphanumeric(value)
    : stripNumeric(value);

  return stripped.length === expected;
}
