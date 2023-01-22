import { expect, describe, it } from "vitest";
import { escape } from "./escape";
import { unescape } from "./unescape";

describe("escape", function () {
  let escaped = "&amp;&lt;&gt;&quot;&#39;/",
    unescaped = "&<>\"'/";

  escaped += escaped;
  unescaped += unescaped;

  it("should escape values", function () {
    expect(escape(unescaped)).toBe(escaped);
  });

  it("should handle strings with nothing to escape", function () {
    expect(escape("abc")).toBe("abc");
  });

  it("should escape the same characters unescaped by `_.unescape`", function () {
    expect(escape(unescape(escaped))).toBe(escaped);
  });

  ["`", "/"].forEach(function (chr) {
    it('should not escape the "' + chr + '" character', function () {
      expect(escape(chr)).toBe(chr);
    });
  });
});
