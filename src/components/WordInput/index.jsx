import { useState } from "react";

import LetterInput from "./LetterInput";

import { emptyWord } from "../../constants/word";
import "./WordInput.css";

const WordInput = ({ handleAction, autoFocus }) => {
  const [word, setWord] = useState(emptyWord);

  const setLetter = (index, letter) => {
    setWord((prev) => {
      prev[index] = letter;
      return [...prev];
    });
  };

  return (
    <div className="word-input">
      {word.map((_, index) => (
        <LetterInput
          letter={word[index]}
          setLetter={(letter) => setLetter(index, letter)}
          autoFocus={autoFocus && index === 0}
          key={index}
        />
      ))}
      <button
        className="word-action-button"
        disabled={word.some((letter) => letter === "")}
        onClick={(e) => handleAction(e, word)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default WordInput;
