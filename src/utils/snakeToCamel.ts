function toCamel(str: string) {
  return str.replace(/([-_][a-z])/gi, ($1: string) => {
    const upperCase = $1.toUpperCase().replace('-', '').replace('_', '');
    return upperCase;
  });
}

function isObject(obj: object) {
  return (
    obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function'
  );
}

export default function snakeToCamel(obj: object): object {
  if (isObject(obj)) {
    const n: any = {};

    Object.keys(obj).forEach((k: string) => {
      const converted = toCamel(k);

      n[converted as keyof typeof n] = snakeToCamel(obj[k as keyof typeof obj]);
    });

    return n;
  }
  if (Array.isArray(obj)) {
    return obj.map((i: any) => snakeToCamel(i));
  }

  return obj;
}
