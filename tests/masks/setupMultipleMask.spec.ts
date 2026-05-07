/**
 * @jest-environment jsdom
 */
import 'jest';

import { setupMultipleMask } from '../../src';

describe('setupMultipleMask', () => {
  test('aplica CPF quando ≤11 chars limpos', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    const teardown = setupMultipleMask(input);

    input.value = '93231097037';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(input.value).toBe('932.310.970-37');

    teardown();
    document.body.removeChild(input);
  });

  test('transição CPF → CNPJ ao digitar 12º caractere', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    const teardown = setupMultipleMask(input);

    input.value = '932310970371';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(input.value).toBe('93.231.097/0371');

    teardown();
    document.body.removeChild(input);
  });

  test('CNPJ alfanumérico via setupMultipleMask', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    const teardown = setupMultipleMask(input);

    input.value = '12abc34501de35';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(input.value).toBe('12.ABC.345/01DE-35');

    teardown();
    document.body.removeChild(input);
  });
});
