// @ts-check
import { useState } from "react";
import "./index.css";
import React from "react";
import checkWinner from "./WinningPatterns";

export default function TicTacToe() {
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
    const copyOfBoardState = [...boardState]; // shallow copy the current array of the board state

    if (copyOfBoardState[index] === null) {
      copyOfBoardState[index] = whoseTurnIsIt();
      setBoardState(copyOfBoardState); // update state with copy of array if the cell is null
    } else {
      console.log(index, " is not null");
    }
  }

  function resetBoardState() {
    console.log("this is a reset button");
    setBoardState(initialBoardState);
  }

  return (
    <div className="gameContainer">
      <div className="gameState">
        {boardState.includes(null) ? (
          checkWinner(boardState)
        ) : (
          <div className="gameOverOverlay">its a draw!</div>
        )}
      </div>
      <div className="gameGrid">{createGridCellDivs(boardState)}</div>
      <div className="resetButton">
        <button onClick={resetBoardState}>reset</button>
      </div>
    </div>
  );
}
