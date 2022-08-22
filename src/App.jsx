import React, { useEffect, useState, useContext } from "react";
import Card from "./components/Card";
import styles from "./App.module.css";
import { memoryContext } from "./context/game-context";

const App = () => {
  const [playAgain, setIsPlay] = useState(false);
  const memoryCTX = useContext(memoryContext);
  const playAgainHandler = () => {
    memoryCTX.init();
    setIsPlay((prev) => !prev);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <h1>Memory Game</h1>
        <button onClick={playAgainHandler}>Play Again :)</button>
      </div>
      <Card playAgain={playAgain} />
      <footer>
        <p>Created by</p>
        <a target="_blank" href="https://github.com/Flux73">
          Salah Moumni
        </a>
      </footer>
    </div>
  );
};

export default App;
