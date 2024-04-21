import { useState } from "react";
import "./index.css";

function App() {
  console.log("this rendered again", new Date());
  // creates the beginning array of just blank cells, no burger or pizza

  const initialCellDataArray = createInitialCellDataArray();

  // sets state of cells to be blank cells
  const [cellDataArray, setCellDataArray] = useState(initialCellDataArray);
  // sets state of of which player is making a move ie. player one or two
  const [whichPlayer, setWhichPlayer] = useState("player one");

  // dicerns which cell has been clicked based on cell
  function handleCellClicked(idOfCellClicked) {
    const newArray = toggleCell(idOfCellClicked, cellDataArray);
    setCellDataArray(newArray);
  }

  // fix this function
  const arrayOfCellElements = cellDataArray.map((food) => {
    // player one's emoji for tic tac toe
    if (food.side == "front") {
      if (whichPlayer == "player one") {
        console.log(whichPlayer); // should print out player one
        return (
          <div
            className="cell"
            key={food.id}
            onClick={() => handleCellClicked(food.id)}
          >
            🍕
          </div>
        );
      } else if (whichPlayer == "player two") {
        console.log(whichPlayer); // should print out player two
        return (
          <div
            className="cell"
            key={food.id}
            onClick={() => handleCellClicked(food.id)}
          >
            🍔
          </div>
        );
      }
    } else {
      return (
        <div
          className="cell"
          key={food.id}
          onClick={() => handleCellClicked(food.id)}
        ></div>
      );
    }
  });

  function playerOneSelected() {
    setWhichPlayer("player one");
  }

  function playerTwoSelected() {
    setWhichPlayer("player two");
  }

  function createInitialCellDataArray() {
    return [
      { id: 1, side: "back" },
      { id: 2, side: "back" },
      { id: 3, side: "back" },
      { id: 4, side: "back" },
      { id: 5, side: "back" },
      { id: 6, side: "back" },
      { id: 7, side: "back" },
      { id: 8, side: "back" },
      { id: 9, side: "back" },
    ];
  }

  // restores the original array of null cells
  function resetGame() {
    const newCellDataArray = createInitialCellDataArray();
    setCellDataArray(newCellDataArray);
  }

  return (
    <div>
      <div className="gameGrid">{arrayOfCellElements}</div>
      <button onClick={playerOneSelected}>player one</button>
      <button onClick={playerTwoSelected}>player two</button>
      <button onClick={resetGame}>reset</button>
    </div>
  );
}

// outside of app function
function toggleCell(targetCellID, inputArray) {
  const newArray = inputArray.map((obj) => {
    if (obj.id === targetCellID) {
      return { ...obj, side: getReverseSide(obj.side) };
    } else {
      return { ...obj };
    }
  });

  return newArray;
}

function getReverseSide(side) {
  return side === "front" ? "back" : "front";
}

export default App;
