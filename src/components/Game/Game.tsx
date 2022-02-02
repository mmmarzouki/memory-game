import React, { useEffect, useState } from "react";
import { range } from "../../services/utils";
import { createValues } from "../../services/value";
import { Card } from "../Card/Card";
import { Row } from "../Row/Row";
// import 'semantic-ui-css/semantic.min.css'

export function Game() {
  const [triesNbr, setTriesNbr] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  const [selectedCardValue, setSelectedCardValue] = useState(-1);
  const [firstCLick, setFirstCardClick] = useState(true);
  const colNumber = 6;
  const rowNumber = 4;
  const [values, setValues] = useState(createValues(rowNumber, colNumber));
  const [hiddenCards, setHiddenCards] = useState(
    range(colNumber * rowNumber).map(() => false)
  );

  function onCardClick(row: number, column: number, value: number) {
    const index = row * colNumber + column;
    setSelectedCardIndex(index);
    const newHiddenCards = [...hiddenCards];
    newHiddenCards[index] = true;
    setHiddenCards(newHiddenCards);
    if (!firstCLick && value !== selectedCardValue) {
      setTimeout(() => {
        console.log("before", newHiddenCards);
        newHiddenCards[selectedCardIndex] = false;
        newHiddenCards[index] = false;
        console.log("after", newHiddenCards);
        setHiddenCards(newHiddenCards);
      }, 2000);
    }
    setSelectedCardValue(value);
    setTriesNbr(triesNbr + 1);
    setFirstCardClick(!firstCLick);
  }
  useEffect(() => console.log("updating"), [hiddenCards]);

  return (
    <div>
      <div>Number of tries: {triesNbr}</div>
      <div></div>
      {range(rowNumber).map((row) => {
        return (
          <Row
            onCardClick={onCardClick}
            colNumber={colNumber}
            values={values}
            hiddenCards={hiddenCards}
            key={row}
            row={row}
          ></Row>
        );
      })}
    </div>
  );
}
