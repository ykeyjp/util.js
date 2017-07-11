import test from 'ava';
import toKebabCase from '../../string/to-kebab-case';

test('undefined / null', t => {
  t.is(toKebabCase(), undefined);
  t.is(toKebabCase(undefined), undefined);
  t.is(toKebabCase(null), null);
});

test('AbcDef', t => {
  t.is(toKebabCase('AbcDef'), 'abc-def');
});
