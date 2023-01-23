import { describe, expect, it } from "vitest";
import { assertEqual, whitespace } from "../../test-utils";
import { trim } from "./trim";
import { trimStart } from "./trimStart";
import { trimEnd } from "./trimEnd";
import { map } from "remeda";

describe("trim", function () {
  it("should trim whitespace", () => {
    expect(trim("  hello  \n")).toBe("hello");
  });

  it("should trim chars", () => {
    expect(trim("--hello--", "-")).toBe("hello");
    expect(trim("-hello-_-", "-_")).toBe("hello");
  });
});

describe("trimStart", function () {
  it("should trim whitespace at start", () => {
    expect(trimStart(" \n hello")).toBe("hello");
  });

  it("should trim chars", () => {
    expect(trimStart("--hello--", "-")).toBe("hello--");
    expect(trimStart("_--hello-_-", "_-")).toBe("hello-_-");
  });
});

describe("trimEnd", function () {
  it("should trim whitespace at start", () => {
    expect(trimEnd("hello\n   ")).toBe("hello");
  });

  it("should trim chars", () => {
    expect(trimEnd("--hello--", "-")).toBe("--hello");
    expect(trimEnd("_--hello-_-", "_-")).toBe("_--hello");
  });
});
