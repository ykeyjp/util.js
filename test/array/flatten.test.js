import test from 'ava';
import flatten from '../../array/flatten';

test('[1, 2, 3]', t => {
  t.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
});

test('[1, [2, 3], [[4, 5], 6]]', t => {
  t.deepEqual(flatten([1, [2, 3], [[4, 5], 6]]), [1, 2, 3, 4, 5, 6]);
});
