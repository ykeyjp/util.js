import test from 'ava';
import toPascalCase from '../../lib/string/toPascalCase';

test('abc-def', t => {
  t.is(toPascalCase('abc-def'), 'AbcDef');
});

test('abc_def', t => {
  t.is(toPascalCase('abc_def'), 'AbcDef');
});

test('abc.def', t => {
  t.is(toPascalCase('abc.def'), 'AbcDef');
});
