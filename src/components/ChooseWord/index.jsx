import WordInput from "../WordInput";

const ChooseWord = ({ currentPlayer, handleChooseWord }) => {
  return (
    <div>
      <p>{currentPlayer.name}, choose word:</p>
      <WordInput handleAction={handleChooseWord} autoFocus />
    </div>
  );
};

export default ChooseWord;
