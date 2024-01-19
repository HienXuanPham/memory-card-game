import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

interface CardGameProps {
  onGameStart: () => void;
  onGameEnd: () => void;
  onScoreUpdate: (score: number) => void;
}

const CardGame: React.FC<CardGameProps> = ({
  onGameStart,
  onGameEnd,
  onScoreUpdate,
}) => {
  const [dogs, setDogs] = useState<string[]>([]);
  const [dogSelected, setDogSelected] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random/5").then((response) => {
      setDogs(response.data.message);
      onGameStart();
    });

    return () => {
      console.log(
        "Component is unmounted or data changed. Cleanup code goes here."
      );
    };
  }, []);

  const handleDogSelected = (dog: string) => {
    const isDuplicate = dogSelected.includes(dog);
    const didWin = score === dogs.length - 1;

    if (isDuplicate || didWin) {
      onGameEnd();
      onScoreUpdate(isDuplicate ? score : score + 1);
      setDogSelected([]);
      setScore(0);
    } else {
      setDogSelected((prevDogs) => [...prevDogs, dog]);
      setScore((score) => score + 1);
      setDogs((prevDogs) => shuffleDogsCard(prevDogs));
    }
  };

  const shuffleDogsCard = (a: string[]) => {
    let shuffleDogs: string[] = [];

    shuffleDogs = a.slice();
    let currentIndex = a.length;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffleDogs[currentIndex], shuffleDogs[randomIndex]] = [
        shuffleDogs[randomIndex],
        shuffleDogs[currentIndex],
      ];
    }

    return shuffleDogs;
  };

  return (
    <>
      <h3>Score: {score}</h3>
      <div className="cards-layout">
        {dogs.map((dog, index) => (
          <div className="dog-card" key={index}>
            <img
              src={dog}
              alt={`A cute dog ${index + 1}`}
              onClick={() => handleDogSelected(dog)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardGame;
