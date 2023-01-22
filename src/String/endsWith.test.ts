import { describe, expect, it } from "vitest";
import { map } from "remeda";
import { MAX_SAFE_INTEGER, falsey, stubTrue } from "../../test-utils";
import { endsWith } from "./endsWith";

describe("endsWith", function () {
  var string = "abc";

  it("should return `true` if a string ends with `target`", function () {
    expect(endsWith(string, "c")).toBe(true);
  });

  it("should return `false` if a string does not end with `target`", function () {
    expect(endsWith(string, "b")).toBe(false);
  });

  it("should work with a `position`", function () {
    expect(endsWith(string, "b", 2)).toEqual(true);
  });

  it("should work with `position` >= `length`", function () {
    [3, 5, MAX_SAFE_INTEGER, Infinity].forEach(function (position) {
      expect(endsWith(string, "c", position)).toBe(true);
    });
  });

  it("should treat falsey `position` values, except `undefined`, as `0`", function () {
    const expected = map(falsey, stubTrue);

    const actual = map(falsey, function (position) {
      return endsWith(
        string,
        position === undefined ? "c" : "",
        position as undefined
      );
    });

    expect(actual).toEqual(expected);
  });

  it("should treat a negative `position` as `0`", function () {
    [-1, -3, -Infinity].forEach(function (position) {
      expect(
        string.split("").every(function (chr) {
          return !endsWith(string, chr, position);
        })
      ).toBe(true);
      expect(endsWith(string, "", position)).toBe(true);
    });
  });

  it("should coerce `position` to an integer", function () {
    expect(endsWith(string, "ab", 2.2)).toBe(true);
  });
});
