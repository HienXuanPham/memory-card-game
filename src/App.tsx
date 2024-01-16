import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [dogs, setDogs] = useState([]);
  const [reset, setReset] = useState(false);

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
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <img src={dog} alt={`A cute dog ${index + 1}`} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
