const def = x => (typeof x !== 'undefined')
const reverse = ([x, ...xs]) => def(x) ? [...reverse(xs), x] : []
const arr = [5, 4, 3, 2, 1]
console.log(reverse(arr))
