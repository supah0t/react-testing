function add(x, y, z) {
  let sum = 0;

  return function() {
    return sum + x;
  }
}
