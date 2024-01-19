import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardGame from "./components/CardGame";
import Result from "./components/Result";

function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [scoreUpdate, setScoreUpdate] = useState<number>(0);

  const handleGameStart = () => {
    setGameStarted(true);
  };

  const handleGameEnd = () => {
    setGameEnded(true);
  };

  const handleScoreUpdate = (newScore: number) => {
    setScoreUpdate(newScore);
  };

  return (
    <>
      {!gameStarted && !gameEnded && <Header onStartGame={handleGameStart} />}
      {gameStarted && !gameEnded && (
        <CardGame
          onGameStart={handleGameStart}
          onGameEnd={handleGameEnd}
          onScoreUpdate={handleScoreUpdate}
        />
      )}
      {gameEnded && <Result score={scoreUpdate} />}
    </>
  );
}

export default App;
