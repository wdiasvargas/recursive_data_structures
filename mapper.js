export const mapper =
  (fn, [head, ...tail]) =>
  (head === undefined && tail.length < 1 ? [] : [fn(head), ...mapper(fn, tail)])
  
const indexOf = (fn, [x, ...xs]) => (x === x ? x : [fn[x], ...indexOf(fn, xs)])
