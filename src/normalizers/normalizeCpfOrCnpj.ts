export default function normalizeCpfOrCnpj(value: string): string {
  const valueBase = value.replace(/\D+/g, '');

  if (valueBase.length === 11) {
    return valueBase.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  return valueBase.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    '$1.$2.$3/$4-$5',
  );
}

