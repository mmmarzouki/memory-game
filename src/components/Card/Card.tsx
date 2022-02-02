import React, { useState } from "react";

export interface CardProps {
  value: number;
  hidden: boolean;
  row: number;
  column: number;
  onCardClick: (row: number, column: number, value: number) => void;
}

export function Card({ value, hidden, column, row, onCardClick }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: "20px",
        height: "100px",
        width: "69px",
        paddingTop: "69px",
        cursor: "pointer",
      }}
      onClick={() => {
        onCardClick(row, column, value);
      }}
    >
      {hidden && value}
    </div>
  );
}
