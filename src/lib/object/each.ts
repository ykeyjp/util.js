export default function each<T>(obj: {[key: string]: T}, cb: ((val: T, key: string) => void)): void {
  Object.keys(obj).forEach(key => {
    cb(obj[key], key);
  });
}
