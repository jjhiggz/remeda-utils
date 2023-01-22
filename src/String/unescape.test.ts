import { describe, expect, it } from "vitest";
import { unescape } from "./unescape";
import { escape } from "./escape";
describe("unescape", function () {
  var escaped = "&amp;&lt;&gt;&quot;&#39;/",
    unescaped = "&<>\"'/";

  escaped += escaped;
  unescaped += unescaped;

  it("should unescape entities in order", function () {
    expect(unescape("&amp;lt;")).toBe("&lt;");
  });

  it("should unescape the proper entities", function () {
    expect(unescape(escaped)).toBe(unescaped);
  });

  it("should handle strings with nothing to unescape", function () {
    expect(unescape("abc")).toBe("abc");
  });

  it("should unescape the same characters escaped by `_.escape`", function () {
    expect(unescape(escape(unescaped))).toBe(unescaped);
  });

  it("should handle leading zeros in html entities", function () {
    expect(unescape("&#39;")).toBe("'");
    expect(unescape("&#039;")).toBe("'");
    expect(unescape("&#000039;")).toBe("'");
  });

  ["&#96;", "&#x2F;"].forEach(function (entity) {
    it('should not unescape the "' + entity + '" entity', function () {
      expect(unescape(entity)).toBe(entity);
    });
  });
});
