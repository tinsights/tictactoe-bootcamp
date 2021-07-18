const findWinningSquare = (player) => {
  const rowArr = [];
  const colArr = [];
  const leftDiag = [];
  const rightDiag = [];
  let colIndex;
  let rowIndex;
  const consecutive = player * (winCond - 1);
  console.log(`we are looking for ${consecutive}`);
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
    console.log(rowArr);
    console.log(colArr);

    if (summation(rowArr[i]) === consecutive) {
      console.log(`Row total is ${summation(rowArr[i])}`);
      colIndex = rowArr[i].indexOf(0);
      return [i, colIndex];
    }
    if (summation(colArr[i]) === consecutive) {
      console.log(`Col total is ${summation(colArr[i])}`);
      rowIndex = colArr[i].indexOf(0);
      return [rowIndex, i];
    }
  }
  if (summation(leftDiag) === consecutive) {
    console.log(`Left diag is ${summation(leftDiag)}`);
    rowIndex = leftDiag.indexOf(0);
    console.log(rowIndex);
    return [rowIndex, rowIndex];
  }
  if (summation(rightDiag) === consecutive) {
    console.log(`Right diag is ${summation(rightDiag)}`);
    colIndex = rightDiag.indexOf(0);
    console.log(colIndex);
    switch (player) {
      case (1):
        return [colIndex, gridSize - 1 - colIndex];
        break;
      case (-1):
        return [gridSize - 1 - colIndex, colIndex];
        break;
    }
  }
  return false;
};

const summation = (arr) => {
  const result = arr.reduce((a, b) => a + b);
  console.log(`Current sum is ${result}`);
  return result;
};
