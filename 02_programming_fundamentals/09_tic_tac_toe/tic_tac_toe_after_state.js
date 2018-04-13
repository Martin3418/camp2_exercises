// // 1. display grid
// 2. handle players, turns, end
// 3. player input and update cell until

//distinguer le 'state' de l''affichage' => garder le strict minimum dans le state

/*
Object.keys(state)
Object.values(state)
Object.entries
*/
// 1. Display grid

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

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
  const letters = Object.keys(state); //reprend toutes les lettres de state

  const rows = letters.map(renderRow).join("\n");

  const header = "    1   2   3";
  return `${header}\n${rows}`;
}

console.log(renderBoard());

// 2. Handle Players, Turns, and the End (Loop)
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function playTurns() {
  console.log(renderRow());
  reader.question("Player, please select the cell you want to play in: \n", cellEntered => {
    console.log(`You entered ${cellEntered}`);
    updateCellWithO(cellEntered);
    console.log(renderBoard());
    if (cellEntered === "q") {
      reader.close();
    } else {
      playTurns()
    }
  });
}

function startGame() {
  currentPlayer;
  playTurns();
}

// 3. Player's input and update a Cell


function updateCellWithX(cell) {
  state[cell.slice(0)[cell.slice(1)]] = "X"
}
function updateCellWithO(cell) {
  state[cell.slice(0)[cell.slice(1)]] = "O"
}
startGame();
