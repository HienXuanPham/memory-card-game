interface HeaderProps {
  onStartGame: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartGame }) => {
  return (
    <>
      <h1>Welcome to Dog Memory Card Game</h1>
      <h3>
        As a player, your goal is to click on different dog cards without
        selecting the same card twice. Here's the catch: if you click on a card
        that you've already selected, you lose the game.
      </h3>
      <button onClick={onStartGame}>Start Game</button>
    </>
  );
};

export default Header;
