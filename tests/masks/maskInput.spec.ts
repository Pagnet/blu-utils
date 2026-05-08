/**
 * @jest-environment jsdom
 */
import 'jest';

import { maskInput } from '../../src';

describe('maskInput', () => {
  test('aplica máscara ao input quando o usuário digita', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    const teardown = maskInput(input, 'cpf');

    input.value = '93231097037';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(input.value).toBe('932.310.970-37');

    teardown();
    document.body.removeChild(input);
  });

  test('CNPJ alfanumérico via input event', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    const teardown = maskInput(input, 'cnpj');

    input.value = '12abc34501de35';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(input.value).toBe('12.ABC.345/01DE-35');

    teardown();
    document.body.removeChild(input);
  });

  test('teardown remove o listener', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    const teardown = maskInput(input, 'cpf');
    teardown();

    input.value = '93231097037';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    expect(input.value).toBe('93231097037');

    document.body.removeChild(input);
  });

  test('valor inicial já é mascarado ao chamar maskInput', () => {
    const input = document.createElement('input');
    input.value = '93231097037';
    document.body.appendChild(input);

    const teardown = maskInput(input, 'cpf');

    expect(input.value).toBe('932.310.970-37');

    teardown();
    document.body.removeChild(input);
  });
});
