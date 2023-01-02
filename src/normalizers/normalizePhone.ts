import maskString from '../utils/maskString';

export default function normalizePhone(value: string, ddi?: boolean): string {
  return maskString(value, `${ddi && '### '}(##) #####-####`);
}
