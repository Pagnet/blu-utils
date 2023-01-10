export default function maskString(value: string, pattern: string): string {
  if (!value || !pattern) return '--';

  let i = 0;

  return pattern
    .replace(/#/g, _ => value.toString()[i++])
    .replace(/undefined/g, '');
}
