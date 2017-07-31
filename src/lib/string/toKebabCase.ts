const re = /[A-Z]/g;

export default function toKebabCase(text: string): string {
  return text.replace(re, (m, i) => (i === 0 ? '' : '-') + m.toLowerCase());
}
