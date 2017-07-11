/**
 * @param {any} obj
 * @return {any}
 */
function clone(src) {
  const refs = {
    orig: [],
    clone: [],
  };
  function deep(s) {
    const t = Object.prototype.toString.call(s).slice(8, -1).toLowerCase();
    if (t === 'object') {
      const index = refs.orig.indexOf(s);
      if (index !== -1) {
        return refs.clone[index];
      }
      const d = Object.assign({}, s);
      const i = refs.orig.length;
      refs.orig[i] = s;
      refs.clone[i] = d;
      Object.keys(s).forEach(key => {
        d[key] = deep(s[key]);
      });
      return d;
    } else if (t === 'array') {
      return s.map(o => deep(o));
    }
    return s;
  }
  const _ = deep(src);
  delete refs.orig;
  delete refs.clone;
  return _;
}

module.exports = clone;
