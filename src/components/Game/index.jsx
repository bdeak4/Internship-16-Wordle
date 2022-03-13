import { useState } from "react";

import ChooseWord from "../ChooseWord";
import GuessWord from "../GuessWord";

import { emptyWord } from "../../constants/word";
import { wordEmpty } from "../../utils/word";

const Game = ({ players, setPlayers }) => {
  const [currentPlayer, setCurrentPlayer] = useState(players.playerOne);
  const [resultWord, setResultWord] = useState(emptyWord());

  const alternameCurrentPlayer = () => {
    setCurrentPlayer((prev) =>
      prev.name === players.playerOne.name
        ? players.playerTwo
        : players.playerOne
    );
  };

  const handleChooseWord = (_, word) => {
    setResultWord(word);
    alternameCurrentPlayer();
  };

  return wordEmpty(resultWord) ? (
    <ChooseWord
      currentPlayer={currentPlayer}
      handleChooseWord={handleChooseWord}
    />
  ) : (
    <GuessWord currentPlayer={currentPlayer} />
  );
};

export default Game;
