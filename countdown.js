const arr = []
const countdown = n => (n >= 1) ? (arr.push(n), countdown(--n)) : n
countdown(5)
console.log(arr)