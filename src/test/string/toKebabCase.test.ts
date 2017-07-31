import test from "ava";
import toKebabCase from "../../lib/string/toKebabCase";

test("AbcDef", t => {
  t.is(toKebabCase("AbcDef"), "abc-def");
});
