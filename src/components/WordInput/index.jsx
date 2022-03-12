import { useState } from "react";
import LetterInput from "./LetterInput";
import "./WordInput.css";

const WordInput = ({ handleAction }) => {
  const [word, setWord] = useState(new Array(5).fill(""));

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
