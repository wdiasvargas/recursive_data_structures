const Reuler = (f, x, y, h, b) => (x + 1.01 * h >= b) ? ((h = b - x), (y + h * f(x, y))) :
  Reuler(x + h, y + h * f(x, y), h, b)
