import assert from "assert";
import { describe, it } from "vitest";
import { toUpper } from "./toUpper";

describe("toUpper", function () {
  it("should convert whole string to upper case", function () {
    assert.deepStrictEqual(toUpper("--Foo-Bar"), "--FOO-BAR");
    assert.deepStrictEqual(toUpper("fooBar"), "FOOBAR");
    assert.deepStrictEqual(toUpper("__FOO_BAR__"), "__FOO_BAR__");
  });
});
