type Types = 'bigger' | 'long' | 'numeric';

export default function normalizeDate(date: string, type: Types = 'numeric') {
  const bigger = () => new Date(`${date}Z`).toLocaleString('pt-BR', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Sao_Paulo',
    timeZoneName: 'long',
  });

  const long = () => new Date(date).toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const numeric = () => new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const func: any = {
    bigger,
    long,
    numeric,
  };

  return func[type]();
}
