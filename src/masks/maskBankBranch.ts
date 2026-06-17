import VMasker from 'vanilla-masker';
import { DEFAULT_BANK_BRANCH_MASK } from './masks';
import { stripNumeric } from './strip';

export default function maskBankBranch(
  value: string | null | undefined,
  // Mantido por compatibilidade de API e simetria com maskBankAccount: a
  // agência usa sempre 4 dígitos, independente do banco (o DV, quando há, é
  // calculado pelo backend).
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  compensationCode?: string,
): string {
  if (value === null || value === undefined || value === '') return '';

  const stripped = stripNumeric(String(value));

  return VMasker.toPattern(stripped, DEFAULT_BANK_BRANCH_MASK);
}
