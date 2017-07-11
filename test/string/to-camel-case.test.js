import test from 'ava';
import toCamelCase from '../../string/to-camel-case';

test('undefined / null', t => {
  t.is(toCamelCase(), undefined);
  t.is(toCamelCase(undefined), undefined);
  t.is(toCamelCase(null), null);
});

test('abc-def', t => {
  t.is(toCamelCase('abc-def'), 'abcDef');
});

test('abc_def', t => {
  t.is(toCamelCase('abc_def'), 'abcDef');
});

test('abc.def', t => {
  t.is(toCamelCase('abc.def'), 'abcDef');
});
