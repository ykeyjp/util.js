export default function flatten(arr: any[]): any[] {
  return arr.reduce((p: any[], c: any) => {
    return Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c);
  }, []);
}
