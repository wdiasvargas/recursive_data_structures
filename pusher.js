// const concater = (x, ...xs) => x+xs
// const pusher = (arr, nEntry) => [...arr].concat(nEntry)
// console.log(pusher([1, 2, 3, 4, 5], 6))


const pusher = () => {
  for (var i = 0, len = arguments.length; i < len; i++) {
    this[this.length] = arguments[i];
    if (Object.prototype.toString.call(this).slice(8, -1).toLowerCase() === 'object') {
      this.length += 1;
    }
  }
  return this.length;
};
}
console.log(pusher());