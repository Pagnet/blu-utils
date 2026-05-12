import VMasker from 'vanilla-masker';
import { BANK_BRANCH_MASKS, DEFAULT_BANK_BRANCH_MASK } from './masks';
import { stripNumeric } from './strip';
import type { BankCompensationCode } from './types';

export default function maskBankBranch(
  value: string | null | undefined,
  compensationCode?: string,
): string {
  if (value === null || value === undefined || value === '') return '';

  const stripped = stripNumeric(String(value));
  const pattern = BANK_BRANCH_MASKS[compensationCode as BankCompensationCode]
    ?? DEFAULT_BANK_BRANCH_MASK;

  return VMasker.toPattern(stripped, pattern);
}
