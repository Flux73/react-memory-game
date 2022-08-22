import React, { useState, useEffect, useContext } from "react";

import styles from "./Card.module.css";
import castle from "../assets/castle.png";
import king from "../assets/king.png";
import knight from "../assets/knight.png";
import bow from "../assets/bow.png";
import noblewoman from "../assets/noblewoman.png";
import wizard from "../assets/wizard.png";

import CardItem from "./CardItem";

const imgs = [
  { img: castle, name: "castle" },
  { img: king, name: "king" },
  { img: knight, name: "knight" },
  { img: bow, name: "bow" },
  { img: noblewoman, name: "noblewoman" },
  { img: wizard, name: "wizard" },
];
const initImgs = [...imgs, ...imgs];

const Card = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffleImgs = [...initImgs].sort((a, b) => 0.5 - Math.random());
    const newCards = shuffleImgs.map((img, i) => (
      <CardItem
        playAgain={props.playAgain}
        key={i}
        img={img.img}
        currentImg={img.name}
      />
    ));

    setCards(newCards);
  }, [props.playAgain]);

  return <div className={styles.container}>{cards.length > 0 && cards}</div>;
};

export default Card;
