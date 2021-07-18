const checkWin = (row, col) => {
  return checkUpDown(row,col) || checkDiagonal(row,col);
}

const checkUpDown = (row, col) => {
  const rowArr = board[row];
  const colArr = []
  for(let i = 0; i < gridSize; i+= 1) {
    colArr.push(board[i][col]);
  }
  let rowWin = true;
  let colWin = true;
  for(let i = 0; i < gridSize; i +=1) {
    if(rowArr[i] !== currentPlayer){
      rowWin = false;
    }
    if(colArr[i] !== currentPlayer){
      colWin = false;
    }
  }
  return rowWin || colWin;
}

const checkDiagonal = (row, col) => {
  if(row !== col && (row + col) !== gridSize -1) {
    return false;
  }
  let leftDiag = true;
  let rightDiag = true;
  for (let i = 0; i < gridSize; i+=1){
    if(board[i][i] !== currentPlayer){
      leftDiag = false;
    }
    if(board[i][gridSize - 1 - i] !== currentPlayer) {
      rightDiag = false;
    }
  }
  return leftDiag || rightDiag;
}