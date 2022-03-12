import { useState } from "react";

import { emptyWord } from "../../constants/word";
import WordInput from "../WordInput";

const Game = ({ players, setPlayers }) => {
  const [currentPlayer, setCurrentPlayer] = useState(players.playerOne);
  const [resultWord, setResultWord] = useState(emptyWord);

  return resultWord === emptyWord ? (
    <div>
      <p>{currentPlayer.name}, choose word:</p>
      <WordInput handleAction={(_, word) => setResultWord(word)} autoFocus />
    </div>
  ) : (
    <div>game</div>
  );
};

export default Game;
