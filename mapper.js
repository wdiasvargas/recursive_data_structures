export const mapper = 
(fn, [head, ...tail]) =>
  (head === undefined && tail.length < 1 ? [] : [fn(head), ...mapper(fn, tail)])
