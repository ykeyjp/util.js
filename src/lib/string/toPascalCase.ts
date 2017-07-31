const re = /[-_.]+./g;

export default function toPascalCase(text: string): string {
  return ('_' + text)
    .toLowerCase()
    .replace(re, m => m.substr(-1, 1).toUpperCase());
}
