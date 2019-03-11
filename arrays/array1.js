// const nums = []
// for (var i = 0; i < 100; ++i) {
//   nums[i] = i + 1
// }
// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
// console.log(sum)

const numbers = [1, 2, 3, 5, 8, 13, 21];
let sum = 0;
for (let i = 0; i < numbers.length; ++i) {
  sum += numbers[i];
}
console.log(sum); // displays 53
