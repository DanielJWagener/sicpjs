// Exercise 1.2
(5 + 4 + (2 - (3 - (6 + 4 / 5)))) / (3 * (6 - 2) * (2 - 7));

// Exercise 1.3
function sumOfSquaresOfTwoLargest(a: number, b: number, c: number) {
  function square(x: number) {
    return x * x;
  }

  function sumOfSquares(y: number, z: number) {
    return square(y) + square(z);
  }

  return a > b && a > c
    ? sumOfSquares(a, b > c ? b : c)
    : b > c && b > a
    ? sumOfSquares(b, a > c ? a : c)
    : sumOfSquares(c, a > b ? a : b);
}

console.log(sumOfSquaresOfTwoLargest(1, 2, 3)); // 13
console.log(sumOfSquaresOfTwoLargest(2, 3, 1)); // 13
console.log(sumOfSquaresOfTwoLargest(3, 1, 2)); // 13
console.log(sumOfSquaresOfTwoLargest(0, 1, 2)); // 5
console.log(sumOfSquaresOfTwoLargest(1, 2, 0)); // 5
console.log(sumOfSquaresOfTwoLargest(2, 1, 0)); //
