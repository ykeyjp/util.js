import test from 'ava';
import toSnakeCase from '../../lib/string/toSnakeCase';

test('AbcDef', t => {
  t.is(toSnakeCase('AbcDef'), 'abc_def');
});
