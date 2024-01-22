import "../styles/HomePage.css";

interface HeaderProps {
  onStartGame: () => void;
}

const HomePage: React.FC<HeaderProps> = ({ onStartGame }) => {
  return (
    <>
      <div className="home-page">
        <h1>Welcome to Dog Memory Card Game</h1>
        <p className="game-guide">
          As a player, your goal is to click on different dog cards without
          selecting the same card twice. Here's the catch: if you click on a
          card that you've already selected, you lose the game.
        </p>
        <button className="start-game-btn" onClick={onStartGame}>
          Start Game
        </button>
      </div>
    </>
  );
};

export default HomePage;
