// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  let result = "";
  for (let i = 0; i < number.toString().length; i++) {
    const square = number.toString().charAt(i)
    * number.toString().charAt(i);
    result += square;
  }
  return Number(result);
}

function squareDigits(number) {
  const numberString = number.toString();
  const digits =
    numberString
      .split("");
      .map((digitString) => parseInt(digitString, 10))
  const digitsSquared = digits.map((digit) => digit * digit);

 const digitsJoined = digitsSquared.join("");
 return parseInt(digitsJoined, 10);


console.log(squareDigits(9129));
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
