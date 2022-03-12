import { useState } from "react";

import Game from "../Game";
import PlayerForm from "../PlayerForm";

import { emptyPlayers } from "../../constants/players";
import "./App.css";

const App = () => {
  const [players, setPlayers] = useState(emptyPlayers);

  return (
    <div className="app">
      <h1>wordle</h1>

      {players.set ? (
        <Game players={players} setPlayers={setPlayers} />
      ) : (
        <PlayerForm players={players} setPlayers={setPlayers} />
      )}
    </div>
  );
};

export default App;
