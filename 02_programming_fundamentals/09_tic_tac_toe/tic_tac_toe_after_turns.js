// 2. Handle Players, Turns, and the End (Loop)
// 3. Player's input and update a Cell
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: [1, 2, 3],
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

function handleInput(input) {
  if (input === "q") {
    reader.close();
  } else {
    updateCell(input);
    nextPlayer();
    playTurn();
  }
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What's your move?\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  playTurn();
}

start();

// 3. Player's input and update a Cell

function updateCell(cell) {
  state[cell[0]][cell[1]-1] = currentPlayer;
}
