// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
const newFilteredArray = [];

function pickEvenNumbers(arrayEntered) {
  for (let i = 0; i < arrayEntered.length; i++)
    if (arrayEntered[i] % 2 === 1) {
      newFilteredArray.push(arrayEntered[i]);
    }
}

filter
const filteredArray = array.filter(fn => array % 2 === 0);



console.log(filter([1,2,3,4,5], pickEvenNumbers));

// do not remove this line, it is for tests
module.exports = filter;
