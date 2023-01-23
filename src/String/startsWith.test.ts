import { describe, it } from "vitest";
import {
  MAX_SAFE_INTEGER,
  assertEqual,
  falsey,
  stubTrue,
} from "../../test-utils";
import startsWith from "./startsWith";
import { map } from "remeda";
describe("startsWith", function () {
  var string = "abc";

  it("should return `true` if a string starts with `target`", function () {
    assertEqual(startsWith(string, "a"), true);
  });

  it("should return `false` if a string does not start with `target`", function () {
    assertEqual(startsWith(string, "b"), false);
  });

  it("should work with a `position`", function () {
    assertEqual(startsWith(string, "b", 1), true);
  });

  it("should work with `position` >= `length`", function () {
    [3, 5, MAX_SAFE_INTEGER, Infinity].forEach(function (position) {
      assertEqual(startsWith(string, "a", position), false);
    });
  });

  it("should treat a negative `position` as `0`", function () {
    [-1, -3, -Infinity].forEach(function (position) {
      assertEqual(startsWith(string, "a", position), true);
      assertEqual(startsWith(string, "b", position), false);
    });
  });

  it("should coerce `position` to an integer", function () {
    assertEqual(startsWith(string, "bc", 1.2), true);
  });
});
