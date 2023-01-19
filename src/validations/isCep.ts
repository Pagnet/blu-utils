export default function isCep(value: string | number): boolean {
  const validateCep = /^[0-9]{5}-[0-9]{3}$/;

  return validateCep.test(String(value));
}
