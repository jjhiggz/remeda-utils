import { map } from "remeda";
import { describe, expect, it } from "vitest";
import { padEnd } from "./padEnd";
import { assertEqual, stubTrue } from "../../test-utils";
describe("padEnd", function () {
  var string = "abc";

  it("should pad a string to a given length", function () {
    var values = [, undefined],
      expected = map(values, () => "abc   ");

    var actual = map.indexed(values, function (value, index) {
      return index ? padEnd(string, 6, value) : padEnd(string, 6);
    });

    assertEqual(actual, expected);
  });

  it("should truncate pad characters to fit the pad length", function () {
    assertEqual(padEnd(string, 6, "_-"), "abc_-_");
  });

  it("should coerce `string` to a string", function () {
    var values = [Object(string), { toString: () => string }],
      expected = map(values, stubTrue);

    var actual = map(values, function (value) {
      return padEnd(value, 6) === "abc   ";
    });

    assertEqual(actual, expected);
  });
});
