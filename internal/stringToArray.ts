import { asciiToArray } from "./asciiToArray.js";
import { hasUnicode } from "./hasUnicode.js";
import { unicodeToArray } from "./unicodeToArray.js";

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
export function stringToArray(string: string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
