import { useState } from "react";

import "./PlayerForm.css";

const PlayerForm = ({ players, setPlayers }) => {
  const [error, setError] = useState("");

  const playerHandler = (event) => {
    setPlayers((prev) => {
      prev[event.target.name].name = event.target.value;
      return { ...prev };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!players.playerOne.name) {
      setError("Player 1 has empty name");
      return;
    }

    if (!players.playerTwo.name) {
      setError("Player 2 has empty name");
      return;
    }

    if (players.playerOne.name === players.playerTwo.name) {
      setError("Players have same name");
      return;
    }

    setPlayers((prev) => ({ ...prev, set: true }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Player 1:
        <input
          name="playerOne"
          value={players.playerOne.name}
          onChange={playerHandler}
          className="form__input"
        />
      </label>

      <label>
        Player 2:
        <input
          name="playerTwo"
          value={players.playerTwo.name}
          onChange={playerHandler}
          className="form__input"
        />
      </label>

      {error && <div className="form__error">{error}</div>}

      <button type="submit" className="action-button">
        &rarr;
      </button>
    </form>
  );
};

export default PlayerForm;
