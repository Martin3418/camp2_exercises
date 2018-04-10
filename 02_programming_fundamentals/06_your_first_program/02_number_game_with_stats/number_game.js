const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const randomValue = getRandomInt(100) + 1;
const question = "Guess the number I chose between 1 and 100: ";
let numberOfTries = 0;
console.log(randomValue);
function anotherTry(question) {
  numberOfTries++;
  reader.question(question, tryNumber => {
    if (isNaN(tryNumber)) {
      anotherTry("This was not a number\n");
    } else if (tryNumber < 1 || tryNumber > 100) {
      anotherTry("The number is between 1 and 100\n");
    } else if (tryNumber < randomValue) {
      anotherTry("Too low\n");
    } else if (tryNumber > randomValue) {
      anotherTry("Too high\n");
    } else {
      if (numberOfTries === 1) {
        console.log(`Only ${numberOfTries} try to win! How lucky you are! Play loto today!`);
        reader.close();
      } else {
        console.log(`You won after ${numberOfTries} tries!`);
        reader.close();
      }
    }
  });
}
anotherTry(question);
