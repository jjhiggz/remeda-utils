import assert from "assert";
import { expect, describe, it } from "vitest";
import { assertEqual, stubTrue } from "../../test-utils.js";
import { map } from "remeda";
import { padStart } from "./padStart.js";

describe("padStart", function () {
  var string = "abc";

  it("should pad a string to a given length", function () {
    var values = [, undefined],
      expected = map(values, () => "   abc");

    var actual = map.indexed(values, function (value, index) {
      return index ? padStart(string, 6, value) : padStart(string, 6);
    });

    assertEqual(actual, expected);
  });

  it("should truncate pad characters to fit the pad length", function () {
    assertEqual(padStart(string, 6, "_-"), "_-_abc");
  });

  it("should coerce `string` to a string", function () {
    var values = [Object(string), { toString: () => string }],
      expected = map(values, stubTrue);

    var actual = map(values, function (value) {
      return padStart(value, 6) === "   abc";
    });

    assert.deepStrictEqual(actual, expected);
  });
});
