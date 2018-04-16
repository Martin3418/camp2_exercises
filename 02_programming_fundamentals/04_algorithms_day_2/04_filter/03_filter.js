// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]


function pickOddNumbers(element) {
  return element % 2 === 1;
}

function pickEvenNumbers(element) {
  return element % 2 === 0;
}

function filter(array, fn) {
  return array.filter(fn);
}
// console.log([1, 2, 3, 4, 5].filter(pickEvenNumbers));
// console.log(filter([1, 2, 3, 4, 5], pickOddNumbers));
// console.log(filter([1, 2, 3, 4, 5], pickEvenNumbers));

// do not remove this line, it is for tests
module.exports = filter;
