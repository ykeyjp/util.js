import flatten, {INested} from './array/flatten';
import SimpleEvent from './event/SimpleEvent';
import clone from './object/clone';
import diff, {IDiffResult} from './object/diff';
import each from './object/each';
import map from './object/map';
import toCamelCase from './string/toCamelCase';
import toKebabCase from './string/toKebabCase';
import toPascalCase from './string/toPascalCase';
import toSnakeCase from './string/toSnakeCase';

export default {
  array: {flatten},
  event: {SimpleEvent},
  object: {clone, diff, each, map},
  string: {
    toCamelCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
  },
};

export {
  flatten,
  SimpleEvent,
  clone,
  diff,
  each,
  map,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  INested,
  IDiffResult,
};
