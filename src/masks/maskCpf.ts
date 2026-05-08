import maskValue from './maskValue';

export default function maskCpf(cpf: string): string {
  return maskValue(cpf, 'cpf');
}
