import { describe, it } from "vitest";
import assert from "assert";
import { map } from "remeda";
import { assertEqual, falsey, stubThree } from "../../test-utils.js";
import { repeat } from "./repeat.js";

describe("repeat", function () {
  var string = "abc";

  it("should repeat a string `n` times", function () {
    assertEqual(repeat("*", 3), "***");
    assertEqual(repeat(string, 2), "abcabc");
  });

  it("should return an empty string if `n` is <= `0`", function () {
    assertEqual(repeat(string, 0), "");
    assertEqual(repeat(string, -2), "");
  });

  it("should work as an iteratee for methods like `_.map`", function () {
    var actual = map(["a", "b", "c"], (n) => repeat(n));
    assert.deepStrictEqual(actual, ["a", "b", "c"]);
  });
});
