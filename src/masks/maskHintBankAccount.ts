import { BANK_ACCOUNT_MASKS } from './masks';
import type { BankCompensationCode } from './types';

const DEFAULT_HINT = '0000000000-0';

const toHint = (pattern: string): string => pattern.replace(/[9S]/g, '0');

export default function maskHintBankAccount(compensationCode: string): string {
  const pattern = BANK_ACCOUNT_MASKS[compensationCode as BankCompensationCode];

  if (!pattern) return DEFAULT_HINT;

  return toHint(pattern);
}
