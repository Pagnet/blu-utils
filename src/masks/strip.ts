export const ALPHANUMERIC_STRIP_REGEX = /[^A-Za-z0-9]/g;
export const NUMERIC_STRIP_REGEX = /\D/g;
export const PATTERN_PLACEHOLDER_REGEX = /[9AS#]/g;

export const stripAlphanumeric = (value: string): string => value.replace(ALPHANUMERIC_STRIP_REGEX, '').toUpperCase();

export const stripNumeric = (value: string): string => value.replace(NUMERIC_STRIP_REGEX, '');
