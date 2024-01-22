import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import CardGame from "./components/CardGame";
import Result from "./components/Result";

function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [scoreUpdate, setScoreUpdate] = useState<number>(0);

  const handleGameStart = (startGame: boolean) => {
    setGameStarted(startGame);
  };

  const handleGameEnd = (endGame: boolean) => {
    setGameEnded(endGame);
  };

  const handleScoreUpdate = (newScore: number) => {
    setScoreUpdate(newScore);
  };

  return (
    <>
      {!gameStarted && !gameEnded && <HomePage onStartGame={handleGameStart} />}
      {gameStarted && !gameEnded && (
        <CardGame onGameEnd={handleGameEnd} onScoreUpdate={handleScoreUpdate} />
      )}
      {gameEnded && (
        <Result
          score={scoreUpdate}
          onStartGame={handleGameStart}
          onGameEnd={handleGameEnd}
        />
      )}
    </>
  );
}

export default App;
