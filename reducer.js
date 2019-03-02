const reducer = (fn, acc, [head, ...tail]) => head === undefined
  ? acc : reducer(fn, fn(acc, head), tail)
