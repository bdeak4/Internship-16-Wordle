import { useState } from "react";

import ChooseWord from "../ChooseWord";
import GuessWord from "../GuessWord";

import { emptyWord } from "../../constants/word";
import { wordEmpty } from "../../utils/word";
import ScoreBoard from "../ScoreBoard";

import "./Game.css";

const Game = ({ players, incScore, resetGame, resetScore }) => {
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

  const handleWon = () => {
    alert("you won! +3 points");

    incScore(currentPlayer, 3);

    setResultWord(emptyWord());
  };

  const handleLost = () => {
    alert("you lost! +1 point to your oponent");

    incScore(
      currentPlayer.name === players.playerOne.name
        ? players.playerTwo
        : players.playerOne,
      1
    );

    setResultWord(emptyWord());
  };

  const handleResetScore = () => {
    setCurrentPlayer(players.playerOne);
    setResultWord(emptyWord());
    resetScore();
  };

  return (
    <div>
      <ScoreBoard players={players} currentPlayer={currentPlayer} />

      {wordEmpty(resultWord) ? (
        <ChooseWord
          currentPlayer={currentPlayer}
          handleChooseWord={handleChooseWord}
        />
      ) : (
        <GuessWord
          currentPlayer={currentPlayer}
          resultWord={resultWord}
          handleWon={handleWon}
          handleLost={handleLost}
        />
      )}

      <div className="actions">
        <button
          onClick={handleResetScore}
          className="action-button"
          title="Reset score"
        >
          00
        </button>
        <button onClick={resetGame} className="action-button" title="New game">
          ↺
        </button>
      </div>
    </div>
  );
};

export default Game;
