import { stripAlphanumeric } from '../masks/strip';

/**
 * Sanitiza um CPF/CNPJ removendo os separadores da máscara (qualquer caractere
 * não-alfanumérico: `.`, `/`, `-`, espaços) e normalizando para upper-case,
 * **preservando as letras** do CNPJ alfanumérico (Receita Federal —
 * Nota Técnica NT 49/2024, vigente a partir de 2026).
 *
 * Use no lugar de `stripNumbers` / `value.replace(/\D/g, '')` em qualquer fluxo
 * de CNPJ (validação, envio, lookup, navegação): essas abordagens descartam as
 * letras A–Z e transformam um CNPJ alfanumérico válido em um identificador
 * inválido.
 *
 * É o inverso de {@link normalizeCpfOrCnpj} (que aplica a máscara visual).
 *
 * @example
 * stripCpfCnpj('824.007.050-70');     // '82400705070'  (CPF)
 * stripCpfCnpj('12.345.678/0001-95'); // '12345678000195' (CNPJ numérico)
 * stripCpfCnpj('AB.345.678/XY01-74'); // 'AB345678XY0174' (CNPJ alfanumérico)
 * stripCpfCnpj('ab.345.678/xy01-74'); // 'AB345678XY0174' (normaliza upper-case)
 * stripCpfCnpj(undefined);            // ''
 */
export default function stripCpfCnpj(value?: string): string {
  return stripAlphanumeric(value ?? '');
}
