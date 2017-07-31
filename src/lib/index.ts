import flatten from './array/flatten';
import SimpleEvent from './event/SimpleEvent';
import clone from './object/clone';
import diff from './object/diff';
import {IDiffResult} from './object/diff-type';
import toCamelCase from './string/toCamelCase';
import toKebabCase from './string/toKebabCase';
import toPascalCase from './string/toPascalCase';
import toSnakeCase from './string/toSnakeCase';

export default {
  array: {flatten},
  event: {SimpleEvent},
  object: {clone, diff},
  string: {
    toCamelCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
  },
};
