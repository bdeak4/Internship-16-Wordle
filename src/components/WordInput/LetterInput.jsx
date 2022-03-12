import { focusNext, focusPrev } from "../../utils/focus";

const LetterInput = ({ letter, setLetter }) => {
  const handleInput = (e) => {
    const key = e.key.toLowerCase();

    if (key.length === 1 && key >= "a" && key <= "z") {
      setLetter(key.toUpperCase());
      focusNext(e.target);
      return;
    }

    switch (key) {
      case "backspace":
        setLetter("");
        focusPrev(e.target);
        break;

      case "arrowleft":
        focusPrev(e.target);
        break;

      case "arrowright":
        focusNext(e.target);
        break;
    }
  };

  return (
    <input
      type="text"
      className="letter-input"
      value={letter}
      onKeyDown={handleInput}
      onChange={() => null}
    />
  );
};

export default LetterInput;