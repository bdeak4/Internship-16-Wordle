import WordInput from "../WordInput";

const GuessWordInput = ({ index }) => {
  return <WordInput handleAction={() => null} autoFocus={index === 0} />;
};

export default GuessWordInput;
