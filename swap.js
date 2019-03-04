const map = require( './mapper')
const swap = (a, i, j) => (
  map(a, (x, y) => {
    (y === i) ? a[j]
      (y === j) ? a[i] : (x)
  })
)
const array = [1,2,3,4,5]
console.log(swap,0,4);