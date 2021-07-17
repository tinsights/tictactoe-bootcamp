const baseCheckWin = (board, currentPl) => {
  // check every position
  // there is a conditional for all 15 win conditions
  if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
    // XXX
    console.log("win!");
  } 

  if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
    //
    // XXX
    console.log("win!");
  }
  if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
    //
    //
    // XXX
    console.log("win!");
  }
  if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
    // X
    // X
    // X
    console.log("win!");
  }
  if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
    //  |X|
    //  |X|
    //  |X|
    console.log("win!");
  }
  if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
    //  | |X
    //  | |X
    //  | |X
    console.log("win!");
  }
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    // X| |
    //  |X|
    //  | |X
    console.log("win!");
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    //  | |X
    //  |X|
    // X| |
    console.log("win!");
  }
};