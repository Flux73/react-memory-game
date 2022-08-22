import React from "react";
import styles from "./CardItem.module.css";
import backgroundImg from "../assets/background.jpg";
import { useContext, useEffect, useState } from "react";
import { memoryContext } from "../context/game-context";

const CardItem = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const memoryCTX = useContext(memoryContext);
  const img = props.img;

  const flipCard = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      memoryCTX.isEqual(props.currentImg);
    }
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [props.playAgain]);

  useEffect(() => {
    if (
      !memoryCTX.listFounded.includes(props.currentImg) &&
      memoryCTX.isUnmatch
    ) {
      setTimeout(() => {
        memoryCTX.initCards();
        setIsFlipped(false);
      }, 500);
    }
  }, [memoryCTX.listFounded, memoryCTX.isUnmatch]);

  return (
    <div
      onClick={flipCard}
      className={`${styles.card} ${isFlipped ? styles.flippedEffect : ""}`}
    >
      {isFlipped && <img src={img} />}
      {!isFlipped && <img src={backgroundImg} />}
    </div>
  );
};

export default React.memo(CardItem);
