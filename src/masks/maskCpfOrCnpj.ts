import maskValue from './maskValue';

export default function maskCpfOrCnpj(value: string): string {
  return maskValue(value, 'cpf_cnpj');
}
