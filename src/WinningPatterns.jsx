/**
 * array of tuples of three board indices, each describing a row
 */
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

/**
 * @returns {'x' | 'o' | 'draw' | 'in-play'}
 */
export default function checkWinner(board) {
  for (const winningPattern of winningPatterns) {
    const [indexA, indexB, indexC] = winningPattern;
    const firstCell = board[indexA];
    const secondCell = board[indexB];
    const thirdCell = board[indexC];

    const isMatchingLine =
      firstCell !== null && firstCell === secondCell && firstCell === thirdCell;

    if (isMatchingLine) {
      return firstCell;
    }
  }

  return board.includes(null) ? "in-play" : "draw";
}
