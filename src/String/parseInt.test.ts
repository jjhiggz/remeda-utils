import { describe, it } from "vitest";
import { assertEqual, stubZero } from "../../test-utils.js";
import { map, range } from "remeda";
import { parseInt } from "./parseInt.js";
import { lodashBizarro } from "../../bad-test-utils.js";

describe("parseInt", function () {
  it("should accept a `radix`", function () {
    var expected = range(2, 37);

    var actual = map(expected, function (radix) {
      return parseInt("10", radix);
    });

    assertEqual(actual, expected);
  });

  it("should use a radix of `10`, for non-hexadecimals, if `radix` is `undefined` or `0`", function () {
    assertEqual(parseInt("10"), 10);
    assertEqual(parseInt("10", 0), 10);
    assertEqual(parseInt("10", 10), 10);
    assertEqual(parseInt("10", undefined), 10);
  });

  it("should use a radix of `16`, for hexadecimals, if `radix` is `undefined` or `0`", function () {
    ["0x20", "0X20"].forEach(function (string) {
      assertEqual(parseInt(string), 32);
      assertEqual(parseInt(string, 0), 32);
      assertEqual(parseInt(string, 16), 32);
      assertEqual(parseInt(string, undefined), 32);
    });
  });

  it("should use a radix of `10` for string with leading zeros", function () {
    assertEqual(parseInt("08"), 8);
    assertEqual(parseInt("08", 10), 8);
  });

  //   todo fix this test
  //   it("should parse strings with leading whitespace", function () {
  //     var expected = [8, 8, 10, 10, 32, 32, 32, 32];

  //     lodashStable.times(2, function (index) {
  //       var actual = [],
  //         func = (index ? lodashBizarro || {} : _).parseInt;

  //       if (func) {
  //         lodashStable.times(2, function (otherIndex) {
  //           var string = otherIndex ? "10" : "08";
  //           actual.push(func(whitespace + string, 10), func(whitespace + string));
  //         });

  //         lodashStable.each(["0x20", "0X20"], function (string) {
  //           actual.push(func(whitespace + string), func(whitespace + string, 16));
  //         });

  //         assertEqual(actual, expected);
  //       }
  //     });
  //   });

  it("should coerce `radix` to a number", function () {
    var object = { valueOf: stubZero };
    assertEqual(parseInt("08", object as any), 8);
    assertEqual(parseInt("0x20", object as any), 32);
  });

  it("should work as an iteratee for methods like `_.map`", function () {
    var strings = map(["6", "08", "10"], Object),
      actual = map(strings, parseInt);

    assertEqual(actual, [6, 8, 10]);

    actual = map("123".split(""), parseInt);
    assertEqual(actual, [1, 2, 3]);
  });
});
