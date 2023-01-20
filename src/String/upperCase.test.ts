import { describe, it, expect } from "vitest";
import { upperCase } from "./upperCase";
describe("upperCase", function () {
  it("should uppercase as space-separated words", function () {
    expect(upperCase("--foo-bar--")).toBe("FOO BAR");
    expect(upperCase("fooBar")).toBe("FOO BAR");
    expect(upperCase("__foo_bar__")).toBe("FOO BAR");
  });
});
