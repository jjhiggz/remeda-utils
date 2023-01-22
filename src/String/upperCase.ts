import { toString } from "./toString";
import { words, wordsWithPattern } from "./words";

export const upperCase = (string: string) => {
  return words(toString(string).replace(/['\u2019]/g, "")).reduce<string>(
    (result, word, index) => result + (index ? " " : "") + word.toUpperCase(),
    ""
  );
};
