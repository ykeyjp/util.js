export default function map<T1, T2>(obj: {[key: string]: T1}, cb: ((val: T1, key: string) => T2)): T2[] {
  return Object.keys(obj).map(key => {
    return cb(obj[key], key);
  });
}
