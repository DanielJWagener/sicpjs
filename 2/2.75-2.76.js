// 2.75
function make_from_mag_ang() {
  // function magnitude(z) {
  //   return head(z);
  // }
  // function angle(z) {
  //   return tail(z);
  // }
  function dispatch(op) {
    return op === "real_part"
      ? head(z) * math_cos(tail(z))
      : op === "imag_part"
      ? head(z) * math_sin(tail(z))
      : op === "magnitude"
      ? head(z)
      : op == "angle"
      ? tail(z)
      : error(op, "unknown op - make_from_mag_ang");
  }
}
