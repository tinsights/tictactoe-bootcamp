const computerMove = () => {
  let row = randomSq();
  let col = randomSq();
  do {
    row = randomSq();
    col = randomSq();
  }
  while (typeof board[row][col] !== 'undefined');
  board[row][col] = currentPlayer;
  return checkWin(row, col);
};

const randomSq = () => Math.floor(Math.random() * gridSize);
