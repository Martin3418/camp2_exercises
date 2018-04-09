// Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.
//
// For example:
//
// decodeMorse(".... . -.--   .--- ..- -.. .") === "HEY JUDE";

// Here is the array of each letter in morse code
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

let morse = ".... . -.--   .--- ..- -.. .";
let splitWord = morse.split("  ");
let wordOne = splitWord[0];
let splitLetters = wordOne.split(" ");

function findWord(morseBlockW){
  console.log(MORSE_CODE[morseBlockW]);
};
let twoWords = splitWord.forEach(findWord);

// function findLetters(morseBlockL){
//   console.log(MORSE_CODE[morseBlockL]);
// };
// let splitWord.forEach(findLetters);
//
// let splitLetters = morse.split(" ").forEach(splitWord);



// function decodeMorse(morse) {
//
//   };
//
// decodeMorse(".... . -.--   .--- ..- -.. .");

// Do not remove last lines, it is for tests
// eslint-disable-next-line
//module.exports = decodeMorse;
