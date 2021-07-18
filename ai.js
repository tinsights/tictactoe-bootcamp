const computerMove = (row, col) => {
  let winningSquare = findWinningSquare(-1);
  console.log((findWinningSquare(-1)));
  if (winningSquare) {
    console.log('I can win!');
  }
  else {
    winningSquare = findWinningSquare(1);
  }
  console.log(winningSquare);
  if (winningSquare) {
    const rowIndex = winningSquare[0];
    const colIndex = winningSquare[1];
    board[rowIndex][colIndex] = currentPlayer;
    boardClone[rowIndex][colIndex] = -1;
    return checkWin(rowIndex, colIndex);
  }
  let randomRow = randomSq();
  let randomCol = randomSq();
  while (board[randomRow][randomCol] !== '') {
    randomRow = randomSq();
    randomCol = randomSq();
  }
  board[randomRow][randomCol] = currentPlayer;
  boardClone[randomRow][randomCol] = -1;
  return checkWin(randomRow, randomCol);
};

const randomSq = () => Math.floor(Math.random() * gridSize);

console.log(summation([0, -1, -1]));
console.log(summation([-1, 1, 1]));
console.log(summation([1, -1, -1]));
