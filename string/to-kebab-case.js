const re = /[A-Z]/g;
/**
 * @param {string} text
 * @return {string}
 */
function toKebabCase(text) {
  if (typeof text !== 'string') {
    return text;
  }
  return text.replace(re, (m, i) => (i === 0 ? '' : '-') + m.toLowerCase());
}

module.exports = toKebabCase;
