import { hasUnicode } from "./hasUnicode";
import { stringToArray } from "./stringToArray";
import { castSlice } from "./castSlice";

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */

// todo see if we can fix this typing to be String method instead of any
function createCaseFirst(methodName: any) {
  return (string: string): string => {
    if (!string) {
      return "";
    }

    const strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;

    const chr = strSymbols ? strSymbols[0] : string[0];

    const trailing = strSymbols
      ? castSlice(strSymbols, 1).join("")
      : string.slice(1);

    //   we are indexing the method name on the string
    return (chr as any)[methodName]() + trailing;
  };
}

export default createCaseFirst;
