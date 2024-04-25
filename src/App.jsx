// @ts-check
import { useState } from "react";
import "./index.css";
import React from "react";

function App() {
  /**
   * @typedef {null | 'x' | 'o'} CellState
   * */
  /**
   * @type {CellState[]}
   */

  const initialBoardState = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const [boardState, setBoardState] = useState(initialBoardState);

  function whoseTurnIsIt() {
    const numXs = boardState.filter((element) => element === "x").length;
    const numOs = boardState.filter((element) => element === "o").length;

    if (numXs >= numOs) {
      return "o";
    } else {
      return "x";
    }
  }

  /**
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
    const copyOfBoardState = [...boardState];

    if (copyOfBoardState[index] == null) {
      copyOfBoardState[index] = whoseTurnIsIt();
      setBoardState(copyOfBoardState);
    } else {
      console.log(index, " is not null");
      return boardState;
    }
  }

  function resetBoardState() {
    console.log("this is a reset button");
    setBoardState(initialBoardState);
  }

  return (
    <div className="gameContainer">
      <div className="gameGrid">{createGridCellDivs(boardState)} </div>
      <div className="resetButton">
        <button onClick={resetBoardState}>reset</button>
      </div>
    </div>
  );
}

export default App;
