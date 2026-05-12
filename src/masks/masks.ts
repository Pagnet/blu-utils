import type { CurrencyMaskOptions, BankCompensationCode } from './types';

export const MASKS = {
  CPF: '999.999.999-99',
  CNPJ: 'SS.SSS.SSS/SSSS-99',
  CPF_CNPJ: '999.999.999-99',
  PHONE: '(99) 99999-9999',
  PHONE_IDD: '+99 (99) 99999-9999',
  ZIPCODE: '99999-999',
  DATE: '99/99/9999',
  BAR_CODE: '99999.99999 99999.999999 99999.999999 9 99999999999999',
  BAR_CODE_UTILITIES: '999999999999 999999999999 999999999999 999999999999',
  DARF: '99 9 99 999999-99',
  NUMBER: '999999999999',
} as const;

export const CURRENCY_MASK_DEFAULTS: CurrencyMaskOptions = {
  precision: 2,
  separator: ',',
  delimiter: '.',
  unit: '',
  zeroCents: false,
};

export const PERCENTAGE_MASK_DEFAULTS: CurrencyMaskOptions = {
  precision: 2,
  separator: ',',
  delimiter: '.',
  suffixUnit: '%',
  zeroCents: false,
};

export const BANK_BRANCH_MASKS: Partial<Record<BankCompensationCode, string>> = {
  341: '99999-9',
};

export const DEFAULT_BANK_BRANCH_MASK = '9999';

export const BANK_ACCOUNT_MASKS: Record<BankCompensationCode, string> = {
  1: '99999999-S',
  33: '99999999-9',
  41: '999999999-9',
  104: '999999999999-9',
  213: '9999999-9',
  237: '9999999-9',
  341: '99999-9',
  399: '999999-9',
  745: '9999999-9',
};

export const DEFAULT_BANK_ACCOUNT_MASK = '999999999999-9';
