import test from 'ava';
import diff from '../../lib/object/diff';

test('nochange', t => {
  const fn = () => {};
  t.deepEqual(diff({A: 1, B: fn}, {A: 1, B: fn}), {
    add: [],
    change: [],
    differ: false,
    remove: [],
  });
});

test('add', t => {
  t.deepEqual(diff({A: 1}, {A: 1, B: 1}), {
    add: ['B'],
    change: [],
    differ: true,
    remove: [],
  });
});

test('change', t => {
  t.deepEqual(diff({A: 1}, {A: 2}), {
    add: [],
    change: ['A'],
    differ: true,
    remove: [],
  });
});

test('remove', t => {
  t.deepEqual(diff({A: 1, B: 1}, {A: 1}), {
    add: [],
    change: [],
    differ: true,
    remove: ['B'],
  });
});
