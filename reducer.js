const reducer = (fn, acc, [head, ...tail]) => head === undefined ?
  acc : reducer(fn, fn(acc, head), tail)

const double = x => x * 3
console.log(reducer(double,0,[1,2]))
