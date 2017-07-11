const re = /[A-Z]/g;
/**
 * @param {string} text
 * @return {string}
 */
function toSnakeCase(text) {
  if (typeof text !== 'string') {
    return text;
  }
  return text.replace(re, (m, i) => (i === 0 ? '' : '_') + m.toLowerCase());
}

module.exports = toSnakeCase;
