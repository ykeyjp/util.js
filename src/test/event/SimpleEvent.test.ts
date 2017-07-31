import test from "ava";
import SimpleEvent from "../../lib/event/SimpleEvent";

test("on -> trigger", t => {
  const e = new SimpleEvent();
  e.on("ev1", data => {
    t.deepEqual(data, {value: 1});
  });
  e.trigger("ev1", {value: 1});
});

test("on -> off -> trigger", t => {
  t.plan(0);
  const e = new SimpleEvent();
  const fn = () => {
    t.fail();
  };
  e.on("ev1", fn);
  e.off("ev1", fn);
  e.trigger("ev1");
});

test("on -> off(all) -> trigger", t => {
  t.plan(0);
  const e = new SimpleEvent();
  e.on("ev1", () => {
    t.fail();
  });
  e.off("ev1");
  e.trigger("ev1");
});

test("on -> reset -> trigger", t => {
  t.plan(0);
  const e = new SimpleEvent();
  e.on("ev1", () => {
    t.fail();
  });
  e.reset();
  e.trigger("ev1");
});

test("on(2) -> trigger", t => {
  t.plan(6);
  const e = new SimpleEvent();
  e.on("ev1", () => {
    t.pass();
  });
  e.on("ev1", () => {
    t.pass();
  });
  e.trigger("ev1");
  e.off("ev1", () => {});
  e.trigger("ev1");
  e.off("ev2", () => {});
  e.trigger("ev1");
});
