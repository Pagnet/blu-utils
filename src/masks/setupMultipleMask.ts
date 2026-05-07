import maskCpfOrCnpj from './maskCpfOrCnpj';

export default function setupMultipleMask(input: HTMLInputElement): () => void {
  if (!input) return () => {};

  const handler = (): void => {
    input.value = maskCpfOrCnpj(input.value);
  };

  input.value = maskCpfOrCnpj(input.value);
  input.addEventListener('input', handler);

  return () => {
    input.removeEventListener('input', handler);
  };
}
