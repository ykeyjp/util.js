import test from 'ava';
import toSnakeCase from '../../string/to-snake-case';

test('undefined / null', t => {
  t.is(toSnakeCase(), undefined);
  t.is(toSnakeCase(undefined), undefined);
  t.is(toSnakeCase(null), null);
});

test('AbcDef', t => {
  t.is(toSnakeCase('AbcDef'), 'abc_def');
});
