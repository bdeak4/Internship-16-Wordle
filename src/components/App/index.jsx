import { useState } from "react";

import WordInput from "../WordInput";
import PlayerForm from "../PlayerForm";

import { emptyPlayers } from "../../constants/players";
import "./App.css";

const App = () => {
  const [players, setPlayers] = useState(emptyPlayers);

  return (
    <div className="app">
      <h1>wordle</h1>

      {players.set ? (
        <WordInput
          handleAction={(e, word) => console.log(e, word)}
          autoFocus={true}
        />
      ) : (
        <PlayerForm players={players} setPlayers={setPlayers} />
      )}
    </div>
  );
};

export default App;
