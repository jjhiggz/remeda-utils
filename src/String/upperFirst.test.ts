import { describe, it, expect } from "vitest";
import upperFirst from "./upperFirst";

describe("upperFirst", function () {
  it("should uppercase only the first character", function () {
    expect(upperFirst("fred")).toBe("Fred");
    expect(upperFirst("Fred")).toBe("Fred");
    expect(upperFirst("FRED")).toBe("FRED");
  });
});
