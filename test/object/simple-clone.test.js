import test from 'ava';
import clone from '../../object/simple-clone';

test('null / undefined', t => {
  t.is(clone(null), null);
  t.is(clone(undefined), undefined);
});

test('number', t => {
  t.is(clone(1), 1);
  t.is(clone(1.1), 1.1);
});

test('string', t => {
  t.is(clone('string'), 'string');
});

test('function', t => {
  t.is(clone((a => a).toString()), (a => a).toString());
});

test('array', t => {
  t.deepEqual(clone([1, 2, 3]), [1, 2, 3]);
});

test('object', t => {
  const A = {a: 1, b: 's', c: () => {}, d: [1, 2], e: {a: 1}};
  const B = clone(A);
  t.deepEqual(A, B);
  A.a = 2;
  A.b = 'S';
  A.d.push(3);
  A.e.a = 2;
  t.notDeepEqual(A, B);
});

test('object / circular', t => {
  const A = {a: 1};
  A.b = A;
  const B = clone(A);
  t.deepEqual(A, B);
});
