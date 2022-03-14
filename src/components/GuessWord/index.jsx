import { useState } from "react";
import { letterState } from "../../constants/letter";
import { wordEqual } from "../../utils/word";
import WordInput from "../WordInput";

const GuessWord = ({ currentPlayer, resultWord }) => {
  const [results, setResults] = useState(new Array(6).fill([]));

  const checkWord = (index, word) => {
    if (wordEqual(word, resultWord)) {
      console.log("win!!");
      setResults((prev) =>
        prev.map((res) =>
          res.length ? res : new Array(5).fill(letterState.grey)
        )
      );
    }

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
