import "./ScoreBoard.css";

const ScoreBoard = ({ players, currentPlayer }) => {
  return (
    <div>
      <div
        className={
          currentPlayer.name === players.playerOne.name ? "score-bold" : ""
        }
      >
        {players.playerOne.name} - {players.playerOne.score}
      </div>
      <div
        className={
          currentPlayer.name === players.playerTwo.name ? "score-bold" : ""
        }
      >
        {players.playerTwo.name} - {players.playerTwo.score}
      </div>
    </div>
  );
};

export default ScoreBoard;
