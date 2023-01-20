import { purry } from "remeda";
import unicodeWords from "../../internal/unicodeWords";

const a = "";
type MatchParams = Parameters<typeof a.match>;

const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
);

/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function asciiWords(str: string) {
  return str.match(reAsciiWord);
}

export function words(string: string) {
  const result = hasUnicodeWord(string)
    ? unicodeWords(string)
    : asciiWords(string);
  return result || [];
}

function _wordsWithPattern(string: string, pattern: MatchParams[0] | string) {
  if (pattern === undefined) {
    const result = hasUnicodeWord(string)
      ? unicodeWords(string)
      : asciiWords(string);
    return result || [];
  }
  return string.match(pattern as MatchParams[0]) || [];
}

export function wordsWithPattern(
  string: string,
  pattern: MatchParams[0] | string
): string[];
export function wordsWithPattern(
  pattern: MatchParams[0] | string
): (string: string) => string[];
export function wordsWithPattern(): any {
  return purry(_wordsWithPattern, arguments);
}
