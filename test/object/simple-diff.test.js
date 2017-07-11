import test from 'ava';
import diff from '../../object/simple-diff';

test('nochange', t => {
  const fn = () => {};
  t.deepEqual(diff({A: 1, B: fn}, {A: 1, B: fn}), {
    add: [],
    change: [],
    remove: [],
    differ: false,
  });
});

test('add', t => {
  t.deepEqual(diff({A: 1}, {A: 1, B: 1}), {
    add: ['B'],
    change: [],
    remove: [],
    differ: true,
  });
});

test('change', t => {
  t.deepEqual(diff({A: 1}, {A: 2}), {
    add: [],
    change: ['A'],
    remove: [],
    differ: true,
  });
});

test('remove', t => {
  t.deepEqual(diff({A: 1, B: 1}, {A: 1}), {
    add: [],
    change: [],
    remove: ['B'],
    differ: true,
  });
});
