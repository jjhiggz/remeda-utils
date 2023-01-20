import { toString } from "./toString";
import { words, wordsWithPattern } from "./words";

export const upperCase = (string: string) => {
  const wordies = words(toString(string).replace(/['\u2019]/g, ""));
  return (wordies as string[]).reduce<string>(
    (result, word, index) => result + (index ? " " : "") + word.toUpperCase(),
    ""
  );
};
