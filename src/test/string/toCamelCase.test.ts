import test from "ava";
import toCamelCase from "../../lib/string/toCamelCase";

test("abc-def", t => {
  t.is(toCamelCase("abc-def"), "abcDef");
});

test("abc_def", t => {
  t.is(toCamelCase("abc_def"), "abcDef");
});

test("abc.def", t => {
  t.is(toCamelCase("abc.def"), "abcDef");
});
