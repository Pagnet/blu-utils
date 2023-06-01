export default function maskString(value: string, pattern: string): string {
  if (!value || !pattern) return '';

  let i = 0;

  return pattern
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .replace(/#/g, (_) => value.toString()[i++])
    .replace(/undefined/g, '');
}
