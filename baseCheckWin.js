const checkWin = (row, col, symbol) => {
  return checkUpDown(row,col,symbol) || checkDiagonal(row,col,symbol);
}

const checkUpDown = (row, col, symbol) => {
  const rowArr = board[row];
  const colArr = []
  for(let i = 0; i < gridSize; i+= 1) {
    colArr.push(board[i][col]);
  }
  let rowWin = true;
  let colWin = true;
  for(let i = 0; i < gridSize; i +=1) {
    if(rowArr[i] !== symbol){
      rowWin = false;
    }
    if(colArr[i] !== symbol){
      colWin = false;
    }
  }
  return rowWin || colWin;
}

const checkDiagonal = (row, col, symbol) => {
  if(row !== col && (row + col) !== gridSize -1) {
    return false;
  }
  let leftDiag = true;
  let rightDiag = true;
  for (let i = 0; i < gridSize; i+=1){
    if(board[i][i] !== symbol){
      leftDiag = false;
    }
    if(board[i][gridSize - 1 - i] !== symbol) {
      rightDiag = false;
    }
  }
  return leftDiag || rightDiag;
}