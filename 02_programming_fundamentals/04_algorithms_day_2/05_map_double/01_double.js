// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...
function double(array) {

}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;

function factorialAndThenDo(number, toto) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  toto(result);
}
factorialAndThenDo(5, function(result) {
  console.log("The result of your operation is ", result);
});
