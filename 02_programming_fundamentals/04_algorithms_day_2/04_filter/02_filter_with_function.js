// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
const newFilteredArray = [];

function filter(array, fn) {
  fn(array);
  return newFilteredArray;
}

function pickEvenNumbers(arrayEntered) {
  for (let i = 0; i < arrayEntered.length; i++)
    if (arrayEntered[i] % 2 === 0) {
      newFilteredArray.push(arrayEntered[i]);
    }
}

function pickOddNumbers(arrayEntered) {
  for (let i = 0; i < arrayEntered.length; i++)
    if (arrayEntered[i] % 2 === 1) {
      newFilteredArray.push(arrayEntered[i]);
    }
}

console.log(filter([1,2,3,4,5], pickOddNumbers));

// do not remove this line, it is for tests
module.exports = filter;
