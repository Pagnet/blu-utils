import maskValue from './maskValue';
import type { MaskType, CurrencyMaskOptions } from './types';

export default function maskInput(
  input: HTMLInputElement,
  type: MaskType,
  options?: CurrencyMaskOptions,
): () => void {
  if (!input) return () => {};

  const handler = (): void => {
    input.value = maskValue(input.value, type, options);
  };

  input.value = maskValue(input.value, type, options);
  input.addEventListener('input', handler);

  return () => {
    input.removeEventListener('input', handler);
  };
}
