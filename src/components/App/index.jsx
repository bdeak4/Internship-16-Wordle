import { useState } from "react";

import Game from "../Game";
import PlayerForm from "../PlayerForm";

import { emptyPlayers } from "../../constants/players";
import "./App.css";

const App = () => {
  const [players, setPlayers] = useState(emptyPlayers());

  const handleIncScore = (player, increment) => {
    setPlayers((prev) => {
      if (prev.playerOne.name === player.name) {
        prev.playerOne.score += increment;
      } else {
        prev.playerTwo.score += increment;
      }
      return { ...prev };
    });
  };

  const handleResetGame = () => {
    setPlayers(emptyPlayers());
  };

  const handleResetScore = () => {
    setPlayers((prev) => {
      prev.playerOne.score = 0;
      prev.playerTwo.score = 0;
      return { ...prev };
    });
  };

  return (
    <div className="app">
      <h1>wordle</h1>

      {players.set ? (
        <Game
          players={players}
          incScore={handleIncScore}
          resetGame={handleResetGame}
          resetScore={handleResetScore}
        />
      ) : (
        <PlayerForm players={players} setPlayers={setPlayers} />
      )}
    </div>
  );
};

export default App;
