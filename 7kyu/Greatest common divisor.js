// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// My solution
function mygcd(x, y) {
  while (x != y) {
    if (x > y) {
      let num = x;
      x = y;
      y = num;
    }
    y = y - x;
  }
  return x;
}
