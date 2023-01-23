import { describe, it } from "vitest";
import { assertEqual } from "../../test-utils";
import { split } from "./split";
import { map } from "remeda";

describe("split", function () {
  it("should split a string by `separator`", function () {
    let string = "abcde";
    assertEqual(split(string, "c"), ["ab", "de"]);
    assertEqual(split(string, /[bd]/), ["a", "c", "e"]);
    assertEqual(split(string, "", 2), ["a", "b"]);
  });

  it("should return an array containing an empty string for empty values", function () {
    assertEqual(split("", ""), []);
  });
});
