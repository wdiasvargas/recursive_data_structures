const filterr = (pred, [head, ...tail]) =>
  head === undefined ? [] : (pred(head) ? [head, ...filterr(pred, tail)] : [...filterr(pred, tail)])
