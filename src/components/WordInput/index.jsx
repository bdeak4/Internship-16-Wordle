import { useState } from "react";
import LetterInput from "./LetterInput";
import "./WordInput.css";

const WordInput = () => {
  const [word, setWord] = useState(new Array(5).fill(""));

  const setLetter = (index) => (letter) => {
    setWord((prev) => {
      prev[index] = letter;
      return [...prev];
    });
  };

  return (
    <div>
      {word.map((_, index) => (
        <LetterInput
          letter={word[index]}
          setLetter={setLetter(index)}
          key={index}
        />
      ))}
      <br />
      {word}
      <br />
      {word.some((letter) => letter === "") ? "not valid" : "valid"}
    </div>
  );
};

export default WordInput;
