import { castSlice } from "../../internal/castSlice";
import { hasUnicode } from "../../internal/hasUnicode";
import { stringToArray } from "../../internal/stringToArray";
import isRegExp from "../Utility/isRegExp";

const a = "hello";
type Separator = Parameters<typeof a.split>[0];

/** Used as references for the maximum length and index of an array. */
const MAX_ARRAY_LENGTH = 4294967295;

/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * split('a-b-c', '-', 2)
 * // => ['a', 'b']
 */
export function split(
  string: string,
  separator: Separator | string,
  limit?: number
) {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
  if (!limit) {
    return [];
  }
  if (
    string &&
    (typeof separator === "string" ||
      (separator != null && !isRegExp(separator)))
  ) {
    if (!separator && hasUnicode(string)) {
      return castSlice(stringToArray(string), 0, limit);
    }
  }

  return string.split(separator as Separator, limit);
}
