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
// 2. Handle Players, Turns, and the End (Loop)
// 3. Player's input and update a Cell

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: [null], [null], [null]
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
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "    1   2   3";
  return `${header}\n${rows}`;
}

console.log(renderBoard());
