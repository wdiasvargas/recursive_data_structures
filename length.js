const def = x => (typeof x !== 'undefined')
const length = ([x, ...xs], len = 0) => def(x) ? length(xs, len + 1) : len

const array = [1,2,3,4,5]
console.log(length(array)+' is a length array')