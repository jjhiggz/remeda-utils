import { describe, expect, it } from "vitest";
import { escapeRegExp } from "./escapeRegExp";
import { map } from "remeda";
import { stubString } from "../../test-utils";

describe("escapeRegExp", function () {
  const escaped = "\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\",
    unescaped = "^$.*+?()[]{}|\\";

  it("should escape values", function () {
    expect(escapeRegExp(unescaped + unescaped)).toBe(escaped + escaped);
  });

  it("should handle strings with nothing to escape", function () {
    expect(escapeRegExp("abc")).toBe("abc");
  });

  it("should return an empty string for empty values", function () {
    const values = [, null, undefined, ""],
      expected = map(values, stubString);

    const actual = map.indexed(values, (value, index) => {
      return index ? escapeRegExp(value) : escapeRegExp();
    });

    expect(actual).toEqual(expected);
  });
});
