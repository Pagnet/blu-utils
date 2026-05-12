import VMasker from 'vanilla-masker';
import { BANK_ACCOUNT_MASKS, DEFAULT_BANK_ACCOUNT_MASK } from './masks';
import { stripAlphanumeric, stripNumeric } from './strip';
import type { BankCompensationCode } from './types';

const ALPHANUMERIC_CODES: ReadonlyArray<BankCompensationCode> = ['1'];

export default function maskBankAccount(
  value: string | null | undefined,
  compensationCode?: string,
): string {
  if (value === null || value === undefined || value === '') return '';

  const code = compensationCode as BankCompensationCode;
  const pattern = BANK_ACCOUNT_MASKS[code] ?? DEFAULT_BANK_ACCOUNT_MASK;
  const stripped = ALPHANUMERIC_CODES.includes(code)
    ? stripAlphanumeric(String(value))
    : stripNumeric(String(value));

  return VMasker.toPattern(stripped, pattern);
}
