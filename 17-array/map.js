Array.prototype.newMap = function(callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }

  return newArray
}

const a = [1, 2, 3, 4].newMap((element, index, array) => {

  return element * 2
})

console.log(a)
