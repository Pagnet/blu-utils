import 'jest';

import { getStates } from '../src';

describe('test getStates', () => {
  test('spec response getStates', () => {
    expect(getStates()).toStrictEqual([
      {
        id_uf: 1,
        uf: 'AC',
        name: 'Acre',
        code: 12,
      },
      {
        id_uf: 2,
        uf: 'AL',
        name: 'Alagoas',
        code: 27,
      },
      {
        id_uf: 3,
        uf: 'AM',
        name: 'Amazonas',
        code: 13,
      },
      {
        id_uf: 4,
        uf: 'AP',
        name: 'Amapá',
        code: 16,
      },
      {
        id_uf: 5,
        uf: 'BA',
        name: 'Bahia',
        code: 29,
      },
      {
        id_uf: 6,
        uf: 'CE',
        name: 'Ceará',
        code: 23,
      },
      {
        id_uf: 7,
        uf: 'DF',
        name: 'Distrito Federal',
        code: 53,
      },
      {
        id_uf: 8,
        uf: 'ES',
        name: 'Espírito Santo',
        code: 32,
      },
      {
        id_uf: 9,
        uf: 'GO',
        name: 'Goiás',
        code: 52,
      },
      {
        id_uf: 10,
        uf: 'MA',
        name: 'Maranhão',
        code: 21,
      },
      {
        id_uf: 11,
        uf: 'MG',
        name: 'Minas Gerais',
        code: 31,
      },
      {
        id_uf: 12,
        uf: 'MS',
        name: 'Mato Grosso do Sul',
        code: 50,
      },
      {
        id_uf: 13,
        uf: 'MT',
        name: 'Mato Grosso',
        code: 51,
      },
      {
        id_uf: 14,
        uf: 'PA',
        name: 'Pará',
        code: 15,
      },
      {
        id_uf: 15,
        uf: 'PB',
        name: 'Paraíba',
        code: 25,
      },
      {
        id_uf: 16,
        uf: 'PE',
        name: 'Pernambuco',
        code: 26,
      },
      {
        id_uf: 17,
        uf: 'PI',
        name: 'Piauí',
        code: 22,
      },
      {
        id_uf: 18,
        uf: 'PR',
        name: 'Paraná',
        code: 41,
      },
      {
        id_uf: 19,
        uf: 'RJ',
        name: 'Rio de Janeiro',
        code: 33,
      },
      {
        id_uf: 20,
        uf: 'RN',
        name: 'Rio Grande do Norte',
        code: 24,
      },
      {
        id_uf: 21,
        uf: 'RO',
        name: 'Rondônia',
        code: 11,
      },
      {
        id_uf: 22,
        uf: 'RR',
        name: 'Roraima',
        code: 14,
      },
      {
        id_uf: 23,
        uf: 'RS',
        name: 'Rio Grande do Sul',
        code: 43,
      },
      {
        id_uf: 24,
        uf: 'SC',
        name: 'Santa Catarina',
        code: 42,
      },
      {
        id_uf: 25,
        uf: 'SE',
        name: 'Sergipe',
        code: 28,
      },
      {
        id_uf: 26,
        uf: 'SP',
        name: 'São Paulo',
        code: 35,
      },
      {
        id_uf: 27,
        uf: 'TO',
        name: 'Tocantins',
        code: 17,
      },
    ]);
  });
});
