const re = /[-_.]+./g;
/**
 * @param {string} text
 * @return {string}
 */
function toCamelCase(text) {
  if (typeof text !== 'string') {
    return text;
  }
  return text.toLowerCase().replace(re, m => m.substr(-1, 1).toUpperCase());
}

module.exports = toCamelCase;
