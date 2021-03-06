export interface IDiffResult {
  add: string[];
  change: string[];
  remove: string[];
  differ: boolean;
}

export default function diff(A: any, B: any): IDiffResult {
  const keysA = Object.keys(A);
  const keysB = Object.keys(B);
  const removed = keysA.filter(name => keysB.indexOf(name) === -1);
  const added = keysB.filter(name => keysA.indexOf(name) === -1);
  const changed = keysA.filter(name => {
    if (added.indexOf(name) !== -1 || removed.indexOf(name) !== -1) {
      return false;
    }
    if (
      A[name] instanceof Function ||
      B[name] instanceof Function ||
      A[name] instanceof Promise ||
      B[name] instanceof Promise
    ) {
      return A[name] !== B[name];
    }
    return JSON.stringify(A[name]) !== JSON.stringify(B[name]);
  });
  return {
    add: added,
    change: changed,
    differ: added.length > 0 || removed.length > 0 || changed.length > 0,
    remove: removed,
  };
}
