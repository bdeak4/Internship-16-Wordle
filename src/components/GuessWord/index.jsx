import GuessWordInput from "./GuessWordInput";

const GuessWord = ({ currentPlayer }) => {
  return (
    <div>
      <p>{currentPlayer.name}, guess word:</p>
      {new Array(6).fill(0).map((_, index) => (
        <GuessWordInput index={index} key={index} />
      ))}
    </div>
  );
};

export default GuessWord;
