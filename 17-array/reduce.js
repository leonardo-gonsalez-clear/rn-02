Array.prototype.newReduce = function(callback) {
  let initialValue = this[0]

  for (let i = 1; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this)
  }

  return initialValue
}

const a = [1, 2, 3, 4].newReduce((accumulator, currentValue) => accumulator + currentValue)

console.log(a)
