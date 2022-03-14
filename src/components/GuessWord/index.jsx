import { useState } from "react";

import WordInput from "../WordInput";

import { letterState } from "../../constants/letter";
import { wordEqual } from "../../utils/word";

const GuessWord = ({ currentPlayer, resultWord, handleWon, handleLost }) => {
  const [results, setResults] = useState(new Array(6).fill([]));

  const checkWord = (index, word) => {
    const res = word.map((letter, i) => {
      if (resultWord[i] === letter) {
        return letterState.green;
      }

      if (resultWord.includes(letter)) {
        return letterState.yellow;
      }

      return letterState.grey;
    });

    setResults((prev) => {
      prev[index] = res;
      return [...prev];
    });

    if (wordEqual(word, resultWord)) {
      setResults((prev) =>
        prev.map((res) =>
          res.length ? res : new Array(5).fill(letterState.grey)
        )
      );
      handleWon();
    }

    if (index === results.length - 1) {
      handleLost();
    }
  };

  return (
    <div>
      <p>{currentPlayer.name}, guess word:</p>
      {results.map((result, index) => (
        <WordInput
          handleAction={(_, word) => checkWord(index, word)}
          autoFocus={index === 0}
          highlight={result}
          key={index}
        />
      ))}
    </div>
  );
};

export default GuessWord;
