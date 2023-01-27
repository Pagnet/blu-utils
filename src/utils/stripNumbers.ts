const LOOSE_STRIP_REGEX: RegExp = /[^\d]/g;

/**
 * Format a string of numbers
 * @param number string of numbers to be formatted
 * @param pattern pattern you want to remove, if there is nothing it will follow the default: "/[^\d]/g"
 * @returns a formatted string
 */
export default function stripNumbers(number: string, pattern?: RegExp | undefined): string {
  const regex: RegExp = pattern || LOOSE_STRIP_REGEX;
  return (number || '').replace(regex, '');
}
