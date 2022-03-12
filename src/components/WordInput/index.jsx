import { useState } from "react";

import LetterInput from "./LetterInput";

import { emptyWord } from "../../constants/word";
import "./WordInput.css";
import { focusPrev } from "../../utils/focus";

const WordInput = ({ handleAction, autoFocus }) => {
  const [word, setWord] = useState(emptyWord);

  const setLetter = (index, letter) => {
    setWord((prev) => {
      prev[index] = letter;
      return [...prev];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAction(event, word);
  };

  return (
    <form onSubmit={handleSubmit} className="word-input">
      {word.map((_, index) => (
        <LetterInput
          letter={word[index]}
          setLetter={(letter) => setLetter(index, letter)}
          autoFocus={autoFocus && index === 0}
          key={index}
        />
      ))}
      <button
        className="action-button"
        disabled={word.some((letter) => letter === "")}
        onKeyDown={(e) => e.key === "ArrowLeft" && focusPrev(e.target)}
      >
        &rarr;
      </button>
    </form>
  );
};

export default WordInput;
