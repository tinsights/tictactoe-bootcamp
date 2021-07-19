const findWinningSquare = (player) => {
  const rowArr = [];
  const colArr = [];
  const leftDiag = [];
  const rightDiag = [];
  let colIndex;
  let rowIndex;
  const consecutive = player * (winCond - 1);
  for (let i = 0; i < gridSize; i += 1) {
    rowArr.push(boardClone[i]);
    colArr.push([]);
    for (let j = 0; j < gridSize; j += 1) {
      colArr[i].push(boardClone[j][i]);
    }
    leftDiag.push(boardClone[i][i]);
    rightDiag.push(boardClone[i][gridSize - 1 - i]);
  }
  for (let i = 0; i < gridSize; i += 1) {
    if (summation(rowArr[i]) === consecutive) {
      colIndex = rowArr[i].indexOf(0);
      return [i, colIndex];
    }
    if (summation(colArr[i]) === consecutive) {
      rowIndex = colArr[i].indexOf(0);
      return [rowIndex, i];
    }
  }
  if (summation(leftDiag) === consecutive) {
    rowIndex = leftDiag.indexOf(0);
    // console.log(rowIndex);
    return [rowIndex, rowIndex];
  }
  if (summation(rightDiag) === consecutive) {
    colIndex = rightDiag.indexOf(0);
    return [colIndex, gridSize - 1 - colIndex];
  }
  return false;
};

const summation = (arr) => {
  const result = arr.reduce((a, b) => a + b);
  return result;
};
