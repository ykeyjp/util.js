import test from 'ava';
import each from '../../lib/object/each';

test('each', t => {
  t.plan(2);
  each({n1: 1, n2: 2}, (v, k) => {
    if (k === 'n1') {
      t.is(v, 1);
    } else if (k === 'n2') {
      t.is(v, 2);
    }
  });
});
