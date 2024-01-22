import "../styles/Result.css";

interface ResultProps {
  score: number;
  onStartGame: (startGame: boolean) => void;
  onGameEnd: (endGame: boolean) => void;
}

const Result: React.FC<ResultProps> = ({ score, onStartGame, onGameEnd }) => {
  return (
    <>
      <div className="result-page">
        <h1>Final Score: {score}</h1>
        <button
          onClick={() => {
            onStartGame(true);
            onGameEnd(false);
          }}
        >
          Play Again
        </button>
      </div>
    </>
  );
};

export default Result;
