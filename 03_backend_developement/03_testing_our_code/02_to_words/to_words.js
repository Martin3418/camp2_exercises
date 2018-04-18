function toWords(sentence) {
  const allWords = sentence.split(/[.?!, :]+/);
  // return allWords;
  return allWords.filter(word => word !== "");
}

console.log(toWords("it doesn't work"));

module.exports = toWords;
