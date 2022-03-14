import { focusNext, focusPrev } from "../../utils/focus";

const LetterInput = ({
  letter,
  setLetter,
  autoFocus,
  highlightClass = null,
}) => {
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

      default:
        break;
    }
  };

  return (
    <input
      type="text"
      className={`letter-input ${highlightClass}`}
      value={letter}
      onKeyDown={handleInput}
      onChange={() => null}
      autoFocus={autoFocus}
      disabled={highlightClass !== null}
    />
  );
};

export default LetterInput;
