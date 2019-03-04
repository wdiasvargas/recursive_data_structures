const def = x => (typeof x !== 'undefined')
const first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n - 1)] : []

