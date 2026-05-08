import { cnpj } from 'cpf-cnpj-validator';

/**
 * Valida um CNPJ (numérico ou alfanumérico).
 *
 * Aceita o formato legado (14 dígitos) e o novo formato alfanumérico da
 * Nota Técnica RFB 49/2024 (12 alfanuméricos + 2 dígitos verificadores).
 *
 * @param value CNPJ a ser validado, com ou sem formatação.
 * @param _strict @deprecated Parâmetro mantido por retrocompatibilidade —
 *   `cpf-cnpj-validator` aceita ambos os formatos sem necessidade de flag.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function isCnpj(value: string, _strict?: boolean): boolean {
  if (!value) return false;
  return cnpj.isValid(value.toUpperCase());
}
