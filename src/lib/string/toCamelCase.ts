const re = /[-_.]+./g;

export default function toCamelCase(text: string): string {
  return text.toLowerCase().replace(re, m => m.substr(-1, 1).toUpperCase());
}
