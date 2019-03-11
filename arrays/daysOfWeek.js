// let daysOfWeek = new Array()
// daysOfWeek = new Array(7)
// daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const def = x => (typeof x !== 'undefined')
const length = ([x, ...xs], len = 0) => def(x) ? length(xs, len + 1) : len
console.log(length(daysOfWeek))

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i])
}