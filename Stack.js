/* eslint-disable no-unused-vars */
class Stack {
  constructor () {
    this.items = []
  }
  /* push metodo responsavel pro adicinar novos elementos no top da stack */
  push (element) {
    this.items.push(element)
  }
  pop () {
    return this.items.pop()
  }
  peek () {
    return this.items[this.items.length - 1]
  }
  isEmpty () {
    return this.items.length === 0
  }
  size () {
    return this.items.length
  }
  clear () {
    this.items = []
  }
}

const stack = new Stack()
console.log('O Array esta vazio', stack.isEmpty())// true
stack.push(5)
stack.push(8)
console.log('O elemento do topo da stack é :', stack.peek())
stack.push(11)
console.log('O tamanho do array é : ', stack.size())
console.log('O Array esta vazio', stack.isEmpty())
stack.push(15)
console.log(stack)
stack.pop()
stack.pop()
console.log(stack.size())

/*
push
pop
peek
isEmpty
clear
size
*/
