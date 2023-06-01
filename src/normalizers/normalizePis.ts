import maskString from '../utils/maskString';

export default function normalizePis(
  value: string,
): string | boolean {
  if (value?.length === 11) {
    return maskString(value, '###.#####.##-#');
  }

  return false;
}
