import { describe, it, expect } from "vitest";
import { lowerFirst } from "./lowerFirst";

describe("lowerFirst", function () {
  it("should lowercase only the first character", function () {
    expect(lowerFirst("fred")).toBe("fred");
    expect(lowerFirst("Fred")).toBe("fred");
    expect(lowerFirst("FRED")).toBe("fRED");
  });
});
