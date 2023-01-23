import { describe, it } from "vitest";
import { assertEqual } from "../../test-utils";
import { truncate } from "./truncate";

describe("truncate", function () {
  var string = "hi-diddly-ho there, neighborino";

  it("should use a default `length` of `30`", function () {
    assertEqual(truncate(string), "hi-diddly-ho there, neighbo...");
  });

  it("should not truncate if `string` is <= `length`", function () {
    assertEqual(truncate(string, { length: string.length }), string);
    assertEqual(truncate(string, { length: string.length + 2 }), string);
  });

  it("should truncate string the given length", function () {
    assertEqual(truncate(string, { length: 24 }), "hi-diddly-ho there, n...");
  });

  it("should support a `omission` option", function () {
    assertEqual(
      truncate(string, { omission: " [...]" }),
      "hi-diddly-ho there, neig [...]"
    );
  });

  it("should coerce nullish `omission` values to strings", function () {
    assertEqual(
      truncate(string, { omission: null as any }),
      "hi-diddly-ho there, neighbnull"
    );
    assertEqual(
      truncate(string, { omission: undefined }),
      "hi-diddly-ho there, nundefined"
    );
  });

  it("should support a `length` option", function () {
    assertEqual(truncate(string, { length: 4 }), "h...");
  });

  it("should support a `separator` option", function () {
    assertEqual(
      truncate(string, { length: 24, separator: " " }),
      "hi-diddly-ho there,..."
    );
    assertEqual(
      truncate(string, { length: 24, separator: /,? +/ }),
      "hi-diddly-ho there..."
    );
    assertEqual(
      truncate(string, { length: 24, separator: /,? +/g }),
      "hi-diddly-ho there..."
    );
  });

  it("should treat negative `length` as `0`", function () {
    [0, -2].forEach(function (length) {
      assertEqual(truncate(string, { length: length }), "...");
    });
  });
});
