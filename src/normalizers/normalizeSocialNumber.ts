export default function normalizeSocialNumber(value: number) {
  const formated = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

  return formated;
}