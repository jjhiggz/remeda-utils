import { describe, it, expect } from "vitest";
import { upperCase } from "./upperCase";
import { pipe } from "remeda";
describe("upperCase", function () {
  it("should uppercase as space-separated words", function () {
    expect(upperCase("--foo-bar--")).toBe("FOO BAR");
    expect(upperCase("fooBar")).toBe("FOO BAR");
    expect(upperCase("__foo_bar__")).toBe("FOO BAR");
    expect(pipe("__foo_bar__", upperCase)).toBe("FOO BAR");
  });
});
