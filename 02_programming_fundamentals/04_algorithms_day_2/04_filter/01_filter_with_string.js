// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]


function filter(array, str) {
  const filteredArray = [];
  for(let i = 0; i <= array.length; i++)
    if (str !== "even" && str !== "odd") {
      return array;
    } else if (str === "even" && (array[i] % 2 === 0)) {
      filteredArray.push(array[i]);
    } else if (str === "odd" && (array[i] % 2 === 1)) {
      filteredArray.push(array[i]);
    }
  return filteredArray;
}

console.log(filter([0, 1, 2, 3, 4, 5], "odd"));

// do not remove this line, it is for tests
module.exports = filter;
