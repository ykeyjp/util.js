/**
 * @param {any[]} arr
 */
function flatten(arr) {
  return arr.reduce(
    (p, c) => (Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c)),
    []
  );
}

module.exports = flatten;
