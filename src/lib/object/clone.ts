interface IRefferenceCache {
  clone: any[];
  orig: any[];
}

export default function clone(src: any): any {
  const refs: IRefferenceCache = {
    clone: [],
    orig: [],
  };
  function deep(s: any): any {
    const t = Object.prototype.toString.call(s).slice(8, -1).toLowerCase();
    if (t === 'object') {
      const index = refs.orig.indexOf(s);
      if (index !== -1) {
        return refs.clone[index];
      }
      const d = Object.assign(Object.create(Object.getPrototypeOf(s)), s);
      const i = refs.orig.length;
      refs.orig[i] = s;
      refs.clone[i] = d;
      Object.keys(s).forEach(key => {
        d[key] = deep(s[key]);
      });
      return d;
    } else if (t === 'array') {
      return s.map((o: any) => deep(o));
    }
    return s;
  }
  const _ = deep(src);
  return _;
}
