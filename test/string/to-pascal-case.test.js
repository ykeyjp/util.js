import test from 'ava';
import toPascalCase from '../../string/to-pascal-case';

test('undefined / null', t => {
  t.is(toPascalCase(), undefined);
  t.is(toPascalCase(undefined), undefined);
  t.is(toPascalCase(null), null);
});

test('abc-def', t => {
  t.is(toPascalCase('abc-def'), 'AbcDef');
});

test('abc_def', t => {
  t.is(toPascalCase('abc_def'), 'AbcDef');
});

test('abc.def', t => {
  t.is(toPascalCase('abc.def'), 'AbcDef');
});
