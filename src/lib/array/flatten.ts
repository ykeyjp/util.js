export interface INested<T> extends Array<T | INested<T>> {
  length: number;
}

export default function flatten<T>(arr: INested<T>): T[] {
  return arr.reduce((p: any[], c: any) => {
    return Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c);
  }, []);
}
