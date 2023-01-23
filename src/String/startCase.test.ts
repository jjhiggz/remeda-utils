import { describe, it } from "vitest";
import { assertEqual } from "../../test-utils";
import startCase from "./startCase";

describe("startCase", function () {
  it("should uppercase only the first character of each word", function () {
    assertEqual(startCase("--foo-bar--"), "Foo Bar");
    assertEqual(startCase("fooBar"), "Foo Bar");
    assertEqual(startCase("__FOO_BAR__"), "FOO BAR");
  });
});
