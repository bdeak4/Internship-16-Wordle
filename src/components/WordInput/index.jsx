import { useState } from "react";

import LetterInput from "./LetterInput";

import { emptyWord } from "../../constants/word";
import { focusPrev } from "../../utils/focus";
import "./WordInput.css";

const WordInput = ({ handleAction, autoFocus, highlight = [] }) => {
  const [word, setWord] = useState(emptyWord());

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
          highlightClass={highlight.length ? highlight[index] : null}
          key={index}
        />
      ))}
      <button
        className="action-button"
        disabled={word.some((letter) => letter === "") || highlight.length}
        onKeyDown={(e) => e.key === "ArrowLeft" && focusPrev(e.target)}
      >
        &rarr;
      </button>
    </form>
  );
};

export default WordInput;
