// Exercise 1.10

function A(x, y) {
  return y === 0 ? 0 : x === 0 ? 2 * y : y === 1 ? 2 : A(x - 1, A(x, y - 1));
}

console.log(A(1, 10));
console.log(A(2, 4));
console.log(A(3, 3));

function f(n) {
  return A(0, n);
}

function f2(n) {
  return 2 * n;
}

console.log(f(6), f2(6));

function g(n) {
  return A(1, n);
}

function g2(n) {
  return 2 ** n;
}
console.log(g(6), g2(6));
console.log(g(16), g2(16));

function h(n) {
  return A(2, n);
}

// 2 tetration, 2↑↑n

console.log(h(4));
console.log(h(3));
console.log(h(2));
console.log(h(1));
