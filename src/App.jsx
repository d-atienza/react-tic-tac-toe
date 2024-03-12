import { useState } from "react";
import "./App.css";

function App() {
  console.log("this rendered again", new Date());
  const initialCellDataArray = createInitialCellDataArray();

  const [cellDataArray, setCellDataArray] = useState(initialCellDataArray);

  function handleCellClicked(idOfCellClicked) {
    const newArray = toggleCell(idOfCellClicked, cellDataArray);
    setCellDataArray(newArray);
  }

  const arrayOfCellElements = cellDataArray.map((food) => {
    if (food.side == "back") {
      return (
        <div
          className="cell"
          key={food.id}
          onClick={() => handleCellClicked(food.id)}
        >
          🍕
        </div>
      );
    } else {
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
  });

  function resetGame() {
    const newCellDataArray = createInitialCellDataArray();

    setCellDataArray(newCellDataArray);
  }

  return (
    <div>
      <div className="gameGrid">{arrayOfCellElements}</div>
      <button onClick={resetGame}>reset</button>
    </div>
  );
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
