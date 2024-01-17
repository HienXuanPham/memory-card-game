import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [dogs, setDogs] = useState<string[]>([]);
  const [reset, setReset] = useState<boolean>(false);
  const [dogSelected, setDogSelected] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (reset) {
      axios
        .get("https://dog.ceo/api/breeds/image/random/5")
        .then((response) => {
          setDogs(response.data.message);
        });
      setReset(false);
    }

    return () => {
      console.log(
        "Component is unmounted or data changed. Cleanup code goes here."
      );
    };
  }, [reset]);

  const handleDogSelected = (dog: string) => {
    if (dogSelected.includes(dog)) {
      window.alert("Dog is already selected. You lose!");
      setDogSelected([]);
      setScore(0);
    } else if (score === dogs.length - 1) {
      window.alert("You won!");
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
      <h1>Memory Dog Card Game</h1>
      <button
        onClick={() => {
          setReset(true);
        }}
      >
        Start Game
      </button>
      <h3>Score: {score}</h3>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <img
              src={dog}
              alt={`A cute dog ${index + 1}`}
              onClick={() => handleDogSelected(dog)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
