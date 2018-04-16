// 3. Player's input and update a Cell
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

let currentPlayer;

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];
  const row = cells.map(renderCell).join(" | ");

  return `${letter} | ${row} |`;
}

function renderBoard() {
  const letters = Object.keys(state);
  const rows = letters.map(renderRow).join("\n");

  const header = "    1   2   3";
  return `${header}\n${rows}`;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;

}

function getCoordinate(input) {
  const letter = input[0];
  const digit = parseInt(input[1], 10) - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function handleInput(input) {
  if (input === "q") {
    reader.close();
  } else {
    const coordinate = getCoordinate(input);
    if (coordinate !== null) {
      updateState(coordinate);
      handleWin();
      nextPlayer();
    } else {
      console.log("This is not a valid move!");
    }
    playTurn();
  }
}

function playTurn() {
  if (state.a.includes(null) || state.b.includes(null) || state.c.includes(null)) {
    console.log(renderBoard());
    reader.question(`${currentPlayer}: What's your move?\n`, handleInput);
  } else {
    console.log(renderBoard());
    console.log("GAME OVER");
    reader.close();
  }
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  playTurn();
}

function handleWin() {
  if ((state.a[0] === currentPlayer && state.a[1] === currentPlayer && state.a[2] === currentPlayer) ||
  (state.b[0] === currentPlayer && state.b[1] === currentPlayer && state.b[2] === currentPlayer) ||
  (state.c[0] === currentPlayer && state.c[1] === currentPlayer && state.c[2] === currentPlayer) ||
  (state.a[0] === currentPlayer && state.b[1] === currentPlayer && state.c[2] === currentPlayer) ||
  (state.c[0] === currentPlayer && state.b[1] === currentPlayer && state.a[2] === currentPlayer) ||
  (state.a[0] === currentPlayer && state.b[0] === currentPlayer && state.c[0] === currentPlayer) ||
  (state.a[1] === currentPlayer && state.b[1] === currentPlayer && state.c[1] === currentPlayer) ||
  (state.a[2] === currentPlayer && state.b[2] === currentPlayer && state.c[2] === currentPlayer)) {
    console.log(renderBoard());
    console.log(`Player ${currentPlayer} wins!`);
    reader.close();
  }
}
start();
