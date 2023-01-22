/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
export function asciiSize(str: string) {
  return str.length === undefined ? str.toString().length : str.length;
}
