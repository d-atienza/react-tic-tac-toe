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
 *
 * @param {*} board
 * @returns {'x' | 'o' | 'draw' | 'in-play'}
 */
export default function checkWinner(board) {
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return <div className="gameOverOverlay">{board[a]} is the winner!</div>;
    }
  }
}
