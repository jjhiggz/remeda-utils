import { describe, expect, it } from "vitest";
import capitalize from "./capitalize";

describe("capitalize", function () {
  it("should capitalize the first character of a string", function () {
    expect(capitalize("fred")).toBe("Fred");
    expect(capitalize("Fred")).toBe("Fred");
    expect(capitalize(" fred")).toBe(" fred");
  });
});
