import { describe, it, expect } from "vitest";
import camelCase from "./camelCase";

describe("camelCase", function () {
  it("should work with numbers", function () {
    expect(camelCase("12 feet")).toEqual("12Feet");
    expect(camelCase("enable 6h format")).toEqual("enable6HFormat");
    expect(camelCase("enable 24H format")).toEqual("enable24HFormat");
    expect(camelCase("too legit 2 quit")).toEqual("tooLegit2Quit");
    expect(camelCase("walk 500 miles")).toEqual("walk500Miles");
    expect(camelCase("xhr2 request")).toEqual("xhr2Request");
  });

  //   it("should handle acronyms", function () {
  //     lodashStable.each(["safe HTML", "safeHTML"], function (string) {
  //       assert.strictEqual(camelCase(string), "safeHtml");
  //     });

  //     lodashStable.each(
  //       ["escape HTML entities", "escapeHTMLEntities"],
  //       function (string) {
  //         assert.strictEqual(camelCase(string), "escapeHtmlEntities");
  //       }
  //     );

  //     lodashStable.each(["XMLHttpRequest", "XmlHTTPRequest"], function (string) {
  //       assert.strictEqual(camelCase(string), "xmlHttpRequest");
  //     });
  //   });
});
