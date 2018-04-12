// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.

// exercice fait le 12 avril

function doThisAndThat(startNumber, endNumber) {
  const newArray = [];
  if (startNumber < endNumber) {
    for (let i = startNumber; i <= endNumber; i++)
      newArray.push(i);

  } else {
    for (let i = startNumber; i >= endNumber; i--)
      newArray.push(i);

  }
  return newArray;
}
console.log(doThisAndThat(5,12));




//correction initiale

function range(startNber, stopNber) {
  const array = [];
  if (startNber < stopNber) {
    for (let i = startNber; i <= stopNber; i++){
      array.push(i);
    }
  } else {
    for (let i = startNber; i >= stopNber; i--){
      array.push(i);
    }
  }

  return array;
  }

console.log(range(10, 20));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
