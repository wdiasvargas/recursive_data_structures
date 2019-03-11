const friends = [{
  name: 'Jhon',
  age: 30
}, {
  name: 'Ana',
  age: 20
}, {
  name: 'Chris',
  age: 25
} ]
const comparePerson = (a, b) =>
  (a.age < b.age) ? -1 : (a.age > b.age) ? 1 : 0
console.log(friends.sort(comparePerson))
