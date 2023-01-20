import { map, times } from "remeda";
import { describe, expect, it } from "vitest";
import { words, wordsWithPattern } from "./words";
import { burredLetters } from "../../test-utils";

describe("words", function () {
  it("should match words containing Latin Unicode letters", function () {
    var expected = map(burredLetters, function (letter) {
      return [letter];
    });

    var actual = map(burredLetters, function (letter) {
      return words(letter);
    });
    expect(actual).toEqual(expected);
  });

  it("should support a `pattern`", function () {
    expect(wordsWithPattern("abcd", /ab|cd/g)).toEqual(["ab", "cd"]);
    expect(Array.from(wordsWithPattern("abcd", "ab|cd"))).toEqual(["ab"]);
  });

  it("should support a data last `pattern`", function () {
    expect(wordsWithPattern("abcd", /ab|cd/g)).toEqual(["ab", "cd"]);
    expect(Array.from(wordsWithPattern("abcd", "ab|cd"))).toEqual(["ab"]);
  });

  it("should work with compound words", function () {
    console.log(words("12ft"));
    expect(words("12ft")).toEqual(["12", "ft"]);
    expect(words("aeiouAreVowels")).toEqual(["aeiou", "Are", "Vowels"]);
    expect(words("enable 6h format")).toEqual(["enable", "6", "h", "format"]);
    expect(words("enable 24H format")).toEqual(["enable", "24", "H", "format"]);
    expect(words("isISO8601")).toEqual(["is", "ISO", "8601"]);
    expect(words("LETTERSAeiouAreVowels")).toEqual([
      "LETTERS",
      "Aeiou",
      "Are",
      "Vowels",
    ]);
    expect(words("tooLegit2Quit")).toEqual(["too", "Legit", "2", "Quit"]);
    expect(words("walk500Miles")).toEqual(["walk", "500", "Miles"]);
    expect(words("xhr2Request")).toEqual(["xhr", "2", "Request"]);
    expect(words("XMLHttp")).toEqual(["XML", "Http"]);
    expect(words("XmlHTTP")).toEqual(["Xml", "HTTP"]);
    expect(words("XmlHttp")).toEqual(["Xml", "Http"]);
  });

  it("should work with compound words containing diacritical marks", function () {
    expect(words("LETTERSÆiouAreVowels")).toEqual([
      "LETTERS",
      "Æiou",
      "Are",
      "Vowels",
    ]);
    expect(words("æiouAreVowels")).toEqual(["æiou", "Are", "Vowels"]);
    expect(words("æiou2Consonants")).toEqual(["æiou", "2", "Consonants"]);
  });

  it("should not treat contractions as separate words", function () {
    var postfixes = ["d", "ll", "m", "re", "s", "t", "ve"];

    ["'", "\u2019"].forEach(function (apos) {
      times(2, function (index) {
        var actual = map(postfixes, function (postfix) {
          var string = "a b" + apos + postfix + " c";
          return words(string[index ? "toUpperCase" : "toLowerCase"]());
        });

        var expected = map(postfixes, function (postfix) {
          var words = ["a", "b" + apos + postfix, "c"];
          return map(words, function (word) {
            return word[index ? "toUpperCase" : "toLowerCase"]();
          });
        });

        expect(actual).toEqual(expected);
      });
    });
  });

  it("should not treat ordinal numbers as separate words", function () {
    var ordinals = ["1st", "2nd", "3rd", "4th"];

    times(2, function (index) {
      var expected = map(ordinals, function (ordinal) {
        return [ordinal[index ? "toUpperCase" : "toLowerCase"]()];
      });

      var actual = map(expected, function (expectedWords) {
        return words(expectedWords[0]);
      });

      expect(actual).toEqual(expected);
    });
  });

  it("should not treat mathematical operators as words", function () {
    var operators = ["\xac", "\xb1", "\xd7", "\xf7"],
      expected = map(operators, () => []),
      actual = map(operators, words);

    expect(actual).toEqual(expected);
  });

  it("should not treat punctuation as words", function () {
    var marks = [
      "\u2012",
      "\u2013",
      "\u2014",
      "\u2015",
      "\u2024",
      "\u2025",
      "\u2026",
      "\u205d",
      "\u205e",
    ];

    var expected = map(marks, () => []),
      actual = map(marks, words);

    expect(actual).toEqual(expected);
  });

  it("should prevent ReDoS", function () {
    var largeWordLen = 50000,
      largeWord = "A".repeat(largeWordLen),
      maxMs = 1000,
      startTime = Date.now();

    expect(words(largeWord + "ÆiouAreVowels")).toEqual([
      largeWord,
      "Æiou",
      "Are",
      "Vowels",
    ]);

    var endTime = Date.now(),
      timeSpent = endTime - startTime;

    expect(timeSpent < maxMs).toBe(true);
    // , "operation took " + timeSpent + "ms");
  });
});
