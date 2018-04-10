function getRandomIntUpTo(max) {
  return Math.floor(Math.random() * max) + 1;
}
const valueToBeFound = getRandomIntUpTo(100);
console.log(valueToBeFound);

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questionAsked = "Guess the number I chose: ";

function anotherTry(question) {
  reader.question(question, numberInput => {
    const numberTried = parseInt(numberInput, 10);

    if (numberTried > 100 || numberTried < 1) {
      console.log("Too bad");
      anotherTry("The number is between 1 and 100\n");
      return;
    } else if (isNaN(numberTried)) {
      anotherTry("This is not a number\n");
      return;
    }

    if (numberTried === valueToBeFound) {
      console.log("You won!");
      reader.close();
    } else if (numberTried < valueToBeFound) {
      anotherTry("Too low\n");
    } else if (numberTried > valueToBeFound) {
      anotherTry("Too high\n");
    }
  });
}

anotherTry(questionAsked);
