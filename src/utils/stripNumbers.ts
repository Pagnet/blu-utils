const LOOSE_STRIP_REGEX: RegExp = /[^\d]/g;

export default function stripNumbers(number: string, pattern?: RegExp | undefined): string {
  const regex: RegExp = pattern || LOOSE_STRIP_REGEX;
  return (number || '').replace(regex, '');
}
