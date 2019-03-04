// flatten
const def = x => (typeof x !== 'undefined')
const isArray = x => Array.isArray(x)

const flatten = ([
    x, ...xs
  ]) => def(x) ?
  isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)] : []

const array1 = ["b", "a", "n"]
const array2 = ["a", ["n", "a"]]
console.log(flatten([array1, array2]));
