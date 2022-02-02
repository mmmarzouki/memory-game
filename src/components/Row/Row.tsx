import React from "react";
import { range } from "../../services/utils";
import { Card } from "../Card/Card";

export interface RowPros {
  onCardClick: (row: number, column: number, value: number) => void;
  colNumber: number;
  values: number[];
  hiddenCards: boolean[];
  row: number;
}

export function Row({
  onCardClick,
  colNumber,
  row,
  values,
  hiddenCards,
}: RowPros) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {range(colNumber).map((col) => (
        <Card
          column={col}
          hidden={hiddenCards[row * colNumber + col]}
          row={row}
          value={values[row * colNumber + col]}
          key={col}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}
