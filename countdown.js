const arr = []
const countdown = n => (n >= 1) ? (arr.push(n), countdown(--n)) : n
countdown(15)
console.log(arr)