/* Node.js helper references. */
import { getTag } from "../../internal/getTag.js";
import { nodeTypes } from "../../internal/nodeTypes.js";
import { isObjectLike } from "./isObjectLike.js";
const nodeIsRegExp = nodeTypes && nodeTypes.isRegExp;
/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp('/abc/')
 * // => false
 */
const isRegExp = nodeIsRegExp
  ? (value: any) => nodeIsRegExp(value)
  : (value: any) => isObjectLike(value) && getTag(value) == "[object RegExp]";

export default isRegExp;
