let numbers = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers.reverse())
console.log(numbers.sort())

console.log(numbers.sort((a, b) => a - b))
const compare = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0

numbers.sort(compare)
