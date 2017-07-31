const re = /[A-Z]/g;

export default function toSnakeCase(text: string) {
  return text.replace(re, (m, i) => (i === 0 ? '' : '_') + m.toLowerCase());
}
