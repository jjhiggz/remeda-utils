import { describe, it, expect } from "vitest";
import { map } from "remeda";
import { deburr } from "./deburr";
import { burredLetters, comboMarks, deburredLetters } from "../../test-utils";

describe("deburr", function () {
  it("should convert Latin Unicode letters to basic Latin", function () {
    var actual = map(burredLetters, deburr);
    expect(actual).toEqual(deburredLetters);
  });

  it("should not deburr Latin mathematical operators", function () {
    var operators = ["\xd7", "\xf7"],
      actual = map(operators, deburr);

    expect(actual).toEqual(operators);
  });

  it("should deburr combining diacritical marks", function () {
    var expected = map(comboMarks, (n) => "ei");

    var actual = map(comboMarks, function (chr) {
      return deburr("e" + chr + "i");
    });

    expect(actual).toEqual(expected);
  });
});
