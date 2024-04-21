// @ts-check
import { useState } from "react";
import "./index.css";
import React from "react";

function App() {
  /**
   * @type {CellState[]}
   */
  const boardState = [null, "x", null, "o", "o", "x", "x", null, null];

  /**
   * @typedef {null | 'x' | 'o'} CellState
   * @param {CellState[]} inputArray
   * @returns
   */

  function createGridCellDivs(inputArray) {
    let arrayOfDivs = inputArray.map((cellState, index) => {
      // onClick console.logs the index of the element that is clicked
      if (cellState === "x") {
        return (
          <div
            className="cell"
            key={index}
            onClick={() => handleClickCell(index)}
          >
            ✖️
          </div>
        ); // 'x'
      } else if (cellState === "o") {
        return (
          <div
            className="cell"
            key={index}
            onClick={() => handleClickCell(index)}
          >
            ⭕
          </div>
        ); // 'o'
      } else {
        return (
          <div
            className="cell"
            key={index}
            onClick={() => handleClickCell(index)}
          ></div>
        ); //null
      }
    });

    return arrayOfDivs;
  }

  function handleClickCell(index) {
    console.log("cell index ", index);
  }
  // function changeCellState(cellState) {
  //   // change from null to 'x' or 'o'
  //   if (cellState === 'x')
  // }

  return <div className="gameGrid">{createGridCellDivs(boardState)}</div>;
}

export default App;
