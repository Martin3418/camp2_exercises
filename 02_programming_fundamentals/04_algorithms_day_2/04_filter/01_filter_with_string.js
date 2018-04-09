// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
function filter(array, str) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (str !== "even" || str !== "odd") {
      newArray.push(i);
    } else if (str === "even" && i % 2 === 0) {
      newArray.push(i)
    } else if (str === "odd" && i % 3 === 0) {

    }
  }
}

console.log(filter);
// do not remove this line, it is for tests
module.exports = filter;
