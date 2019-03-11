const reverse = ([x, ...xs]) => (typeof x !== 'undefined') ? [...reverse(xs), x] : []

// function reverse([x, ...xs]) {
//   if (typeof x !== 'undefined') {
//     return [...reverse(xs), x]
//   } else {
//     [];
//   }
// }
const str = 'abcdefghijklmnopqrstuvwxyz'
console.log(reverse(str))
