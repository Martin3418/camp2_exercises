// // 1. display grid
let grid = "   |   |   \n   |   |   \n___|___|___\n   |   |   \n   |   |   \n___|___|___\n   |   |   \n   |   |   \n   |   |   ";
// function displayGrid(messageToPlayer) {
//   console.log(grid);
//   console.log(messageToPlayer);
// }
// displayGrid("Welcome!");

// 2. handle players, turns, end


function playerXStarts(messageToPlayer) {
    let gridTable = grid.split("");
    gridTable.splice(13, 1, "X");
    console.log(gridTable.join(""));


    // function playerOPlays() {
    //   gridTable.splice(21, 1, "O");
    //   console.log(gridTable.join(""));
    // }

    grid
    .split("")
    .splice(13, 1, "X")
    .join("");
    console.log(grid);
}
playerXStarts();
// 3. player input and update cell until
// const readline = require("readline");
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const playerOptions = [13, 17, 21, 49, 53, 57, 85, 89, 93]
