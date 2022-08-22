import React, { useState } from "react";

export const memoryContext = React.createContext({
  clicked: 0,
  cardChosen: [],
  listFounded: [],
  isUnmatch: false,
  isEqual: () => {},
  init: () => {},
  back: () => {},
});

export default (props) => {
  const [memory, setMemory] = useState({
    clicked: 0,
    cardChosen: [],
    listFounded: [],
    isUnmatch: false,
  });

  const isEqual = (card) => {
    if (memory.clicked < 2) {
      setMemory((prev) => {
        return {
          clicked: prev.clicked + 1,
          cardChosen: [...prev.cardChosen, card],
          listFounded: prev.listFounded,
          isUnmatch: false,
        };
      });
    }
  };

  const init = () => {
    setMemory((prev) => {
      return {
        clicked: 0,
        cardChosen: [],
        listFounded: [],
        isUnmatch: false,
      };
    });
  };

  const initCards = () => {
    setMemory((prev) => {
      return {
        clicked: 0,
        cardChosen: [],
        listFounded: prev.listFounded,
        isUnmatch: false,
      };
    });
  };

  if (memory.clicked === 2) {
    if (memory.cardChosen[0] === memory.cardChosen[1]) {
      setMemory((prev) => {
        return {
          clicked: 0,
          cardChosen: [],
          listFounded: [...prev.listFounded, memory.cardChosen[0]],
          isUnmatch: false,
        };
      });
    } else {
      setMemory((prev) => {
        return {
          clicked: 0,
          cardChosen: [],
          listFounded: prev.listFounded,
          isUnmatch: true,
        };
      });
    }
  }

  return (
    <memoryContext.Provider value={{ ...memory, isEqual, init, initCards }}>
      {props.children}
    </memoryContext.Provider>
  );
};
