import { stripNumbers } from "../";

const BLACKLIST: Array<string> = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
];

const WEIGHTS_PER_DIGIT: Array<number> = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

const STRICT_STRIP_REGEX: RegExp = /[-\\/.]/g;

function verifierDigit(digits: string): number {
  const sum = digits.split('').reduce((buffer: any, number: string, index: number) => {
    if (index === 10) return buffer;

    return (parseInt(number, 10) * WEIGHTS_PER_DIGIT[index]) + parseInt(buffer, 10);
  }, 0);

  const mod: number = sum % 11;

  let verified: number = 11 - mod;

  if ([10, 11].some(exclude => verified === exclude)) {
    verified = 0;
  }

  return verified;
}

/**
 * checks if the number is a PIS (NIS, NIT ou PASEP)
 * @param number sequence of numbers to be validated
 * @param strict parameter for strict validations
 * @returns boolean
 */
export default function isPis(number: string, strict?: boolean): boolean {
  const regex: RegExp | undefined = strict ? STRICT_STRIP_REGEX : undefined;
  const stripped: string = stripNumbers(number, regex);
  
  const digit: number = parseInt(stripped.slice(-1), 10);

  if (!stripped || stripped.length > 11 || BLACKLIST.includes(stripped)) return false;

  const verified = verifierDigit(stripped);

  return verified === digit;
}
