// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]

function filter(array, fn) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function pickEvenNumbers(element) {
  return element % 2 === 0;
}

function pickOddNumbers(element) {
  return element % 2 === 1;
}

console.log(filter([], pickEvenNumbers));
console.log(filter([1, 2, 3, 4, 5], pickEvenNumbers));
console.log(filter([1, 2, 3, 4, 5], pickEvenNumbers));

// do not remove this line, it is for tests
module.exports = filter;
