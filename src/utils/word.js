import { emptyWord } from "../constants/word";

function wordEqual(word1, word2) {
  return word1.join("") === word2.join("");
}

function wordEmpty(word) {
  return wordEqual(word, emptyWord());
}

export { wordEqual, wordEmpty };
