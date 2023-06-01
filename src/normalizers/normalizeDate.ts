type DateTypes = 'bigger' | 'long' | 'numeric';

export default function normalizeDate(date: string, type: DateTypes = 'numeric'): string {
  const options: Record<DateTypes, object> = {
    bigger: {
      weekday: 'long',
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'America/Sao_Paulo',
      timeZoneName: 'long',
    },
    long: {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    numeric: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },
  };


  const dateFormatted = (): Date => {
    const d = new Date(date);
    const tzOffset = d.getTimezoneOffset();
    d.setTime(d.getTime() + tzOffset * 60 * 1000);
    return d;
  };

  const formatter = dateFormatted().toLocaleDateString('pt-BR', options[type]);

  return formatter;
}
