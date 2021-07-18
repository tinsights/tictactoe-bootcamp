let gridSize = 3;
let gameOver = false;

// keep data about the game in a 2-D array
const board = [];
// the element that contains the rows and squares
let boardElement;

// the element that contains the entire board
// we can empty it out for convenience
const boardContainer = document.createElement('div');
const sizeSelector = document.createElement('input');
const startButton = document.createElement('button');

startButton.innerText = 'Start New Game'
sizeSelector.type = 'number';
sizeSelector.min = 3;
sizeSelector.max = 5;
sizeSelector.placeholder = "Board Size"

document.body.appendChild(sizeSelector);
document.body.appendChild(startButton);

// current player global starts at X
let currentPlayer = 'X';

// create the board container element and put it on the screen
const initGame = () => {
  gridSize = Number(sizeSelector.value);

  for(let i = 0; i < gridSize; i+=1) {
    board.push(new Array(gridSize));
  }
  document.body.appendChild(boardContainer);
  // build the board - right now it's empty
  buildBoard(board);
};

// completely rebuilds the entire board every time there's a click
const buildBoard = (board) => {
  // start with an empty container
  boardContainer.innerHTML = '';
  boardElement = document.createElement('div');
  boardElement.classList.add('board');

  // move through the board data array and create the
  // current state of the board
  for (let i = 0; i < board.length; i += 1) {
    // separate var for one row / row element
    const row = board[i];
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    // set each square
    // j is the column number
    for (let j = 0; j < row.length; j += 1) {
      // one square element
      const square = document.createElement('div');
      square.classList.add('square');

      // set the text of the square according to the array
      if(typeof board[i][j] !== "undefined") {
        square.innerText = board[i][j];
      }

      rowElement.appendChild(square);

      // set the click all over again
      // eslint-disable-next-line
      square.addEventListener('click', () => {
        squareClick(i, j);
      });
    }

    // add a single row to the board
    boardContainer.appendChild(rowElement);
  }
};

// switch the global values from one player to the next
const togglePlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const squareClick = (row, col) => {
  console.log('coordinates', row, col);

  // see if the clicked square has been clicked on before
  if (typeof board[row][col] === 'undefined' && !gameOver) {
    // alter the data array, set it to the current player
    board[row][col] = currentPlayer;

    // refresh the creen with a new board
    // according to the array that was just changed
    buildBoard(board);

    // check for win
    if(checkWin(row, col)) {
        console.log("WIN");
        gameOver = true;
      }

    // change the player
    togglePlayer();
  }
};

startButton.addEventListener('click', initGame);