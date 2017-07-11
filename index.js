const toCamelCase = require('./string/to-camel-case');
const toKebabCase = require('./string/to-kebab-case');
const toSnakeCase = require('./string/to-snake-case');
const toPascalCase = require('./string/to-pascal-case');
const flatten = require('./array/flatten');
const clone = require('./object/simple-clone');
const diff = require('./object/simple-diff');
const SimpleEvent = require('./event/simple-event');

module.exports = {
  string: {
    toCamelCase,
    toKebabCase,
    toSnakeCase,
    toPascalCase,
  },
  array: {
    flatten,
  },
  object: {
    clone,
    diff,
  },
  event: {
    SimpleEvent,
  },
};
