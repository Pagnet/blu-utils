export default function normalizeMoney(value: string | number): string {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
      currency: "BRL"
  }).format(Number(value));

  return formatted;
}
