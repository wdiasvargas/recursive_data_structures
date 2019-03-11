let names = ['Ana', 'ana', 'john', 'John']
console.log(names.sort())
names = ['Ana', 'ana', 'john', 'John'] // reset array original state 
console.log(names.sort((a, b) => (a.toLowerCase() < b.toLowerCase()) ? -1 : (a.toLowerCase() > b.toLowerCase()) ? 1 : 0))
names.sort((a, b) => a.localeCompare(b))
console.log(names.sort((a, b) => a.localeCompare(b)))
const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)))