export type MaskType =
  | 'cpf'
  | 'cnpj'
  | 'cpf_cnpj'
  | 'phone'
  | 'zipcode'
  | 'date'
  | 'barCode'
  | 'barCodeUtilities'
  | 'darf'
  | 'number'
  | 'currency'
  | 'percentage'
  | 'bank_branch'
  | 'bank_account';

export interface CurrencyMaskOptions {
  precision?: number;
  separator?: string;
  delimiter?: string;
  unit?: string;
  suffixUnit?: string;
  zeroCents?: boolean;
}

export type BankCompensationCode =
  | '1'
  | '33'
  | '41'
  | '104'
  | '213'
  | '237'
  | '341'
  | '399'
  | '745';
