// This function will clear the terminal when called
const clear = require("cli-clear");
const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
const displayCards = ["*", "*", "*", "*", "*", "*"];
//mélanger
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function anotherTry(question) {
  numberOfTries++;
  reader.question(question, pick2Cards => {

  reader.close();
  }  
}
