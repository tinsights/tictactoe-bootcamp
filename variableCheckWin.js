const checkWin = (row, col, inARow = winCond) => checkUpDown(row, col, inARow) || checkDiagonal(row, col, inARow);

const checkUpDown = (row, col, inARow) => {
  const rowArr = board[row];
  const colArr = [];
  let rowConsecutive = 0;
  let colConsecutive = 0;
  for (let i = 0; i < gridSize; i += 1) {
    colArr.push(board[i][col]);
  }
  for (let i = 0; i < gridSize; i += 1) {
    if (rowArr[i] === currentPlayer) {
      rowConsecutive += 1;
      if (rowConsecutive === inARow) {
        return true;
      }
    }
    else {
      rowConsecutive = 0;
    }
    if (colArr[i] === currentPlayer) {
      colConsecutive += 1;
      if (colConsecutive === inARow) {
        return true;
      }
    }
    else {
      colConsecutive = 0;
    }
  }
  return false;
};

const checkDiagonal = (row, col, inARow) => {
  if (row !== col && (row + col) !== gridSize - 1) {
    return false;
  }
  let leftDiagConsecutive = 0;
  let rightDiagConsecutive = 0;
  for (let i = 0; i < gridSize; i += 1) {
    if (board[i][i] === currentPlayer) {
      leftDiagConsecutive += 1;
      if (leftDiagConsecutive === inARow) {
        return true;
      }
    }
    else {
      leftDiagConsecutive = 0;
    }
    if (board[i][gridSize - 1 - i] === currentPlayer) {
      rightDiagConsecutive += 1;
      if (rightDiagConsecutive === inARow) {
        return true;
      }
    }
    else {
      rightDiagConsecutive = 0;
    }
  }
  return false;
};
