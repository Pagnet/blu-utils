export default function camelToSnakeCase(camel: string | string[]): string | string[] {
  const toSnake = (str: string) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

  if (typeof camel === 'string') {
    return toSnake(camel);
  }

  return camel.map((c) => toSnake(c));
}
