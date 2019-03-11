/* eslint-disable no-unused-vars */
class Stack {
  constructor () {
    this.clear.count = 0
    this.items = {}
  }
  /* push metodo responsavel pro adicinar novos elementos no top da stack */
  push (element) {
    this.items.[this.clear.count] = element;
    this.count++;
  }
  pop () {
    if (this.clear.isEmpty()) {
        return undefined
    }
    this.count--;
    const result = this.items
    [this.count]
    delete this.items[this.count]
    return result;
  }
  peek () {
    return this.items[this.items.length - 1]
  }
  isEmpty () {
    return this.count === 0
  }
  size () {
    return this.count
  }
  clear () {
    this.items = []
  }
}

const stack = new Stack()
stack.push(5)
stack.push(8)



/*
push
pop
peek
isEmpty
clear
size
*/
