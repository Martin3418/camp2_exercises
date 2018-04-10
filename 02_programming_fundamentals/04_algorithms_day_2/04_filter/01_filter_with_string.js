// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]

function filter(array, str) {
  const filteredArray = [];
  if (str === "even" || str === "odd") {
    array.forEach(function(element) {
      if (str === "odd" && element % 2 === 1) {
        filteredArray.push(element);
      } else if (str === "even" && element % 2 === 0) {
        filteredArray.push(element);
      }
    });
  } else {
    console.log("error");
  }
  return filteredArray;
}

console.log(filter([1,2,3,4,5], "odd"));


// do not remove this line, it is for tests
module.exports = filter;
