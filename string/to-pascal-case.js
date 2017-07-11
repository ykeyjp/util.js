const re = /[-_.]+./g;
/**
 * @param {string} text
 * @return {string}
 */
function toPascalCase(text) {
  if (typeof text !== 'string') {
    return text;
  }
  return ('_' + text)
    .toLowerCase()
    .replace(re, m => m.substr(-1, 1).toUpperCase());
}

module.exports = toPascalCase;
