// Global variables:
let canClick;             // bool to keep track if game has ended (tie or win)
let turnCount;            // number of turns passed (used to check for tie)
let winCond = 3;          // win condition, # in a row
let board;                // keep data about the game in a 2-D array
let boardClone;           // keep numerical data about the game
let boardElement;         // the element that contains the rows and squares
let currentPlayer = 'X';  // current player global starts at X

// Global DOM elements:

// the element that contains the entire board
// we can empty it out for convenience
const boardContainer = document.createElement('div');

// User inputs
const sizeSelector = document.createElement('input');
const startButton = document.createElement('button');
startButton.innerText = 'Start New Game'
sizeSelector.type = 'number';
sizeSelector.min = 3;
sizeSelector.max = 4;
sizeSelector.placeholder = "Board Size"

// we want the inputs to stay on the top of the screen,
// above the board
document.body.appendChild(sizeSelector);
document.body.appendChild(startButton);

document.addEventListener("DOMContentLoaded", () => {
  startButton.addEventListener('click', initGame);
});

// create the board container element and put it on the screen
const initGame = () => {
  gameToggle()
  canClick = true;
  board = [];
  boardClone = [];
  turnCount = 1;
  gridSize = Number(sizeSelector.value);
  winCond = gridSize;
  for(let i = 0; i < gridSize; i+=1) {
    board.push(new Array(gridSize).fill(''));
    boardClone.push(new Array(gridSize).fill(0));
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
      if(board[i][j] !== '') {
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
  turnCount += 1;
};

const squareClick = (row, col) => {
  // see if the clicked square has been clicked on before
  if (board[row][col] === '' && canClick) {
    console.log('coordinates', row, col);
    canClick = false;
    // alter the data array, set it to the current player
    board[row][col] = currentPlayer;
    boardClone[row][col] = 1;

    // refresh the creen with a new board
    // according to the array that was just changed
    buildBoard(board);
    // check for win
    if(checkWin(row,col,winCond)) {
      console.log("WIN");
      gameToggle();
      return;
    }
    else if (turnCount === gridSize * gridSize) {
      console.log("TIE");
      gameToggle();
      return;
    }

    // change the player
    togglePlayer();
    if(computerMove(row,col)){
      setTimeout(() => {
        buildBoard(board)
        console.log("Computer Win!");
        gameToggle();
      }, 1000);
    }
    else if (turnCount === gridSize * gridSize) {
      console.log("TIE");
      gameToggle();
    }
    else{
      setTimeout(() => {
        buildBoard(board);
        togglePlayer();
        canClick = true;
      }, 1000);
    }
  }
};

const gameToggle = () => {
  startButton.disabled = !startButton.disabled;
  sizeSelector.disabled = !sizeSelector.disabled;
}