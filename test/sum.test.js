import test from "node:test";
import assert from "node:assert/strict";
import { sum } from "../src/sum.js";

test("sum(1, 2) 应返回 3", () => {
  assert.equal(sum(1, 2), 3);
});

test("sum(-1, -2) 应返回 -3", () => {
  assert.equal(sum(-1, -2), -3);
});

test("sum(0, 5) 应返回 5", () => {
  assert.equal(sum(0, 5), 5);
});
