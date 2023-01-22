import { map } from "remeda";
import { describe, it, expect } from "vitest";
import { pad } from "./pad";
import { stubTrue } from "../../test-utils";
describe("pad", function () {
  var string = "abc";

  it("should pad a string to a given length", function () {
    const values = [, undefined];
    const expected = map(values, () => " abc  ");

    let actual = map.indexed(values, function (value, index) {
      return index ? pad(string, 6, value) : pad(string, 6);
    });

    expect(actual).toEqual(expected);
  });

  it("should truncate pad characters to fit the pad length", function () {
    expect(pad(string, 8)).toBe("  abc   ");
    expect(pad(string, 8, "_-")).toBe("_-abc_-_");
  });

  it("should coerce `string` to a string", function () {
    var values = [Object(string), { toString: () => string }],
      expected = map(values, stubTrue);

    var actual = map(values, function (value) {
      return pad(value, 6) === " abc  ";
    });

    expect(actual).toEqual(expected);
  });
});
