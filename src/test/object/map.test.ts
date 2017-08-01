import test from 'ava';
import map from '../../lib/object/map';

test('each', t => {
  const result = map({n1: 1, n2: 2}, (v, k) => {
    return {k, v};
  });
  t.deepEqual(result, [{k: 'n1', v: 1}, {k: 'n2', v: 2}]);
});
