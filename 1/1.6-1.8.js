// Exercise 1.6
function conditional(predicate, then_clause, else_clause) {
  return predicate ? then_clause : else_clause;
}

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function is_good_enough(guess, x) {
  return abs(square(guess) - x) < 0.0001;
}

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
  return sqrt_iter(1, x);
}

function sqrt_iter_conditional(guess, x) {
  return conditional(is_good_enough(guess, x), guess, sqrt_iter_conditional(improve(guess, x), x));
}

function sqrt_conditional(x) {
  return sqrt_iter_conditional(1, x);
}

function abs(x) {
  return x > 0 ? x : x === 0 ? 0 : -x;
}

function square(x) {
  return x * x;
}

// console.log(sqrt_conditional(2)); // Maximum call stack size exceeded
// In applicative order, arguments are evaluated immediately, so we never reach the base case
// The above implementation would require normal order

// Exercise 1.7
console.log(sqrt(0.000003));
// console.log(sqrt(123456789101112)); // Maximum call stack size exceeded
console.log(sqrt_precision(123456789101112)); // 11111111.065821053

function sqrt_precision(x) {
  return sqrt_iter_precision(1, x, x);
}

function sqrt_iter_precision(guess, x, prevGuess) {
  return is_good_enough_precision(guess, x, prevGuess)
    ? guess
    : sqrt_iter_precision(improve(guess, x), x, guess);
}

function is_good_enough_precision(guess, x, prevGuess) {
  return abs(guess - prevGuess) / prevGuess < 0.0001;
}
