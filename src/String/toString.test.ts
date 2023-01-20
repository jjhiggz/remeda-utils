import { map } from "remeda";
import { describe, it, expect } from "vitest";
import { toString } from "./toString";
const stubString = () => "";
describe("toString", function () {
  it("should treat nullish values as empty strings", function () {
    var values = [, null, undefined],
      expected = map(values, stubString);

    var actual = map.indexed(values, (value, index) => {
      return index ? toString(value) : toString();
    });

    expect(actual).toEqual(expected);
  });

  it("should preserve the sign of `0`", function () {
    var values = [-0, Object(-0), 0, Object(0)],
      expected = ["-0", "-0", "0", "0"],
      actual = map(values, toString);

    expect(actual).toEqual(expected);
  });

  it("should preserve the sign of `0` in an array", function () {
    var values = [-0, Object(-0), 0, Object(0)];
    expect(toString(values)).toEqual("-0,-0,0,0");
  });

  it("should handle symbols", function () {
    expect(toString(Symbol("a"))).toBe("Symbol(a)");
  });

  it("should handle an array of symbols", function () {
    expect(toString([Symbol("a")])).toBe("Symbol(a)");
  });
});
