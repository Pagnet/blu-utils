import { BANK_ACCOUNT_MASKS, DEFAULT_BANK_ACCOUNT_MASK } from './masks';
import type { BankCompensationCode } from './types';

const toHint = (pattern: string): string => pattern.replace(/[9S]/g, '0');

const DEFAULT_HINT = toHint(DEFAULT_BANK_ACCOUNT_MASK);

export default function maskHintBankAccount(compensationCode: string): string {
  const pattern = BANK_ACCOUNT_MASKS[compensationCode as BankCompensationCode];

  if (!pattern) return DEFAULT_HINT;

  return toHint(pattern);
}
